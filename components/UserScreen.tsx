import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const UserScreen = () => {
  return (
    <View className=' flex-1'>
    <View className=' bg-amber-400 mt-5 mx-2  rounded-b-xl'>
        <View className=' flex-row mt-3 mx-2'>
            <View className=' w-24 h-24 rounded-full '>
             <Image
              source={require("../assets/pic2.jpg")}
              className=' object-contain w-full h-full rounded-full'
             />
            </View>
            <View className='mt-3 ml-2'>
                <Text className=' text-2xl font-bold text-black'>Harshita sharma</Text>
                <Text className=' text-lg  text-black'> sort discription  bio and profile</Text>

            </View>

          
        </View>
        <View className='flex-row justify-around mt-5 '>
        <View className=' justify-center items-center'>
                <Text className=' text-2xl text-black font-bold '>72</Text>
                <Text className=" text-base">Listing</Text>
            </View>
            <View className=' justify-center items-center'>
                <Text className=' text-2xl text-black font-bold '>110K</Text>
                <Text className=" text-base">Likes</Text>
            </View>
            <View className=' justify-center items-center'>
                <Text className=' text-2xl text-black font-bold '>1000</Text>
                <Text className=" text-base">follower</Text>
            </View>
            </View>
       <View className=' justify-center items-center my-5'>
            <TouchableOpacity className=' w-28  border-2 border-black rounded-2xl'>
                <Text className=' text-black text-lg font-bold text-center'>Edit Profile</Text>
            </TouchableOpacity>
            </View>
    </View>

    </View>
  )
}

export default UserScreen