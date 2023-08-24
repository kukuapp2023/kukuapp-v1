// Import necessary modules and components
import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'; // Remove unnecessary imports
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, selectCartItems, selectTotalAmount } from '../store/cartSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationApp';

// Define the type for the props
type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'CartScreen'>;

// Define the CartScreen component
const CartScreen: React.FC<CartScreenProps> = () => {
  const dispatch = useDispatch();

  // Get cart items and total amount from the Redux store
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);

  // Function to handle incrementing quantity
  const handleIncrementQuantity = (listingName: string) => {
    const itemToUpdate = cartItems.find(item => item.ListingName === listingName);
    if (itemToUpdate) {
      dispatch(updateQuantity({ ListingName: listingName, newQuantity: itemToUpdate.Quantity + 1 }));
    }
  };
  
  // Function to handle decrementing quantity
  const handleDecrementQuantity = (listingName: string) => {
    const itemToUpdate = cartItems.find(item => item.ListingName === listingName);
    if (itemToUpdate && itemToUpdate.Quantity > 1) {
      dispatch(updateQuantity({ ListingName: listingName, newQuantity: itemToUpdate.Quantity - 1 }));
    }
  };

  // Render the component
  return (
    <View>
      {/* Render the list of cart items */}
      <FlatList
        data={cartItems}
        keyExtractor={item => item.ListingName}
        renderItem={({ item }) => (
          <View className=' bg-white m-5 rounded-2xl h-36  justify-center p-1'>
            <View className='flex justify-between items-center flex-row my-1'>
            {/* Display item details */}
            <View>
              <Text>{item.ListingName}</Text>
              <Text>Price: ${item.Price.toFixed(2)}</Text>
            </View>
            {/* Display item quantity */}
            <View className='flex items-center'>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity className=' bg-orange-300 rounded-full p-2 ' onPress={() => handleIncrementQuantity(item.ListingName)}><Text className=' text-base font-bold'>+</Text></TouchableOpacity>
                <Text>{item.Quantity}</Text>
                <TouchableOpacity className=' bg-orange-300 rounded-full p-2 ' onPress={() => handleDecrementQuantity(item.ListingName)}><Text className=' text-base font-bold'>-</Text></TouchableOpacity>
              </View>
               {/* Button to remove item from cart */}
            <TouchableOpacity className=' bg-orange-300 w-20  rounded-full ' onPress={() => dispatch(removeFromCart(item.ListingName))}>
              <Text className=' text-white text-center'>Remove</Text>
            </TouchableOpacity>
            </View>
           </View>
          </View>
        )}
      />
      {/* Display total amount */}
      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Total Amount: ${totalAmount.toFixed(2)}</Text>
    </View>
  );
};

export default CartScreen;
