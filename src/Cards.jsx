import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

const Cards = (props) => {
  const { name, image, navigation } = props;
  return (
    <TouchableOpacity onPress={() =>  navigation.navigate('Details', { name }) } style={{ marginHorizontal: 10 }}>
      <ImageBackground
        source={image}
        style={{ height: deviceHeight / 5, width: deviceWidth / 2 - 50 }}
        imageStyle={{ borderRadius: 16 }}

      />

      <View>
        <Text style={{ fontSize: 22, width: "100%", height: "100%", textAlign: "center" }}>
          {name}

        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Cards