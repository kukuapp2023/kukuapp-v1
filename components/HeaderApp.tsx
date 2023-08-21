import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NavigationApp';
const HeaderApp = () => {
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handlAddcard = () => {
      navigation.navigate('AddProduct');
  }
  return (
    <View>
      <View className="h-32 bg-white flex flex-row justify-between rounded-b-2xl ">
        <View className=" m-2  h-14 w-14 rounded-full  ">
          <Image
          source={require('../assets/5.png')}
          className='object-cover h-full w-full rounded-full'

          />
        </View>
        <View className="  bg-lime-400 h-40 w-40 rounded-full  ">
          <Image
          source={require('../assets/profile1.jpg')}
          className='object-cover h-full w-full rounded-full
          '
          />
        </View>
        <View className="m-2 h-10 w-10 bg-amber-500 border-white  rounded-full  ">
      <TouchableOpacity onPress={handlAddcard}><Text className=' text-center mt-2'>Add</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderApp;
