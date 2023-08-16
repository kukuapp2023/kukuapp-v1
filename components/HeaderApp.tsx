import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HeaderApp = () => {
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
        <View className="m-2 bg-lime-400 h-10 w-10 rounded-full  "></View>
      </View>
    </View>
  );
};

export default HeaderApp;
