import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectCartItems } from '../store/cartSlice';
import { FlatList } from 'react-native';
import { products } from '../data/Data'; // Make sure you have a file called 'Data.js' with an array of products
import { useNavigation } from '@react-navigation/native';


// Define the structure of a productx
interface Product {
  username: string;
  userprofileImg: string;
  ListingName: string;
  Description: string;
  Price: number;
  Size: string;
  Condition: string;
  Images: string; // You might want to change this type if it's meant to be an array of image URLs
  Quantity: number;
}

// Interface to represent the quantity of items in the cart
interface CartItemQuantity {
  [listingName: string]: number;
}

const Card: React.FC = () => {

const navigation = useNavigation();
  // Define the state variables
    const [likes, setLikes] = React.useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }


  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };


  const [isFollowing, setIsFollowing] = React.useState(false);

  const toggleFollow = () => {
    setIsFollowing((prevFollowing) => !prevFollowing);
  };
  
  console.log(products); // Assuming 'products' is an array of products

  const cartItemQuantity: CartItemQuantity = {}; // Assuming you have this somewhere to keep track of quantities


  const handlenav =()=>{
  navigation.navigate("UserScreen")
  }

  return (
    <View>
      <FlatList
        data={products} // You need to make sure 'products' is defined and contains an array of products
        keyExtractor={item => item.ListingName}
        renderItem={({item}) => (
          <View className=" bg-white m-4 rounded-2xl">
            <View className="flex justify-between flex-row my-1">
              {/* user image */}
              <View className="flex  flex-row">
                <TouchableOpacity 
                onPress={handlenav}
                >
                  <View className="mx-2 w-10 h-10 bg-red-600 rounded-full">
                    <Image
                      source={{uri: item.userprofileImg}} // Assuming 'Images' is an array of image URLs
                      className="object-fit h-full w-full rounded-full "
                    />
                  </View>
                </TouchableOpacity>
                <Text className="mx-1 text-black my-2">{item.username}</Text>

                <TouchableOpacity className=' mt-2 px-3 h-5 border border-black rounded-xl' onPress={toggleFollow}>
                  <View>
                    <Text className=' text-black'>
                      {isFollowing ? 'Unfollow' : 'Follow'}
                    </Text>
                  </View>
                </TouchableOpacity>



              </View>
              {/* Display a divider line */}
              <View className=" w-6 h-5 m-3">
                <Image
                  source={require('../assets/bottomIcon/dashed-line.png')}
                  className="object-fit h-full w-full"
                />
              </View>
            </View>

            {/* Display product image */}
            <View className="px-2 h-56 rounded-2xl">
              <Image
                source={{uri: item.Images}} // Assuming 'Images' is an array of image URLs
                className="object-fit h-full w-full rounded-2xl"
              />
            </View>

            <View className="px-2 my-1 flex justify-between flex-row">
              <View className="flex flex-row">
                {/* Display heart and dollar icons */}
                <TouchableOpacity className=" flex-row" onPress={handleLike}>
                  <View className=" w-5 h-5 m-3">
                    <Image
                      source={require('../assets/heart.png')}
                      className="object-fit h-full w-full"
                    />
                  </View>
                  <Text className=" text-lg mt-2 text-black">{likes}</Text>
                </TouchableOpacity>

                <View className=" flex-row">
                  <View className=" w-5 h-5 my-3 ml-3 flex-row">
                    <Image
                      source={require('../assets/dollar.png')}
                      className="object-fit h-full w-full"
                    />
                  </View>
                  <Text className=" ml-1 text-black text-lg mt-2">
                    {item.Price}
                  </Text>
                </View>

                <View className="w-6 h-5 ml-2 mt-3">
                  <Image
                    source={require('../assets/bottomIcon/hammer.png')}
                    className="object-fit h-full w-full"
                  />
                </View>
              </View>
              <View>
                {/* Add to cart button */}
                <View className=" w-5 h-5 m-3">
                  <TouchableOpacity onPress={() => handleAddToCart(item)}>
                    <Image
                      source={require('../assets/shopping-cart.png')}
                      className="object-fit h-full w-full"
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
