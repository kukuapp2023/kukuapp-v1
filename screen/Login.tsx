import {View, Text, TextInput, TouchableOpacity,Image} from 'react-native';
import {RootStackParamList} from '../navigation/NavigationApp';
import { useNavigation} from '@react-navigation/native';
import{Link} from "@react-navigation/native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';

type Login = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [mobileError, setMobileError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateMobile = () => {
    if (!mobile) {
      setMobileError('Mobile number is required');
    } else if (!/^\d{10}$/i.test(mobile)) {
      setMobileError('Invalid mobile number');
    } else {
      setMobileError(null);
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError(null);
    }
  };

  const handleLogin = () => {
    validateMobile();
    validatePassword();

    // If there are no errors, proceed with login logic here
    if (!mobileError && !passwordError) {
      // Implement your login logic here, e.g., API call for authentication
      console.log('Login successful');
      navigation.navigate('Main');
    }
  };

  return (
    <View className="flex-1" style={{backgroundColor: '#F5D20A'}}>
      <View className=" h-1/2 bg-white rounded-b-[70]">
        <Image
        source={require("../assets/5.png")}
        className="object-cover w-full h-full"
        />
      </View>
      <View className="flex justify-center items-center ">
        <View className="my-4 text-center">
          <Text className=" text-5xl  text-black ">Login</Text>
          <Text>Sign in to continue</Text>
        </View>

        <View>
          <View className='px-3'>
          <Text className=" text-black uppercase px-4">username/phone number</Text>
          <TextInput
            value={mobile}
            onChangeText={text => setMobile(text)}
            onBlur={validateMobile}
            className="my-1 mx-3 border-1 rounded-2xl bg-white"
          />
          <Text className=" text-black px-4 uppercase">password</Text>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            onBlur={validatePassword}
            className=" mx-3 border-1 rounded-2xl bg-white"
          />
          </View>
          <View>
          <TouchableOpacity
            onPress={handleLogin}
            className="h-12 w-60 my-3 mx-10 bg-slate-900 rounded-xl border-1 items-center justify-center">
            <Text className="text-white">Sign Up</Text>
          </TouchableOpacity>
         </View>
         
         <Link to="/ForgotPassword">
          <Text className="text-center">Forgait Password</Text>
         </Link>
        
          <Text className=" text-center">
            <Link to="/Signup">Signup!</Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
