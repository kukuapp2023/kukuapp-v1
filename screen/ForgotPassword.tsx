import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Svg,{Image} from "react-native-svg"
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

      <View>
        <Svg
        width={100}
        height={100}
        viewBox="0 0 375 374"
        >
          <Image
          height="100%"
          width="100%"
          href={require('../assets/vector.svg')}/>

        </Svg>
      </View>

    </View>
  )
}

export default ForgotPassword