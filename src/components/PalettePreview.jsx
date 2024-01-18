import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const PalettePreview = ({ colorPalette, handlePress }) => {
  const { paletteName, colors } = colorPalette;
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.Text}>{paletteName}</Text>
      <FlatList
        data={colors.slice(0, 5)}
        keyExtractor={item => item.colorName}
        renderItem={({ item }) => (
          <View
            style={[
              {
                backgroundColor: item.hexCode,
              },
              styles.List,
            ]}
          />
        )}
        horizontal={true}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 5,
  },
  List: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    marginVertical: 10,
  },
});

export default PalettePreview;
