import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


import {RootStackParamList} from '../navigation/NavigationApp';
import {Link, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';


export default function ProfileScreen() {

  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleProfile=()=>{
      navigation.navigate('ProfileComplete');

    }

    const handleOrder=()=>{
      navigation.navigate('YourOrder');
    }

  return (
    <View className="flex-1" style={{backgroundColor: '#1C2120'}}>
      <View className=" bg-amber-300 p-5 rounded-t-3xl m-2 s">
        <View className=" flex-row m-4">
          <View className=" bg-slate-700 w-20 h-20 rounded-full ">
            <Image
            source={require("../assets/pic2.jpg")}
            className=' object-fit w-full h-full rounded-full'
            />
          </View>
          <View className="m-2 ">
            <Text className=" font-extrabold text-2xl">Harshita Sharma</Text>
            <Text>Short Description/BIO</Text>
            <Text>About the Profile</Text>
          </View>
        </View>
      </View>

      <View className="flex items-center justify-center mt-10">
        
        {/* Your Profile */}

        <TouchableOpacity onPress={handleProfile} className=' bg-amber-300 w-4/5 flex flex-row p-2 rounded-2xl mb-5'>
          <View className=" h-10 w-10">
            <Image
              source={require('../assets/profileicon/user.png')}
              className="object-contain w-full h-full"
            />
          </View>
          <Text className="mt-1 ml-3 font-extrabold text-xl text-black">
            Your Profile
          </Text>
        </TouchableOpacity>

        {/* Your Order */}
        <TouchableOpacity onPress={handleOrder} className=' bg-amber-300 w-4/5 flex mb-5 flex-row p-2 rounded-2xl'>
          <View className=" h-10 w-10">
            <Image
              source={require('../assets/profileicon/fast-delivery.png')}
              className="object-contain w-full h-full"
            />
          </View>
          <Text className="mt-1 ml-3 font-extrabold text-xl text-black">
            Your Order
          </Text>
        </TouchableOpacity>

        {/* Contact Support */}

        <TouchableOpacity className=' bg-amber-300 w-4/5 flex flex-row p-2 rounded-2xl mb-5'>
          <View className=" h-10 w-10">
            <Image
              source={require('../assets/profileicon/customer-service.png')}
              className="object-contain w-full h-full"
            />
          </View>
          <Text className="mt-1 ml-3 font-extrabold text-xl text-black">
          Contact Support
          </Text>
        </TouchableOpacity>

        {/*  Term & Conditions */}

        <TouchableOpacity className=' bg-amber-300 w-4/5 flex flex-row p-2 rounded-2xl mb-5'>
          <View className=" h-10 w-10">
            <Image
              source={require('../assets/profileicon/terms-and-conditions.png')}
              className="object-contain w-full h-full"
            />
          </View>
          <Text className="mt-1 ml-3 font-extrabold text-xl text-black">
            Term & Conditions
          </Text>
        </TouchableOpacity>

        {/* FAQ */}
        <TouchableOpacity className=' bg-amber-300 w-4/5 flex mb-5 flex-row p-2 rounded-2xl'>
          <View className=" h-10 w-10">
            <Image
              source={require('../assets/profileicon/information.png')}
              className="object-contain w-full h-full"
            />
          </View>
          <Text className="mt-1 ml-3 font-extrabold text-xl text-black">
            FAQ
          </Text>
        </TouchableOpacity>

        {/* Privacy Police */}

        <TouchableOpacity className=' bg-amber-300 w-4/5 flex flex-row p-2 rounded-2xl mb-5'>
          <View className=" h-10 w-10">
            <Image
              source={require('../assets/profileicon/insurance.png')}
              className="object-contain w-full h-full"
            />
          </View>
          <Text className="mt-1 ml-3 font-extrabold text-xl text-black">
          Privacy Police
          </Text>
        </TouchableOpacity>



      </View>
    </View>
  );
}