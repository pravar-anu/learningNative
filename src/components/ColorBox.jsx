import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorValue }) => {
  return (
    <View
      style={[
        {
          backgroundColor: colorValue,
        },
        styles.block,
      ]}
    >
      <Text style={styles.textStyle}>
        {colorName} {colorValue}{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginVertical: 5,
    paddingVertical: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  textStyle: {
    color: '#fff',
  },
});

export default ColorBox;
