import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import screen
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import LoadingScreen from '../screen/LoadingScreen';
const Stack = createNativeStackNavigator();
const appNavigation = () => {
  return (
    <NavigationContainer>
           <Stack.Screen name="LoadingScreen" options={{headerShown: false}} component={LoadingScreen} />
           <Stack.Screen name="Signup" options={{headerShown: false}} component={Signup} />
           <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
    </NavigationContainer>
  )
}

export default appNavigation