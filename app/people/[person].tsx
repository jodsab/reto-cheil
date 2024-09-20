import { View, Pressable, ScrollView } from 'react-native'
import { Link } from 'expo-router';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Card, Text } from 'react-native-paper';
import { useEffect } from 'react'

const Person = () => {

  const { person } = useLocalSearchParams();
  const navigation = useNavigation();


  const personJSON = JSON.parse(person);

  useEffect(() => {
    navigation.setOptions({ headerTitle: `Person: ${personJSON?.name}` });
  }, [navigation]);
  return (
    <ScrollView>
      {
        personJSON && <View>
          <Card>
            <Card.Content>
              <Text variant='titleMedium'>Basic Info:</Text>
              <Text variant='bodyMedium'>Birth Year: {personJSON?.birth_year}</Text>
              <Text variant='bodyMedium'>Gender: {personJSON?.gender}</Text>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Text variant='titleMedium'>Personal Info:</Text>
              <Text variant='bodyMedium'>Home World: {personJSON?.homeworld}</Text>
              <Text variant='bodyMedium'>Height: {personJSON?.height}</Text>
              <Text variant='bodyMedium'>Mass: {personJSON?.mass}</Text>
              <Text variant='bodyMedium'>Hair Color: {personJSON?.hair_color}</Text>
              <Text variant='bodyMedium'>Skin Color: {personJSON?.skin_color}</Text>
              <Text variant='bodyMedium'>Eye Color: {personJSON?.eye_color}</Text>

            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Text variant='titleMedium'>Basic Info:</Text>
              <Text variant='bodyMedium'>Birth Year: {personJSON?.birth_year}</Text>
              <Text variant='bodyMedium'>Gender: {personJSON?.gender}</Text>
            </Card.Content>
          </Card>
          {
            personJSON?.films && <Card>
              <Card.Content>
                <Text variant='titleMedium'>Films:</Text>
                {personJSON?.films?.map((film, index) => {
                  return (
                    <Link href={{
                      pathname: '/films/[film]',
                      params: { film: JSON.stringify(film) }
                    }} key={index} asChild>
                      <Pressable>
                        <Text variant='bodyMedium' key={index}>{film}</Text>
                      </Pressable>
                    </Link>

                  )
                })}
              </Card.Content>
            </Card>
          }

          {
            personJSON?.vehicles && <Card>
              <Card.Content>
                <Text variant='titleMedium'>Vehicles:</Text>
                {personJSON?.vehicles?.map((vehicle, index) => {
                  return (
                    <Text variant='bodyMedium' key={index}>{vehicle}</Text>
                  )
                })}
              </Card.Content>
            </Card>
          }


        </View>
      }



    </ScrollView>
  )
}

export default Person