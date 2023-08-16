import { View, Text, Image } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View className='bg-white m-2 rounded-2xl '>
      <View>
        <View className='flex justify-between flex-row my-1'>
            <View className='flex  flex-row'>
              <View className='mx-2 w-10 h-10 bg-red-600 rounded-full'></View>
              <Text className='mx-1 my-2'>Ayushi Gupta</Text>
            </View>
            <View className=' w-5 h-5 m-3'>
             <Image
             source={require('../assets/dashed-line.png')}
              className='object-fit h-full w-full'
             />
            </View>
        </View>
        <View className='px-2 h-56 rounded-2xl'>
      <Image
      source={require('../assets/cardimg.jpg')}
      className='object-fit h-full w-full rounded-2xl '
      />
        </View>
        <View className='px-2 my-1 flex justify-between flex-row'>
            <View className='flex flex-row'>
            <View className=' w-5 h-5 m-3 flex'>
             <Image
             source={require('../assets/heart.png')}
              className='object-fit h-full w-full'
             />
            </View>
            <View className=' w-5 h-5 m-3'>
             <Image
             source={require('../assets/dollar.png')}
              className='object-fit h-full w-full'
             />
            </View>
            </View>
            <View>
            <View className=' w-5 h-5 m-3'>
             <Image
             source={require('../assets/shopping-cart.png')}
              className='object-fit h-full w-full'
             />
            </View>
            </View>
            
          </View>
      </View>
    </View>
  )
}

export default Card