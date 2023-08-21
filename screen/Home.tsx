import { View, Text, ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderApp from '../components/HeaderApp'
import Card from '../components/Card'
import MainTabNavigator from '../navigation/MainTabNavigator'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'


const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <View className='flex-1'>
    <HeaderApp/>
    <View>
    <View className=' w-7 h-7 m-2'>
    <TouchableOpacity onPress={toggleDrawer} >
    <Image
             source={require('../assets/menu.png')}
              className='object-fit h-full w-full'
             />
        </TouchableOpacity>
             
            </View>
    </View>
    <View className=' absolute z-10 w-2/3 mt-44 bg-slate-50 backdrop-blur-sm rounded-r-md'>
  {drawerOpen && (<Sidebar/>)}
      </View>
    <ScrollView className='mt-6'>
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