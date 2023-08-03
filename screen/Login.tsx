import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View className="flex-1" style={{backgroundColor: '#F5D20A'}}>
      <View className=" h-1/2 bg-white rounded-b-[50]"></View>
      <View className="flex justify-center items-center ">
        <View className="my-4 text-center">
          <Text className=" text-5xl  text-black ">Login</Text>
          <Text>Sign in to continue</Text>
        </View>

        <View>
          <Text className=" text-black uppercase">username/phone number</Text>
          <TextInput className="w-80 h-15 px-3 my-2 border-1 rounded-2xl bg-white" />
          <Text className=" text-black uppercase">password</Text>
          <TextInput className="w-80 h-15 px-3 my-2 border-1 rounded-2xl bg-white" />
          <TouchableOpacity className="w-80 h-12 my-2  bg-slate-900 rounded-xl border-1 items-center justify-center">
            <Text className="text-white">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
