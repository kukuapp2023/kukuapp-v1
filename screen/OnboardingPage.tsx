import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/core';
import{NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/NavigationApp';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type OnboardingPage = NativeStackScreenProps<RootStackParamList, 'OnboardingPage'>;

const OnboardingPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleDone = ()=>{
    navigation.navigate('Signup');
}
const nextButton = ({...props})=>{
  return(
    
    <TouchableOpacity className='w-[80px] h-[40px]   bg-amber-300 rounded-3xl border-1 items-center justify-center' {...props}>
    <Text className=' font-bold '>Get Started</Text>
</TouchableOpacity>
    
  )
  
}

  const doneButton = ({...props})=>{
    return (
        <TouchableOpacity className='w-[80px] h-[40px]   bg-amber-300 rounded-3xl border-1 items-center justify-center' {...props}>
            <Text className=' font-bold '>Get Started</Text>
        </TouchableOpacity>
    )
    
}
  return (
    <View className='flex-1'>
      <Onboarding
       onDone={handleDone}
       onSkip={handleDone}
      bottomBarHighlight={false}
     
     
      nextLabel={<Text className='text-bg-amber-300 font-bold'>Next</Text>}
      DoneButtonComponent={doneButton}
     

     
        pages={[
          {
            backgroundColor: '#1C2120',
            image: (<View className=' pt-11 pr-5 flex justify-center items-center  '>
              
              <Image className='h-[600px] w-[400px] mt-8' source={require('../assets/2.png')}/>
             
            </View>),
            title: '',
            subtitle: '',
          },
          {
            backgroundColor: '#1C2120',
            
            image: 
            (<View className=' pt-11 pr-2 flex justify-center items-center  '>
              
              <Image className='h-[600px] w-[400px] mt-8' source={require('../assets/3.png')}/>
             
            </View>),
            title: '',
            subtitle: '',
          },
          {
            backgroundColor: '#1C2120',
            image: 
            (<View className=' pt-11 pr-2 flex justify-center items-center  '>
              
              <Image className='h-[600px] w-[400px] ' source={require('../assets/4.png')}/>
             
            </View>),
            title: '',
            subtitle: "",
          },
        ]}
     />
    </View>
  )
}
 
 
export default OnboardingPage