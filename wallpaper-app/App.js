import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, OnBoardingScreen } from './screens';
const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name='OnBoardingScreen' component={OnBoardingScreen} />
        <stack.Screen name='HomeScreen' component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;