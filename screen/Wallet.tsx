import { View, Text, Image } from 'react-native'
import React from 'react'

const Wallet = () => {
  return (
    <View className='flex-1'>
  <View className='flex items-center justify-around flex-row bg-white h-20'>
    <View className=' w-10 h-10 bg-slate-500 rounded-full'>
      <Image
      source={require("../assets/profile1.jpg")}
      className=' object-contain w-full h-full rounded-full'
      />
    </View>
    <View>
      <Text className=' text-black text-2xl font-bold'>My Wallet</Text>
    </View>
    <Text>menu</Text>
  </View>
  <View className=' bg-white mt-8 mx-6 p-3 px-6 rounded-2xl'>
    <Text className='text-black text-xl font-bold'>Total Balance</Text>
    <View>
      <Text className=' text-3xl text-black'>$149,868</Text>
      <View className='w-16 p-1 rounded-sm bga-green-400'><Text className=' text-white'>+49.89%</Text></View>
    </View>
  </View>
  <View className=' bg-white mt-8 mx-6 p-3 px-6 h-28 rounded-2xl flex justify-center '>
  <View className='flex flex-row justify-between'>
    <View className='flex flex-row'>
      <View className=' w-16 h-16 bg-violet-700 p-2 rounded-full'>
        <Image
        source={require('../assets/dollarPu.png')}
        className=' object-contain w-full h-full'
        />
      </View>
      <View className='mt-2 ml-4'>
        <Text>Total Sales</Text>
        <Text>$128,89</Text>
      </View>
    </View>
    <View><Text className=' mt-3 text-green-400'>+4.89%</Text></View>
  </View>
  </View>

  <View className=' bg-white mt-5 mx-6 p-3 px-6 h-28 rounded-2xl flex justify-center '>
  <View className='flex flex-row justify-between'>
    <View className='flex flex-row'>
      <View className=' w-16 h-16  rounded-full'>
      <Image
        source={require('../assets/purchase.png')}
        className=' object-contain w-full h-full'
        />
      </View>
      <View className='mt-2 ml-4'>
        <Text>Total Sales</Text>
        <Text>$128,89</Text>
      </View>
    </View>
    <View><Text className=' mt-3 text-green-400'>+4.89%</Text></View>
  </View>
  </View>

  <View className=' bg-white mt-5 mx-6 p-3 px-6 h-28 rounded-2xl flex justify-center '>
  <View className='flex flex-row justify-between'>
    <View className='flex flex-row'>
      <View className=' w-16 h-16 bg-slate-600 p-2 rounded-full'>
      <Image
        source={require('../assets/dollarPu.png')}
        className=' object-contain w-full h-full'
        />
      </View>
      <View className='mt-2 ml-4'>
        <Text>Total Sales</Text>
        <Text>$128,89</Text>
      </View>
    </View>
    <View><Text className=' mt-3 text-green-400'>+4.89%</Text></View>
  </View>
  </View>
    </View>
  )
}

export default Wallet