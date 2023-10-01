import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


const SupportScreen = () => {
  return (
    <View className=' flex-1' style={{backgroundColor:"#1C2120"}}>
      <Text className=' text-slate-300 text-2xl uppercase text-center mt-10 font-semibold'>Get in Touch with us</Text>
      <View className=' items-center bg-amber-400 mt-20 m-10 rounded-2xl'>
        <Text className=' text-white text-lg text-center mt-10 '>For any support kindly write us to</Text>
        <Text className=' text-black text-3xl mt-5 text-center font-bold '>hey@kuku.com</Text>
        <View className=' w-52 h-52 my-12'>
          <Image
          source={require('../assets/bottomIcon/headphones.png')}
          className=' object-contain w-full h-full'
          />
        </View>
      </View>
    </View>
  )
}

export default SupportScreen

