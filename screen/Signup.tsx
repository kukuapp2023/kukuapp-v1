import React, { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import {useState} from 'react';
import {RootStackParamList} from '../navigation/NavigationApp';
import {Link, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '371758909527-hg955q7nhefsdnheabonklq4dbgqvpal.apps.googleusercontent.com',
});

type Sign = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup: React.FC = () => {
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  const facebookHandler = async () => {
    try {
      await onFacebookButtonPress();
      ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [mobileError, setMobileError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  // Function to validate the name field
  const validateName = () => {
    if (name == '') {
      setNameError('Name is required');
    } else {
      setNameError(null);
    }
  };

  // Function to validate the mobile number field
  const validateMobile = () => {
    if (mobile == '') {
      setMobileError('Mobile number is required');
    } else if (!/^\d{10}$/i.test(mobile)) {
      setMobileError('Invalid mobile number');
    } else {
      setMobileError(null);
    }
  };

  // Function to validate the password field
  const validatePassword = () => {
    if (password == ' ') {
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

    // Check if there are any validation errors
    if (!nameError && !mobileError && !passwordError) {
      // All fields are filled and valid, proceed with signup logic here
      console.log('Signup successful');
      navigation.navigate('ProfileComplete');
    } else {
      // There are validation errors, do not navigate to the login page
      console.log('Signup failed. Please check the input fields.');
    }
  };

useEffect(()=>{
  handleSignup
})
  
  return (
    <View
      className="flex-1 items-center justify-center "
      style={{backgroundColor: '#1C2120'}}>
      <View className="w-80 h-80">
        <Image
          source={require('../assets/Logo.png')}
          className="object-fit w-full h-full"
        />
      </View>
      
     <View className='mb-10'>
      <View>
        <Text className=" text-white text-4xl text-center my-2 uppercase">Sign up</Text>
      </View>
      <View>
        <TextInput
          style={{textAlign: 'center'}}
          className="w-80 h-10  px-3 my-2 text-white  border-2 border-orange-400 rounded-2xl "
          placeholder="Your Name"
          value={name}
          onChangeText={text => setName(text)}
          onBlur={validateName}
          placeholderTextColor={'#ffff'}
        />
        {nameError ? (
          <Text style={{color: 'red', marginBottom: 10}}>{nameError}</Text>
        ) : null}
        <TextInput
          style={{textAlign: 'center'}}
          className="w-80 h-10 px-3 my-2  border-2 text-white  border-orange-400 rounded-2xl"
          placeholder="Your mobile number"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={text => setMobile(text)}
          onBlur={validateMobile}
          placeholderTextColor={'#ffff'}
        />
        {mobileError ? (
          <Text style={{color: 'red', marginBottom: 10}}>{mobileError}</Text>
        ) : null}
        <TextInput
          style={{textAlign: 'center'}}
          className="w-80 h-10  px-3 my-2 border-2 text-white  border-orange-400 rounded-2xl "
          placeholder="Enter your password"
          secureTextEntry
          placeholderTextColor={'#ffff'}
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

      <View className=' flex justify-center items-center'>
        <Text className="text-white">Signin with</Text>
        <View className="flex flex-row mt-4 ">
          <TouchableOpacity onPress={signIn} className=" w-8 h-8 mr-2 ">
            <Image
              source={require('../assets/sociallogo/new.png')}
              className="object-contain w-full h-full"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={facebookHandler} className=" w-8 h-8 ">
            <Image
              source={require('../assets/sociallogo/facebook.png')}
              className="object-fit w-full h-full"
            />
          </TouchableOpacity>
        </View>
      </View>

      </View>
    </View>
  );
};

export default Signup;
