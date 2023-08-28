import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
    <View className='flex-1 justify-center items-center' >
        <View className=' bg-white w-80 p-4'>
            <View>
      <Text>Add New Product</Text>
      <TextInput
      className='border-2 my-2 border-black rounded-full'
        
        placeholder="Description"
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
       
        placeholder="Size"
        value={size}
        onChangeText={setSize}
      />
      <TextInput
      className='border-2 my-2 border-black rounded-full'
        
        placeholder="Condition"
        value={condition}
        onChangeText={setCondition}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
      </View>
      </View>
    </View>
  );
};



export default AddProduct;
