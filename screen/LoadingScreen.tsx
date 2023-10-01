import React from 'react';
import {RootStackParamList} from '../navigation/NavigationApp';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

type LoadingScreen = NativeStackScreenProps<
  RootStackParamList,
  'LoadingScreen'
>;

const LoadingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate loading progress
      setProgress(prevProgress => (prevProgress >= 1 ? 1 : prevProgress + 0.1));
    }, 500);

    // Navigate to signup screen when progress is complete (100%)
    if (progress >= 1) {
      clearInterval(timer);
      navigation.navigate('OnboardingPage'); // Replace 'Signup' with your actual signup screen component name
    }

    return () => {
      clearInterval(timer);
    };
  }, [navigation, progress]);

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{backgroundColor: '#1C2120'}}>
        <View className=' w-80 h-80'>
          <Image
            source={require('../assets/Logo.png')}
            className='object-fit w-full h-full'/>
        </View>

      <View style={styles.progressBarContainer}>
        <View
          className=" bg-amber-400"
          style={[styles.progressBar, {width: `${progress * 100}%`}]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    width: Dimensions.get('window').width - 100,
    height: 30,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    overflow: 'hidden',
   
  },
  progressBar: {
    height: 30,
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoadingScreen;
