import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './Screens/Categories';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Overview from './Screens/Overview';

const stack=createStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <StatusBar style="dark" />
      <stack.Navigator>
        <stack.Screen name="Categories" component={Categories}/>
        <stack.Screen name="Overview" component={Overview}/>
      </stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
});
