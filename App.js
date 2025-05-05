// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from './screens/InputScreen';
import OutputScreen from './screens/OutputScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Input">
        <Stack.Screen name="Input" options={
          { headerShown: false }
        } component={InputScreen} />
        <Stack.Screen  options={
          { headerShown: false }
        } name="Output" component={OutputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
