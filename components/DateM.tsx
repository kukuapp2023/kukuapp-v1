import React, { useState } from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity } from 'react-native';

interface DateModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (date: string) => void;
}

const DateM: React.FC<DateModalProps> = ({ isVisible, onClose, onSelect }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const minYear = currentYear - 100; // Allow selection for individuals aged up to 100 years old;
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const currentDay = currentDate.getDate().toString().padStart(2, '0');

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedDate, setSelectedDate] = useState(currentDay);

  const yearsList = Array.from({ length: 101 }, (_, i) => minYear + i);
  const monthsList = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const datesList = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

  const renderYearItem = (item: number) => {
    const age = currentYear - item;
    const isSelected = item === selectedYear;
  
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('Year item clicked:', item);
          setSelectedYear(item); // Use setSelectedYear to update the state
        }}
      >
        <Text className=' text-center text-xl my-2 px-2' style={{  backgroundColor: isSelected ? 'lightblue' : 'transparent' }}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderMonthItem = (item: string) => {
    const isSelected = item === selectedMonth;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedMonth(item);
          onSelect(`${selectedYear}-${item}-${selectedDate}`);
        }}
      >
        <Text className=' text-center text-xl my-2 px-5'  style={{  backgroundColor: isSelected ? 'lightblue' : 'transparent' }}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderDateItem = (item: string) => {
    const isSelected = item === selectedDate;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedDate(item);
          onSelect(`${selectedYear}-${selectedMonth}-${item}`);
        }}
      >
        <Text className=' text-center text-xl my-2 px-5' style={{  backgroundColor: isSelected ? 'lightblue' : 'transparent' }}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View className=' h-1/2 bg-white w-4/5 rounded-xl'>
          <View className='flex items-center mt-5'>
          <Text className=' font-bold'>Select Date of Birth</Text>
          <TouchableOpacity className=' bg-amber-400 rounded-xl my-2 ' onPress={onClose}>
            <Text className='text-white mx-2 my-1 uppercase text-base'>Submit</Text>
          </TouchableOpacity>
          </View>
         
          <View className=' flex-row justify-around'>
          <View className=' mb-28 '>
          <Text className=' text-center uppercase'>Year</Text>
          <FlatList
            data={yearsList}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => renderYearItem(item)}
          />
          </View>

          <View className=' mb-28 '>
          <Text className=' text-center uppercase'>Month:</Text>
          <FlatList
            data={monthsList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => renderMonthItem(item)}
          />
          </View>

          <View className=' mb-28 '>
          <Text className=' text-center uppercase' > Date:</Text>
          <FlatList
            data={datesList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => renderDateItem(item)}
          />
          </View>
          </View>
          
          
        </View>
      </View>
    </Modal>
  );
};

export default DateM;
