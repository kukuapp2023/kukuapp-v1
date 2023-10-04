import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const OrderSuccessfullScreen = () => {
    const navigation = useNavigation()
    const handleTrackOrder = () => {
        navigation.navigate('YourOrder')
    }

  return (
    <View className='flex-1 '>
        <View className=' h-1/2'>
            <Image
            source={require('../assets/vector22.png')}
            className='object-contain w-full h-full'
            />
        </View>
        <View className=' bg-amber-400 mx-5 rounded-2xl'>
            <Text className=' text-2xl font-extrabold text-white text-center my-10'>Order Successfull</Text>
            <Text className=' text-base text-center'>Your Order has been place successfully</Text>
            <Text className=' text-base text-center'>For any help, kindly reach us at</Text>
            <Text className=' text-xl font-extrabold text-center text-black'>hey@kuku.com</Text>
            <TouchableOpacity onPress={handleTrackOrder} className=' bg-white my-5 h-14 mx-10 rounded-full items-center justify-center '><Text className='text-center text-xl font-extrabold text-amber-400'>Track Your  Order</Text></TouchableOpacity>
        </View>
      
    </View>
  )
}

export default OrderSuccessfullScreen