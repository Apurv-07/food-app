import React from 'react'
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import {Shadow} from 'react-native-shadow-2'
import {useNavigation} from '@react-navigation/native'

function Categories({navigation}) {
    const items = [];
    //console.log(useNavigation())
    function handler(color, title, id){
        console.log(color, title, id)
        navigation.navigate('Overview', {
            color,
            title,
            id,
        })
    }

    for (let i = 0; i < CATEGORIES.length; i++) {
      items.push(
        <View key={CATEGORIES[i].id} style={styles.grids}>
            <Pressable key={CATEGORIES[i].id} style={({pressed})=>[pressed?styles.pressed:{backgroundColor: `${CATEGORIES[i].color}`}]} onPress={()=>handler(CATEGORIES[i].color, CATEGORIES[i].title, CATEGORIES[i].id)}>
            <Shadow distance={15} key={CATEGORIES[i].id} style={styles.grids2}>
                <Text>{CATEGORIES[i].title}</Text>
            </Shadow>
            </Pressable>
        </View>);
    }
    
    // return <ul>{items}</ul>;
  return (
    <ScrollView>
    <View style={styles.mainview}>
        {/* {CATEGORIES.map((item)=>{
            return <Text>{item.title}</Text>
        })} */}
        {[items]}

    </View>
    </ScrollView>

  )
}

const styles=StyleSheet.create({
    mainview:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent:'center',   
    },
    grids2:{
        height: 100,
        width: 130,
        margin: -0, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    grids:{
        color: 'white',
        height: 100,
        width: 130,
        margin: 20,
        elevation: 10,
    },
    pressed:{
        backgroundColor: 'red'
    }
})
export default Categories