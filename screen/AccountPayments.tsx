import {View, Text, Image, TextInput, Touchable, Button,ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useState} from 'react';
import DateModal from '../components/DateModal';
import YearModal from '../components/YearModal';
import {useNavigation} from '@react-navigation/native';


const AccountPayments = () => {
  const [isDateModalVisible, setDateModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [isYearModalVisible, setYearModalVisible] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [createdCard, setCreatedCard] = useState<any>(null);
  const navigation = useNavigation();

  const openDateModal = () => {
    setDateModalVisible(true);
  };

  const closeDateModal = () => {
    setDateModalVisible(false);
  };

  const openYearModal = () => {
    setYearModalVisible(true);
  };

  const closeYearModal = () => {
    setYearModalVisible(false);
  };

  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
    closeDateModal();
  };

  const handleSelectYear = (year: number) => {
    setSelectedYear(year);
    closeYearModal();
  };

  const createCard = () => {
    // Combine selectedDay and selectedYear to create the card's expiration date
    const expirationDate =
      selectedDay && selectedYear ? `${selectedDay}/${selectedYear}` : 'N/A';

    // Create an object with the collected data
    const newCard = {
      name,
      cardNumber,
      expirationDate,
    };
    setCreatedCard(newCard);
    // You can now use the 'cardData' object as needed (e.g., send it to a server or store it in state).
    console.log('Card Data:', newCard);
    navigation.navigate('OrderSuccessfullScreen')
  };

  const formatCardNumber = (input: string): string => {
    const formattedInput = input
      .replace(/\D/g, '') // Remove non-digit characters
      .slice(0, 16) // Limit to 16 digits
      .replace(/(\d{4})/g, '$1 '); // Add a space after every 4 digits

    return formattedInput;
  };

  const handleCardNumberChange = (text: string): void => {
    const formattedInput = formatCardNumber(text);
    setCardNumber(formattedInput);
  };
  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <ScrollView>
    <View className=" flex-1" style={{backgroundColor: '#1C2120'}}>
      <View className=" bg-amber-400 border-b-2 rounded-lg">
        <View className=" flex justify-center items-center flex-row mt-10 mb-5">
          <Image
            source={require('../assets/profileicon/user.png')}
            className="w-10 h-10"
          />
          <Text className=" text-2xl font-extrabold text-black ml-4">
            Account Payment
          </Text>
        </View>
        <View className=" h-[2px] bg-white"></View>

        <View className=" mx-10 mt-10">
          <Text className=" text-xl text-black">Add New Card</Text>
          <TextInput
            placeholder="Your Name"
            className=" border-b-2 border-white text-lg p-1 "
            value={name}
            onChangeText={setName}
          />
          <View className="mt-10">
            <Text className=" text-xl text-black">Card Number</Text>
            <TextInput
              placeholder="0000 0000 0000 0000"
              className=" border-b-2 border-white p-1 text-lg "
              value={cardNumber}
              onChangeText={handleCardNumberChange}
              keyboardType="numeric"
              maxLength={19}
            />
          </View>
        </View>
        <View className=" mx-10 justify-between flex-row mt-10 mb-10">
          <TouchableOpacity
            onPress={openDateModal}
            className=" flex-row justify-between mr-7 w-28 border-b-2 border-white ">
            <Text className=" text-xl text-black">
              {selectedDay ? `${selectedDay}` : 'Date'}
            </Text>
            <Image
              className="mt-1"
              source={
                selectedDay
                  ? require('../assets/upload.png')
                  : require('../assets/dropdown.png')
              }
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openYearModal}
            className=" flex-row border-b-2 border-white justify-between w-28  ">
            <Text className=" text-xl text-black">
              {selectedYear ? `${selectedYear}` : 'Year'}
            </Text>
            <Image
              className="mt-1 "
              source={
                selectedYear
                  ? require('../assets/upload.png')
                  : require('../assets/dropdown.png')
              }
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
        <DateModal
          isVisible={isDateModalVisible}
          onClose={closeDateModal}
          onSelect={handleSelectDay}
        />
        <YearModal
          isVisible={isYearModalVisible}
          onClose={closeYearModal}
          onSelect={handleSelectYear}
        />
      </View>
      <View>
        {createdCard && (
          <View className=" bg-amber-400 m-10 rounded-2xl p-5">
            <View className=" flex-row-reverse">
              <Text className=" uppercase text-2xl font-extrabold text-black">
                Card
              </Text>
            </View>
            <View className=" mt-3">
              <Text className="text-2xl">{createdCard.cardNumber}</Text>
              <Text className=" text-black">Card Number</Text>
            </View>
            <Text className=" text-2xl mt-3 text-black">
              {createdCard.name}
            </Text>
          </View>
        )}
        <View></View>
      </View>
      <View className=" justify-between items-center flex-row mt-10 mx-4">
        <TouchableOpacity onPress={handleBack} className=" p-2 rounded-lg">
          <Text className="text-white text-lg uppercase font-bold">
            go back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={createCard} className=" p-2 rounded-lg">
          <Text className="text-white text-lg uppercase font-bold">save</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default AccountPayments;
