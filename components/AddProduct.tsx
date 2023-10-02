import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {RootStackParamList} from '../navigation/NavigationApp';
import CustomDropdown from './CustomDropdown';

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

  const dropdownOptions = [
    {
      label: 'New',
      value: 'new',
    },
    {
      label: 'Used',
      value: 'used',
    },
    {
      label: 'Damaged',
      value: 'damaged',
    },
  ];

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
    <View className="flex-1" style={{backgroundColor: '#1C2120'}}>
      <Text className=" text-xl text-white  text-center uppercase font-bold">
        Add Product
      </Text>
      <View className=" bg-amber-400 m-10 items-center rounded-2xl">
        <View className=" my-10 items-center">
          <Image
            source={require('../assets/profileicon/image.png')}
            className=" w-28 h-28 "
          />
          <Text className=" text-xl uppercase text-black text-center font-bold">
            Upload images
          </Text>
        </View>
      </View>

      <View>
        <TextInput
          className="  border-gray-300 border-b-2 text-center text-lg font-semibold "
          placeholder="Write a Description..."
          placeholderTextColor={'#F5D20A'}
        />
      </View>
      <View className=' flex-row justify-between items-center mx-10 my-10'>
      <View className=' w-40'>
        <CustomDropdown
          placeholder="Category"
          onSelect={selectedOption => {
            console.log(`Selected option: ${selectedOption}`);
            // Handle the selected option as needed
          }}
          options={[
            {category: 'Option 1'},
            {category: 'Option 2'},
            {category: 'Option 3'},
          ]}
        />
      </View>
      <View className=' w-40'>
        <CustomDropdown
          placeholder="Condition"
          onSelect={selectedOption => {
            console.log(`Selected option: ${selectedOption}`);
            // Handle the selected option as needed
          }}
          options={[
            {category: 'Option 1'},
            {category: 'Option 2'},
            {category: 'Option 3'},
          ]}
        />
      </View>
      </View>
      <View className='mt-10'>
        <TextInput
          className="  border-gray-300 border-b-2 text-center mx-10 text-lg font-semibold "
          placeholder="Set Your Price"
          placeholderTextColor={'#F5D20A'}
        />
      </View>
      <View className=' my-10'>
        <Text className=' text-amber-400 font-bold text-center '>
          Is it Too much work for you . let Kuku team handle it 
        </Text>
      </View>

      <TouchableOpacity className=' ml-28 bg-white w-40 py-2 rounded-full'><Text className=' text-amber-400 text-xl font-extrabold text-center'>Go kuku</Text></TouchableOpacity>

    </View>
  );
};

export default AddProduct;
