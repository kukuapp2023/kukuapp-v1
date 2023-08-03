import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Signup: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center " style={{backgroundColor:"#1C2120"}}>
      <View>
        <Text className=' text-white text-2xl my-2 uppercase'>Sign up</Text>
      </View>
        <View>
      <TextInput
        className="w-80 h-10  px-3 my-2 border-2 border-orange-400 rounded-2xl "
        placeholder="Your name"
      />
      <TextInput
        className= "w-80 h-10 px-3 my-2 border-2  border-orange-400 rounded-2xl"
        placeholder="Your mobile number"
        keyboardType="phone-pad"
      />
      <TextInput
        className="w-80 h-10  px-3 my-2 border-2  border-orange-400 rounded-2xl "
        placeholder="Enter your password"
        secureTextEntry
      />
      <TouchableOpacity className="w-40 h-10 my-4 ml-20 bg-orange-400 rounded-2xl border-2 border-white items-center justify-center">
        <Text className="text-white">Sign Up</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
