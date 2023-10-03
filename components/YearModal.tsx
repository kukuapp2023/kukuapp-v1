import React from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface NumberModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (year: number) => void;
}

const YearModal: React.FC<NumberModalProps> = ({ isVisible, onClose, onSelect }) => {
  const currentYear = new Date().getFullYear();
  const yearsList = Array.from({ length: 100 }, (_, i) => currentYear + i); // Generate a list of years

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View className=' bg-white w-60 ml-20 my-60 justify-center items-center rounded-xl' >
        <View >
          <Text>Select a Year:</Text>
          <FlatList
            data={yearsList}
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
      </View>
    </Modal>
  );
};

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5, // Add a shadow for Android
//   },
// });

export default YearModal;
