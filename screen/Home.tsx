import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'
import HeaderApp from '../components/HeaderApp'
import Card from '../components/Card'
import MainTabNavigator from '../navigation/MainTabNavigator'


const Home = () => {
  return (
    <View className='flex-1'>
      <View className=' absolute h-full bg-slate-400 z-50 '></View>
    <HeaderApp/>
    <View>
    <View className=' w-7 h-7 m-2'>
             <Image
             source={require('../assets/menu.png')}
              className='object-fit h-full w-full'
             />
            </View>
    </View>
    <ScrollView className='mt-14'>
    <View>
    <Card/>
    <Card/>
    <Card/>
    </View>
    </ScrollView>
    </View>
  )
}

export default Home