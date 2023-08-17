import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <View className=' bg-amber-500 p-5 rounded-t-3xl m-2'>
      <View className=' flex-row m-4'>
        <View className=' bg-slate-700 w-20 h-20 rounded-full '></View>
        <View className='m-2 '>
          <Text className=' font-extrabold text-2xl'>Harshita Sharma</Text>
          <Text>Short Description/BIO</Text>
          <Text>About the Profile</Text>
        </View>
      </View>
      <View className='flex justify-around items-center flex-row'>
        <View>
          <Text className=' font-extrabold text-3xl'>72</Text>
          <Text className=' font-bold'>Listing</Text>
        </View>
        <View>
        <Text className=' font-extrabold text-3xl'>1,200</Text>
          <Text className=' text-center font-bold'>Followers</Text>
        </View>
        <View>
        <Text className=' font-extrabold text-3xl'>123K</Text>
          <Text className=' text-center font-bold'>Likes</Text>
        </View>
      </View>
      <View className='flex justify-center items-center'>
      <TouchableOpacity
            className="h-10 w-48 mt-8  rounded-xl border-4 border-black items-center justify-center">
            <Text className="text-black">Edite Profile</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}