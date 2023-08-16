// MainTabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screen/ProfileScreen';
import Home from '../screen/Home';
import Wallet from '../screen/Wallet';

const Tab = createBottomTabNavigator<MainTabParamList>();
export type MainTabParamList = {
    Home: undefined;
    Profile: undefined;
    Wallet: undefined;
}
const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />

      <Tab.Screen
        name="Profile"
        options={{headerShown: false}}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Wallet"
        options={{headerShown: false}}
        component={Wallet}/>
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
