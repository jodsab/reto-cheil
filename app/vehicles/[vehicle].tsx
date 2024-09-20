import { View, ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper';
import Stack from 'expo-router';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react'

const Vehicle = () => {

  const { vehicle } = useLocalSearchParams();
  const navigation = useNavigation();


  const vehicleJSON = JSON.parse(vehicle);

  useEffect(() => {
    navigation.setOptions({ headerTitle: `Vehicle: ${vehicleJSON?.name}` });
  }, [navigation]);
  return (
    <ScrollView>
      {
        vehicleJSON && <View>
          <Card>
            <Card.Content>
              <Text variant='titleMedium'>Basic Info:</Text>
              <Text variant='bodyMedium'>Model: {vehicleJSON?.model}</Text>
              <Text variant='bodyMedium'>Cost in credits: {vehicleJSON?.cost_in_credits}</Text>
            </Card.Content>
          </Card>
        </View>
      }
    </ScrollView>
  )
}

export default Vehicle