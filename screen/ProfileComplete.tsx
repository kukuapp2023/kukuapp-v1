import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useState} from 'react';

import {RootStackParamList} from '../navigation/NavigationApp';
import {Link, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DateM from '../components/DateM';



type Sign = NativeStackScreenProps<RootStackParamList, 'ProfileComplete'>;



const ProfileComplete = () => {
  const [selectRadio, setSelectRedio] = React.useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    navigation.navigate('Login');
  }

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDateSelect = (date:string) => {
    setSelectedDate(date);
  };
  
console.log(selectedDate)



  const [isActive, setIsActive] = useState(false);

  const handleRadioButtonClick = () => {
    setIsActive(!isActive);
  };
  

  return (
    <View className="flex-1 " style={{backgroundColor: '#1C2120'}}>
      <ScrollView>
        <StatusBar backgroundColor="#1C2120" barStyle="dark-content" />

        <View className="flex items-center justify-center mt-9">
          <Text className="text-white text-xl  uppercase font-bold">
            Complete Your Profile
          </Text>

          {/* profile images */}

          <View className=" w-32 h-32 bg-neutral-100 rounded-full mt-6">
            <Image
              source={require('../assets/profile1.jpg')}
              className="w-full h-full rounded-full"
            />
          </View>

          <View>
            <View className="p-3">
              <TextInput
                className="border-b-2 border-amber-300 text-center text-lg font-semibold  uppercase text-white w-72 h-12 px-4 mt-6"
                placeholder="Profile Name"
                placeholderTextColor={'#808080'}
              />
              <Text className=" text-center text-white text-lg uppercase font-semibold">
                Profile name
              </Text>
              <View className=' flex-row justify-center items-center '>
                <Text className=" text-center text-white text">
                  Stay Anonymous
                </Text>
                <TouchableOpacity className='mt-1' onPress={handleRadioButtonClick}>
                  <View
                    className=' w-5 h-5 border  border-amber-300 rounded-full flex items-center justify-center ml-2'
                    >
                    {isActive && (
                      <View
                       className=' w-5 h-5 rounded-full'
                      >
                        <Image
                        source={require('../assets/profileicon/check-mark.png')}
                        className=' w-6 h-4  '
                        />
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="w-72 h-[2px] bg-yellow-300"></View>

          <View className="mt-3">
            <TextInput
              className="border-b-2 border-amber-300 text-center text-lg font-semibold  uppercase text-white w-72 h-12 px-4"
              placeholder="EMAIL"
              placeholderTextColor={'#808080'}
            />
          </View>
          <View className="mt-3">
            <TextInput
              className="border-b-2 border-amber-300 text-center text-lg font-semibold  uppercase text-white w-72 h-12 px-4"
              placeholder="Phone Number"
              placeholderTextColor={'#808080'}
            />
          </View>

          {/* radio botton */}
          <View className="flex flex-row my-4">
            <View className="flex flex-row mr-2">
              <TouchableOpacity
                onPress={() => setSelectRedio(1)}
                className=" mt-1 ">
                <View className=" w-5 h-5 border-2 border-amber-300 rounded-full flex items-center justify-center">
                  {selectRadio === 1 ? (
                    <View className=" w-3 h-3 bg-white rounded-full"></View>
                  ) : null}
                </View>
              </TouchableOpacity>
              <View>
                <Image
                  source={require('../assets/gender/male.png')}
                  className="w-5 h-5"
                />
              </View>
              <View className="p-1">
                <Text className="text-center text-white text-xs ">MALE</Text>
              </View>
            </View>

            <View className="flex flex-row mr-2">
              <TouchableOpacity
                onPress={() => setSelectRedio(2)}
                className=" mt-1">
                <View className=" w-5 h-5 border-2 border-amber-300 rounded-full flex items-center justify-center">
                  {selectRadio === 2 ? (
                    <View className=" w-3 h-3 bg-white rounded-full"></View>
                  ) : null}
                </View>
              </TouchableOpacity>
              <View>
                <Image
                  source={require('../assets/gender/female.png')}
                  className="w-5 h-5"
                />
              </View>
              <View className="p-1">
                <Text className="text-center text-white text-xs ">FEMALE</Text>
              </View>
            </View>

            <View className="flex flex-row ">
              <TouchableOpacity
                onPress={() => setSelectRedio(3)}
                className=" mt-1">
                <View className=" w-5 h-5 border-2 border-amber-300 rounded-full flex items-center justify-center">
                  {selectRadio === 3 ? (
                    <View className=" w-3 h-3 bg-white rounded-full"></View>
                  ) : null}
                </View>
              </TouchableOpacity>
              <View>
                <Image
                  source={require('../assets/gender/third-gender.png')}
                  className="w-5 h-5"
                />
              </View>
              <View className="p-1">
                <Text className="text-center text-white text-xs ">OTHER</Text>
              </View>
            </View>
          </View>
          <View className="w-72 h-[2px] bg-yellow-300"></View>

          {/* date of birth */}

          <View className="mt-3">
            <TouchableOpacity
              onPress={openModal}
              className="border-b-2 border-amber-300 text-center  text-lg font-semibold  uppercase text-white w-72 h-12 px-4">
              <Text className="border-b-2 border-amber-300 text-center text-lg font-semibold  uppercase text-white w-72 h-12 px-4">
                {selectedDate ? selectedDate : 'Date of Birth'}
              </Text>
            </TouchableOpacity>
            <DateM
              isVisible={modalVisible}
              onClose={closeModal}
              onSelect={handleDateSelect}
            />
          </View>
          <View>
            <TextInput
              className="w-72 h-32 text-center bg-amber-300 text-base font-bold   rounded-3xl mt-5"
              placeholder="Flat / House No. / Floor / Building / Area / Sector / Locality Company"
            />
          </View>

          <Text>{isActive ? 'Active' : 'Disabled'}</Text>

          <TouchableOpacity
            onPress={handleNavigation}
            className=" w-28 h-7 bg-amber-300 rounded-3xl mt-12 mb-4 border-2 border-dashed border-indigo-400 ">
            <Text className="text-center text-base font-bold">NEXT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileComplete;
