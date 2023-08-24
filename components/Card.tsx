import { View, Text, Button,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectCartItems } from '../store/cartSlice';
import { FlatList } from 'react-native';
import { products } from '../data/Data';

interface Product {
  username: string;
  ListingName: string;
  Description: string;
  Price: number;
  Size: string;
  Condition: string;
  Images: string; // You might want to change this type if it's meant to be an array of image URLs
  Quantity: number;
}
interface CartItemQuantity {
  [listingName: string]: number;
}

const Card: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);

  const handleAddToCart = (products: Product) => {
    dispatch(addToCart(products));
  };
  console.log(products)

  const cartItemQuantity: CartItemQuantity = {}; // Assuming you have this somewhere to keep track of quantities

  return (
    <View>
      <FlatList
        data={products} // It looks like 'products' is not defined here. Make sure you have an array of products from somewhere.
        keyExtractor={(item) => item.ListingName}
        renderItem={({ item }) => (
          <View className=' bg-white m-4 rounded-2xl'>
            <View className='flex justify-between flex-row my-1'>
            <View className='flex  flex-row'>
              <View className='mx-2 w-10 h-10 bg-red-600 rounded-full'></View>
              <Text className='mx-1 my-2'>{item.username}</Text>
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
      source={item.Images}
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
              <TouchableOpacity 
               
               onPress={() => handleAddToCart(item)}
              >
             <Image
             source={require('../assets/shopping-cart.png')}
              className='object-fit h-full w-full'
             />
             </TouchableOpacity>
            </View>
            </View>
            
          </View>
          </View>
        )}
      />
    </View>
  );
};

export default Card;
