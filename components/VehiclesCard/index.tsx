import { View, Pressable } from 'react-native'
import { Card } from 'react-native-paper';
import { Link } from 'expo-router';

const VehiclesCard = ({ item }) => {

  return (
    <View>
      <Link href={{
        pathname: '/vehicles/[vehicle]',
        params: { vehicle: JSON.stringify(item) }
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

export default VehiclesCard