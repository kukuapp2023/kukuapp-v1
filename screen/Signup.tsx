import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {useState} from 'react';
import {RootStackParamList} from '../navigation/NavigationApp';
import {Link, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Sign = NativeStackScreenProps<RootStackParamList, 'Signup'>;
const Signup: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [mobileError, setMobileError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Function to validate the name field
  const validateName = () => {
    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError(null);
    }
  };

  // Function to validate the mobile number field
  const validateMobile = () => {
    if (!mobile) {
      setMobileError('Mobile number is required');
    } else if (!/^\d{10}$/i.test(mobile)) {
      setMobileError('Invalid mobile number');
    } else {
      setMobileError(null);
    }
  };

  // Function to validate the password field
  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError(null);
    }
  };

  // Function to handle the signup button press
  const handleSignup = () => {
    validateName();
    validateMobile();
    validatePassword();

    // If there are no errors, proceed with signup logic here
    if (!nameError && !mobileError && !passwordError) {
      // Implement your signup logic here, e.g., API call or data storage
      console.log('Signup successful');
      navigation.navigate('OnboardingPage');
    }
  };

  return (
    <View
      className="flex-1 items-center justify-center "
      style={{backgroundColor: '#1C2120'}}>
        <View className='w-60 h-60'>
          <Image
          source={require('../assets/5.png')}
          className='object-contain w-full h-full'
          />
        </View>
      <View>
        <Text className=" text-white text-2xl my-2 uppercase">Sign up</Text>
      </View>
      <View>
        <TextInput
          className="w-80 h-10  px-3 my-2  bg-white border-2 border-orange-400 rounded-2xl "
          placeholder="Your name"
          value={name}
          onChangeText={text => setName(text)}
          onBlur={validateName}
        />
        {nameError ? (
          <Text style={{color: 'red', marginBottom: 10}}>{nameError}</Text>
        ) : null}
        <TextInput
          className="w-80 h-10 px-3 my-2  bg-white border-2  border-orange-400 rounded-2xl"
          placeholder="Your mobile number"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={text => setMobile(text)}
          onBlur={validateMobile}
        />
        {mobileError ? (
          <Text style={{color: 'red', marginBottom: 10}}>{mobileError}</Text>
        ) : null}
        <TextInput
          className="w-80 h-10  px-3 my-2 bg-white border-2  border-orange-400 rounded-2xl "
          placeholder="Enter your password"
          secureTextEntry
        />
        {passwordError ? (
          <Text style={{color: 'red', marginBottom: 10}}>{passwordError}</Text>
        ) : null}
        <TouchableOpacity
          onPress={handleSignup}
          className="w-40 h-10 my-4 ml-20 bg-orange-400 rounded-2xl border-2 border-white items-center justify-center">
          <Text className="text-white">Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-white">Signin with</Text>
        <View className="flex flex-row mt-4 ">
          <TouchableOpacity className=" w-8 h-8 mr-2 ">
            <Image
              source={require('../assets/sociallogo/new.png')}
              className="object-contain w-full h-full"
            />
          </TouchableOpacity>
          <TouchableOpacity className=" w-8 h-8 ">
            <Image
              source={require('../assets/sociallogo/facebook.png')}
              className="object-fit w-full h-full"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
