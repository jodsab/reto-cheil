import { useState, useEffect, useRef } from 'react';
import { Text, View, FlatList, Button, ScrollView } from 'react-native';
import Searcher from './components/Searcher';
import { SegmentedButtons } from 'react-native-paper';
import PeopleCard from '@/components/PeopleCard';
import FilmsCard from '@/components/FilmsCard';
import VehiclesCard from '@/components/VehiclesCard';
import { useGetData } from '@/hooks/useGetData';
import { getItem } from '@/utils/AsyncStorage';
import { FILTER } from '@/shared/filters';
import LoadingScreen from '@/components/LoadingScreen';

import styles from './styles';

const Home = () => {
  const [value, setValue] = useState('people');
  const [data, setData] = useState([]);

  const { loading } = useGetData();

  const getDataFromStorage = async (info) => {
    let dataToSet = null;

    switch (info) {
      case FILTER.PEOPLE:
        dataToSet = await getItem(FILTER.PEOPLE);
        break;
      case FILTER.VEHICLES:
        dataToSet = await getItem(FILTER.VEHICLES);
        break;
      case FILTER.FILMS:
        dataToSet = await getItem(FILTER.FILMS);
        break;
      default:
        console.error("Filtro no válido");
        return;
    }

    setData(dataToSet);
  };

  const renderCase = (item) => {
    switch (value) {
      case FILTER.PEOPLE:
        return <PeopleCard item={item} />
      case FILTER.FILMS:
        return <FilmsCard item={item} />
      case FILTER.VEHICLES:
        return <VehiclesCard item={item} />
    }
  }

  useEffect(() => {
    getDataFromStorage(value)
  }, [value])

  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>STAR WARS</Text>
      </View>
      <Searcher />
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          { value: FILTER.PEOPLE, label: 'People' },
          { value: FILTER.FILMS, label: 'Films' },
          { value: FILTER.VEHICLES, label: 'Vehicles' },
        ]}
      />
      <View style={styles.flatlist_container}>
        <FlatList
          data={data}
          renderItem={(item) => renderCase(item.item)}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={loading ? <LoadingScreen /> : null}
        />
      </View>
    </View>
  );
};

export default Home;
