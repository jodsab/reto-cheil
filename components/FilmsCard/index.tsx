import { View, Pressable } from 'react-native'
import { Card } from 'react-native-paper';
import { Link } from 'expo-router';

const FilmsCard = ({ item }) => {

  return (
    <View>
      <Link href={{
        pathname: '/films/[film]',
        params: { film: JSON.stringify(item) }
      }} asChild>
        <Pressable>
          <Card >
            <Card.Title title={item.title} />
          </Card>
        </Pressable>
      </Link>
    </View>
  )
}

export default FilmsCard