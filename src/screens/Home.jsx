import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalette, setColorPalette] = useState([]);
  const getColorData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://color-palette-api.kadikraman.vercel.app/palettes',
      );
      const data = await response.json();

      setColorPalette(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getColorData();
  }, [getColorData]);
  return (
    <>
      <View>
        <FlatList
          data={colorPalette}
          keyExtractor={item => item.paletteName}
          renderItem={({ item }) => (
            <PalettePreview
              colorPalette={item}
              handlePress={() => navigation.navigate('ColorPalette', item)}
            />
          )}
        />
      </View>
    </>
  );
};

export default Home;
