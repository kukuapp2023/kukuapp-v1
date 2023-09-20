


import { View, Text, TouchableOpacity } from 'react-native';


const GenderRadioButton = ({ label, value, icon, onSelected }: {
    label: any;
    value: any;
    icon: any;
    onSelected: any;
  }) => {
    return (
      <TouchableOpacity 
        style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
        onPress={() => onSelected(value)}
      >
        <View 
          style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: selectedGender === value ? 'blue' : 'gray',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10
          }}
        >
          {selectedGender === value && icon}
        </View>
        <Text>{label}</Text>
      </TouchableOpacity>
    );
  };
  