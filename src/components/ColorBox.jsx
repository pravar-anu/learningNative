import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const ColorBox = ({ colorName, colorValue }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Clipboard.setString(colorValue);
      }}
    >
      <View
        style={[
          {
            backgroundColor: colorValue,
          },
          styles.block,
        ]}
      >
        <Text
          style={[
            styles.textStyle,
            {
              color:
                parseInt(colorValue.replace('#', ''), 16) > 0xffffff / 1.1
                  ? 'black'
                  : 'white',
            },
          ]}
        >
          {colorName} {colorValue} {''}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    marginVertical: 5,
    paddingVertical: 20,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
  },
});

export default ColorBox;
