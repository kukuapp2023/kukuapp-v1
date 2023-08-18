// MainTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screen/ProfileScreen';
import Home from '../screen/Home';
import Wallet from '../screen/Wallet';
import { Image, View } from 'react-native';
import AuctionPage from '../screen/AuctionPage';
import Messages from '../screen/Messages';

// Define the type for the navigation parameters of the MainTabNavigator
export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
  Wallet: undefined;
  AuctionPage: undefined;
  Messages: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      {/* Wallet Tab */}
      <Tab.Screen
        name="Wallet"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View>
              <Image
                source={require('../assets/bottomIcon/wallet.png')}
                className='object-cover w-full h-full'
              />
            </View>
          ),
        }}
        component={Wallet}
      />
      
      {/* AuctionPage Tab */}
      <Tab.Screen
        name="AuctionPage"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View>
              <Image
                source={require('../assets/bottomIcon/bar-graph.png')}
                className='object-cover w-full h-full'
              />
            </View>
          ),
        }}
        component={AuctionPage}
      />
      
      {/* Home Tab */}
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View>
              <Image
                source={require('../assets/bottomIcon/compass.png')}
                className='object-cover w-full h-full'
              />
            </View>
          ),
        }}
        component={Home}
      />
      
      {/* Messages Tab */}
      <Tab.Screen
        name="Messages"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View>
              <Image
                source={require('../assets/bottomIcon/bell.png')}
                className='object-cover w-full h-full'
              />
            </View>
          ),
        }}
        component={Messages}
      />
      
      {/* Profile Tab */}
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View>
              <Image
                source={require('../assets/bottomIcon/user.png')}
                className='object-cover w-full h-full'
              />
            </View>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
