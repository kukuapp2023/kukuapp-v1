import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';
import {RootStackParamList} from '../navigation/NavigationApp';


interface Product {
  description: string;
  price: string;
  size: string;
  condition: string;
}
  type AddProduct = NativeStackScreenProps<RootStackParamList, 'AddProduct'>;
const AddProduct: React.FC = () => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [condition, setCondition] = useState('');

  const handleAddProduct = () => {
    const productData: Product = {
      description,
      price,
      size,
      condition,
    };

    console.log('Product Data:', productData);
    // You can replace the console.log with your actual logic to save the product data
  };

  return (
    <View className='flex-1' >
      <View className='shadow-xl bg-white  rounded-b-xl'>
        <View className='justify-between items-center'>
      <View><Text className='text-xl font-bold uppercase text-black pl-2'>Add Product</Text></View>
      <View className=' w-16 h'>
        <Image
        source={require("../assets/5.png")}
        className="object-cover w-full h-full"
        />
      </View>
      </View>
      </View>
    <View className=' mt-9 justify-center items-center rounded-2xl' >
        <View className=' bg-white w-64 p-4 rounded-2xl'>
            <View>
      <Text>Add New Product</Text>
      <TextInput
      className='border-2 my-2 border-black rounded-full'
        
        placeholder="product name"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
      className='border-2 my-2 border-black rounded-full'
       
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
      className='border-2 my-2 border-black rounded-full'
       
        placeholder="upload imges"
        value={size}
        onChangeText={setSize}
      />
      <TextInput
      className='border-2 my-2 border-black rounded-full'
        
        placeholder="product category"
        value={condition}
        onChangeText={setCondition}
      />
      <TouchableOpacity className='bg-slate-900 rounded-lg w-40 ml-6 ' onPress={handleAddProduct}>
        <Text className='text-white text-center'>Add Product</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
    </View>
  );
};



export default AddProduct;
