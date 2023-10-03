import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {RootStackParamList} from '../navigation/NavigationApp';
import {useNavigation} from '@react-navigation/native';
import {Link} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import { ScrollView } from 'react-native';


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
    } catch (error) {
      console.log(error);
    }
  };


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

  return (
  
    <View className="flex-1" style={{backgroundColor: '#F5D20A'}}>
      <View className=" h-2/5  bg-white rounded-b-[70px] ">
        <Image
          source={require('../assets/Logo.png')}
          className="object-fit w-full h-full "
        />
      </View>
      <View className="flex justify-center items-center ">
        <View className="my-4 text-center">
          <Text className=" text-5xl font-extrabold  text-black ">Login</Text>
          <Text className=" font-bold font-black">Sign in to continue</Text>
        </View>

        <View>
          <View className="px-3">
            <Text className=" text-black font-bold uppercase px-4">
              username/phone number
            </Text>
            <TextInput
              value={mobile}
              onChangeText={text => setMobile(text)}
              onBlur={validateMobile}
              className="my-1 mx-3 border-1 rounded-2xl bg-white"
            />
            <Text className=" text-black font-bold px-4 uppercase">
              password
            </Text>
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
              <Text className="text-white">Login</Text>
            </TouchableOpacity>
          </View>

          <View className="flex justify-center items-center">
            <Link to="/ForgotPassword">
              <Text className="text-center font-black font-extrabold">
                Forgait Password
              </Text>
            </Link>
            <Text className=" font-bold text-center">
              <Link to="/Signup">Signup!</Link>
            </Text>
          </View>

          <View className=' flex justify-center items-center'>
        <Text className="text-black">Signin with</Text>
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
    </View>
    
  );
};

export default Login;
