import { View, Text, ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderApp from '../components/HeaderApp'
import Card from '../components/Card'
import MainTabNavigator from '../navigation/MainTabNavigator'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/NavigationApp'
import{useNavigation} from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type Home = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const handleCart = () => {
    navigation.navigate('CartScreen');
  }

  return (
    <View className='flex-1'>
    <HeaderApp/>
    <View className='flex justify-between items-center flex-row'>
    <View className=' w-7 h-7 m-2'>
    <TouchableOpacity onPress={toggleDrawer} >
    <Image
             source={require('../assets/menu.png')}
              className='object-fit h-full w-full'
             />
        </TouchableOpacity>
             
            </View>
            <View>
              <TouchableOpacity onPress={handleCart}>
              <Image
              source={require('../assets/shopping-cart.png')}
              className='object-fit h-7 w-7 m-2'
              />
              </TouchableOpacity>
            </View>
    </View>
    <View className=' absolute z-10 w-2/3 mt-44 bg-slate-50 backdrop-blur-sm rounded-r-md'>
  {drawerOpen && (<Sidebar/>)}
      </View>
    <View className='mt-6'>
    <View>
    <Card/>
    </View>
    </View>
    </View>
  )
}

export default Home