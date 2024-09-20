import { View, Pressable } from 'react-native'
import { Card } from 'react-native-paper';
import { Link } from 'expo-router';

import styles from './styles';

const PeopleCard = ({ item }) => {

  return (
    <View>
      <Link href={{
        pathname: '/people/[person]',
        params: { person: JSON.stringify(item) }
      }} asChild>
        <Pressable>
          <Card >
            <Card.Title title={item.name} />
          </Card>
        </Pressable>
      </Link>
    </View>
  )
}

export default PeopleCard