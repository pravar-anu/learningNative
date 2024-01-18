import React from 'react';
import { View, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;
  return (
    <View>
      <FlatList
        data={colors}
        keyExtractor={item => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} colorValue={item.hexCode} />
        )}
      />
    </View>
  );
};

export default ColorPalette;
