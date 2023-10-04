import React from 'react';
import { View, Text, Button, Modal, FlatList, TouchableOpacity } from 'react-native';

interface NumberModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (day: number) => void;
}

const DateModal: React.FC<NumberModalProps> = ({ isVisible, onClose, onSelect }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the last day of the current month

  const daysOfMonth: number[] = Array.from({ length: lastDayOfMonth }, (_, i) => i + 1); // Array with numbers 1 to the last day of the month

  return (
    <Modal  visible={isVisible} animationType="slide" transparent={true}>
      <View className=' bg-white w-60 ml-20 my-60 rounded-xl' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Select a Day:</Text>
        <FlatList
          data={daysOfMonth}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onSelect(item)}>
                <Text style={{ fontSize: 18, padding: 10 }}>{item}</Text>
              </TouchableOpacity>
          )}
        />
       <TouchableOpacity onPress={onClose}>
            <Text style={{ fontSize: 18, padding: 10 }}>Close</Text>
          </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DateModal;
