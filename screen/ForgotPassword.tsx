import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const ForgotPassword = () => {
  return (
    <View className='flex-1 justify-center' style={{backgroundColor:"#1C2120"}}>
      <View className=' justify-center items-center'>
        <Text className=' text-4xl te text-center text-amber-400'>Forgot Password</Text>
        <Text className=' text-center text-amber-400'>New Password</Text>
      </View>

      <View className=' py-9 justify-center items-center'>
        <Text className='py-2 text-white text-center'>Please enter Your Resgistered Mobile Number</Text>
        <TextInput
         className=" w-80 h-12 border-yellow-500 rounded-3xl border-2"
        />
      </View>

      <View className=' justify-center items-center'>
        <TouchableOpacity
        className='w-28 h-9 my-3 bg-amber-300 rounded-3xl border-1 items-center justify-center'
        ><Text className=' uppercase'>send otp</Text></TouchableOpacity>
         <TouchableOpacity
        className='w-28 h-9 bg-amber-300 rounded-3xl border-1 items-center justify-center'
        ><Text className=' uppercase'>Login</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default ForgotPassword