  import { View, Text } from 'react-native'
  import React from 'react'
  import { NavigationContainer } from '@react-navigation/native'
  import { createNativeStackNavigator } from '@react-navigation/native-stack';


  //import screen
  import Login from '../screen/Login';
  import Signup from '../screen/Signup';
  import LoadingScreen from '../screen/LoadingScreen';
  import ForgotPassword from '../screen/ForgotPassword';
  import OnboardingPage from '../screen/OnboardingPage';


  export type RootStackParamList = {
    LoadingScreen: undefined;
    Signup: undefined;
    Login: undefined;
    ForgotPassword: undefined;
    OnboardingPage: undefined;
  }

  const Stack = createNativeStackNavigator<RootStackParamList>();


  const NavigationApp = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoadingScreen">
            <Stack.Screen name="LoadingScreen" options={{headerShown: false}} component={LoadingScreen} />
            <Stack.Screen name="Signup" options={{headerShown: false}} component={Signup} />
            <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
            <Stack.Screen name="ForgotPassword" options={{headerShown: false}} component={ForgotPassword} />
            <Stack.Screen name="OnboardingPage" component={OnboardingPage} />
            </Stack.Navigator>
      </NavigationContainer>
    )
  }

  export default NavigationApp