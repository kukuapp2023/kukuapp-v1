  import { View, Text } from 'react-native'
  import React from 'react'
  import { NavigationContainer } from '@react-navigation/native'
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { Provider } from 'react-redux';
  import store from '../store/store';


  //import screen
  import Login from '../screen/Login';
  import Signup from '../screen/Signup';
  import LoadingScreen from '../screen/LoadingScreen';
  import ForgotPassword from '../screen/ForgotPassword';
  import OnboardingPage from '../screen/OnboardingPage';
import Home from '../screen/Home';
import Main from '../screen/Main';
import Wallet from '../screen/Wallet';
import AddProduct from '../components/AddProduct';
import CartScreen from '../components/CartScreen';
import ProfileComplete from '../screen/ProfileComplete';
import YourOrder from '../screen/YourOrder';
import SupportScreen from '../screen/SupportScreen';
import AccountPayments from '../screen/AccountPayments';
import OrderSuccessfullScreen from '../screen/OrderSuccessfullScreen';
import Card from '../components/Card';
import ThanksScreen from '../components/ThanksScreen';
import UserScreen from '../components/UserScreen';

  export type RootStackParamList = {
    LoadingScreen: undefined;
    Signup: undefined;
    Login: undefined;
    ForgotPassword: undefined;
    OnboardingPage: undefined;
    Home:undefined;
    Main:undefined;
    Wallet:undefined;
    AddProduct:undefined
    CartScreen:undefined
    ProfileComplete:undefined
    YourOrder:undefined
    SupportScreen:undefined
    AccountPayments:undefined
    OrderSuccessfullScreen:undefined
    Card:undefined
    ThanksScreen:undefined
    UserScreen:undefined

    
    
  }

  const Stack = createNativeStackNavigator<RootStackParamList>();


  const NavigationApp = () => {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoadingScreen">
            <Stack.Screen name="LoadingScreen" options={{headerShown: false}} component={LoadingScreen} />
            <Stack.Screen name="Signup" options={{headerShown: false}} component={Signup} />
            <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
            <Stack.Screen name="ForgotPassword" options={{headerShown: false}} component={ForgotPassword} />
            <Stack.Screen name="OnboardingPage" options={{headerShown:false}} component={OnboardingPage} />
            <Stack.Screen name='Home' options={{headerShown:false}} component={Home}/>
            <Stack.Screen name='Main' options={{headerShown:false}} component={Main}/>
            <Stack.Screen name='Wallet' options={{headerShown:false}} component={Wallet}/>
            <Stack.Screen name='AddProduct' options={{headerShown:false}} component={AddProduct}/>
            <Stack.Screen name='CartScreen' options={{headerShown:false}} component={CartScreen}/>
            <Stack.Screen name='ProfileComplete' options={{headerShown:false}} component={ProfileComplete}/>
            <Stack.Screen name='YourOrder' options={{headerShown:false}} component={YourOrder}/>
            <Stack.Screen name='SupportScreen' options={{headerShown:false}} component={SupportScreen}/>
            <Stack.Screen name='AccountPayments' options={{headerShown:false}} component={AccountPayments}/>
            <Stack.Screen name='OrderSuccessfullScreen' options={{headerShown:false}} component={OrderSuccessfullScreen}/>
            <Stack.Screen name='Card' options={{headerShown:false}} component={Card}/>
            <Stack.Screen name='ThanksScreen' options={{headerShown:false}}  component={ThanksScreen}/>
            <Stack.Screen name='UserScreen' options={{headerShown:false}}  component={UserScreen}/>

            </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }

  export default NavigationApp