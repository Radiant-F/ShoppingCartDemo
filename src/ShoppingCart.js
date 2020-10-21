import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import ElectronicScreen from '../src/screen/ElectronicsScreen';
import BookScreen from './screen/BooksScreen';
import CartScreen from './screen/CartScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Electronics" component={ElectronicScreen} />
        <Stack.Screen name="Books" component={BookScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
