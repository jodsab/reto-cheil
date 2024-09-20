import { View, Text } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import React from 'react'

const LoadingScreen = () => {
  return (
    <View>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  )
}

export default LoadingScreen