import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const LoadingScreen = () => {
  return (
    <View
      className="flex-1 items-center justify-center"
      style={{backgroundColor: '#1C2120'}}>
      <View>
        <Text className=" text-amber-400 text-2xl">welcome to app</Text>
      </View>
    </View>
  );
};

export default LoadingScreen;
