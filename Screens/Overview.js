import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import OverviewItems from './OverviewItems'

function Overview({route}) {
  //var id=route.params.id
  var myroute=route.params.id
  console.log(myroute)
  const displayMeals=MEALS.filter((mealItem)=>{
    //console.log(mealItem)
    return mealItem.categoryIds.indexOf(myroute)>=0;
  })
  return (
    <View>
        <Text>My Meals</Text>
        {/* <Text>{id}</Text> */}
        <OverviewItems theMeals={displayMeals} />
    </View>
  )
}
const Styles=StyleSheet.create({

})

export default Overview