import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigation/NavigationApp';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type LoadingScreen = NativeStackScreenProps<
  RootStackParamList,
  'LoadingScreen'
>;

const LoadingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{backgroundColor: '#1C2120'}}>
      <View>
        <Text className=" text-amber-400 text-2xl">Welcome to app</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          className="py-3 bg-yellow-400 mx-7 rounded-xl">
          <Text className="text-xl font-bold text-center text-gray-700">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoadingScreen;
