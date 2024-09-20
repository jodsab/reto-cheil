import { View, Pressable, ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import Stack from 'expo-router';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react'

const Film = () => {

  const { film } = useLocalSearchParams();
  const navigation = useNavigation();


  const filmJSON = JSON.parse(film);

  useEffect(() => {
    navigation.setOptions({ headerTitle: `Film: ${filmJSON?.title}` });
  }, [navigation]);
  return (
    <ScrollView>
      {
        filmJSON && <View>
          <Card>
            <Card.Content>
              <Text variant='titleMedium'>Intro:</Text>
              <Text variant='bodyMedium'>Opening crawl: {filmJSON?.opening_crawl}</Text>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Text variant='titleMedium'>Info:</Text>
              <Text variant='bodyMedium'>Director: {filmJSON?.director}</Text>
              <Text variant='bodyMedium'>Producer: {filmJSON?.producer}</Text>
              <Text variant='bodyMedium'>Release Date: {filmJSON?.release_date}</Text>
            </Card.Content>
          </Card>
          {
            filmJSON?.characters && <Card>
              <Card.Content>
                <Text variant='titleMedium'>People:</Text>
                {filmJSON?.characters?.map((character, index) => {
                  return (
                    <Link href={{
                      pathname: '/people/[person]',
                      params: { person: JSON.stringify(character) }
                    }} key={index} asChild>
                      <Pressable>
                        <Text variant='bodyMedium' key={index}>{character}</Text>
                      </Pressable>
                    </Link>

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

export default Film