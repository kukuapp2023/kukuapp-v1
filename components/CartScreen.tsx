// Import necessary modules and components
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native'; // Remove unnecessary imports
import {useSelector, useDispatch} from 'react-redux';
import {
  removeFromCart,
  updateQuantity,
  selectCartItems,
  selectTotalAmount,
} from '../store/cartSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NavigationApp';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// Define the type for the props
type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'CartScreen'>;

// Define the CartScreen component
const CartScreen: React.FC<CartScreenProps> = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // Get cart items and total amount from the Redux store
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const handleBack = () => {
    navigation.navigate('Home');
  };

  const handlePayNow = () => {
    navigation.navigate('AccountPayments');
  }

  // Render the component
  return (
    <View className="flex-1" style={{backgroundColor: '#1C2120'}}>
      {/* Render the list of cart items */}
      <View className=" mt-10">
        <Text className=' text-white text-2xl text-center font-extrabold'>MY CART</Text>
      </View>
      <View className=" bg-white rounded-b-3xl m-5">
        <FlatList
          data={cartItems}
          keyExtractor={item => item.ListingName}
          renderItem={({item}) => (
            <View className=" ml-4 flex-row  items-center">
              <View>
                <TouchableOpacity
                  className="w-10 h-10 top-5 right-3 z-50 bg-red-500 rounded-full"
                  onPress={() => dispatch(removeFromCart(item.ListingName))}>
                  <Image
                  source={require('../assets/bottomIcon/minus.png')}
                    className="object-cover w-full h-full rounded-full"
                  />
                </TouchableOpacity>
                <View className=" w-28 h-28 bg-orange-500 rounded-xl">
                  <Image
                    source={{uri: item.Images}}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </View>
              </View>
              <View className=" ml-8 mt-5">
                <Text className=" text-xl  font-extrabold">
                  {item.ListingName}
                </Text>
                <Text className=" text-xl font-extrabold">
                  Price:${item.Price}
                </Text>
              </View>
            </View>
          )}
        />

        <View className=" bg-yellow-300 rounded-b-3xl mt-9">
          <View className="flex-row justify-between my-10">
            <Text className=" text-lg font-extrabold ml-3">
              Total {totalAmount.toFixed(2)}
            </Text>
            <TouchableOpacity onPress={handlePayNow} className=" mr-4 bg-black rounded-3xl ">
              <Text className="text-white my-3 mx-10">Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Display total amount */}
    <View><Text  className=' text-slate-300 text-xl uppercase text-center font-medium'>continue shopping</Text></View>
    </View>
  );
};

export default CartScreen;
