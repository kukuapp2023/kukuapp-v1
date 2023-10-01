import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'

const YourOrder = () => {
  return (
    <View className='flex-1' style={{backgroundColor:"#1C2120"}}>
      <StatusBar backgroundColor="#1C2120" barStyle="dark-content" />
      <View>
        <Text className=' text-xl font-bold text-center uppercase text-white'>Your Orders</Text>

        <View className=' flex justify-start items-start ml-3'>
            <View className='flex   justify-center items-center flex-row mt-20'>
                <View className=' w-20 h-20 bg-gray-200 mr-3 border-2 border-white rounded-xl'>
                    <Image
                    source={require('../assets/profile1.jpg')}
                    className=" object-cover w-full h-full rounded-xl"
                    />
                </View>
                <View>
                    <Text className=' font-bold text-base text-white'>Product Name</Text>
                    <Text className=' font-bold text-base text-white'>Price:$25</Text>
                    <Text className=' font-bold text-base text-white'>Order Placed:12/11/2032</Text>
                    <Text className=' font-bold text-base text-white'>Status:Order Piked up</Text>
                </View>
            </View>

            <View className='flex   justify-center items-center flex-row mt-20'>
                <View className=' w-20 h-20 bg-gray-200 mr-3 border-2 border-white rounded-xl'>
                    <Image
                    source={require('../assets/profile1.jpg')}
                    className=" object-cover w-full h-full rounded-xl"
                    />
                </View>
                <View>
                    <Text className=' font-bold text-base text-white'>Product Name</Text>
                    <Text className=' font-bold text-base text-white'>Price:$25</Text>
                    <Text className=' font-bold text-base text-white'>Order Placed:12/11/2032</Text>
                    <Text className=' font-bold text-base text-white'>Status:Order Piked up</Text>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default YourOrder