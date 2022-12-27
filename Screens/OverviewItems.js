import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function OverviewItems({theMeals}) {
  return (
    <View style={style.detailsContainer}>
        <Text>{theMeals[0].title}</Text>
        <Image style={style.image} source={{uri:`${theMeals[0].imageUrl}`}} />
    </View>
  )
}
const style=StyleSheet.create({
    detailsContainer:{
        backgroundColor: 'red',
        padding: 20,
    },
    image:{
        width: '100%',
        height: 400
    },
    textcolor:{
        color: 'red',
        backgroundColor: 'green'
    }
})

export default OverviewItems