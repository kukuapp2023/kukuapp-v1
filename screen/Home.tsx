import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import HeaderApp from '../components/HeaderApp';
import Card from '../components/Card';
import MainTabNavigator from '../navigation/MainTabNavigator';
import Sidebar from '../components/Sidebar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationApp';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {selectCartItems} from '../store/cartSlice';
import {useSelector} from 'react-redux';

// Define the type for this specific screen navigation
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // State to manage the open/close state of the sidebar
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Function to close the sidebar
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  // Function to navigate to the CartScreen
  const handleCart = () => {
    navigation.navigate('CartScreen');
  }

  const cartItems = useSelector(selectCartItems);

  return (
    <View className='flex-1'>
      {/* Header */}
      <HeaderApp/>

      {/* Top Bar */}
      <View className='flex justify-between items-center flex-row'>
        <View className=' w-7 h-7 m-2'>
          {/* Toggle Sidebar Button */}
          <TouchableOpacity onPress={toggleDrawer}>
            <Image
              source={require('../assets/menu.png')}
              className='object-fit h-full w-full'
            />
          </TouchableOpacity>
        </View>
        <View>
          {/* Cart Button */}
          <TouchableOpacity className=' flex-row mr-2' onPress={handleCart}>
            <Image
              source={require('../assets/shopping-cart.png')}
              className='object-fit h-7 w-7 mt-3 '
            />
              <Text className=' text-black text-lg  '>{cartItems.length}</Text>
          </TouchableOpacity>
        
        </View>
      </View>

      {/* Sidebar */}
      <View className=' absolute z-10 w-2/3 mt-44 bg-slate-50 backdrop-blur-sm rounded-r-md'>
        {/* Render the Sidebar if drawerOpen is true */}
        {drawerOpen && (<Sidebar/>)}
      </View>

      {/* Main Content */}
      <View className='mt-6'>
        <View>
          {/* Card Component */}
          <Card/>
        </View>
      </View>
    </View>
  )
}

export default Home;
