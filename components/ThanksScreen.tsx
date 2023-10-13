import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const ThanksScreen = () => {
    const navigation=useNavigation()
    const handleNavigation =()=>[
        navigation.navigate("Main")
    ]
  return (
    <View className=' flex-1 items-center justify-center ' style={{backgroundColor:'#1C2120'}}>

        <View className=' w-1/3 h-1/3 '>
            <Image
            source={require(".././assets/Logo.png")}
            className=' object-contain w-full h-full'

            />

        </View>
      <Text className=' text-amber-400 text-xl'>Thanks You...!</Text>
      <Text className=' text-amber-400 text-xl'> kuku team will connect shortly.</Text>
      <TouchableOpacity onPress={handleNavigation}  className=' bg-amber-400 p-3 rounded-full mt-5 border border-white '>
        <Text className='text-white'>Go Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ThanksScreen