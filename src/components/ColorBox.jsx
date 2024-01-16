import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ color }) => {
  return (
    <View
      style={[
        {
          backgroundColor: color.value,
        },
        styles.block,
      ]}
    >
      <Text style={styles.textStyle}>
        {color.name} {color.value}{' '}
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