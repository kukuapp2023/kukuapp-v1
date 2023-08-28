import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import MainTabNavigator from '../navigation/MainTabNavigator'

const Main = () => {
  return (
    <SafeAreaView className='flex-1'>
   
    <MainTabNavigator/>
    </SafeAreaView>
  )
}

export default Main