import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorBox from './ColorBox';

const colors = [
  {
    name: 'Cyan',
    value: '#2aa198',
  },
  {
    name: 'Blue',
    value: '#268bd2',
  },
  {
    name: 'Magneta',
    value: '#d33682',
  },
  {
    name: 'Orange',
    value: '#cb4b16',
  },
];

const StylingExercise = () => {
  return (
    <View>
      <Text style={styles.text}>Here are some boxes of different colours</Text>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 5,
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default StylingExercise;
