import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation, route }) => {
  const [colorPalette, setColorPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const newPalette = route.params ? route.params.newPalette : null;

  useEffect(() => {
    if (newPalette) {
      setColorPalette(prev => [...prev, newPalette]);
    }
  }, [newPalette]);

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
          onRefresh={() => {
            setIsRefreshing(true);

            setTimeout(() => {
              setIsRefreshing(false);
            }, 5000);
          }}
          refreshing={isRefreshing}
          data={colorPalette}
          keyExtractor={item => item.paletteName}
          renderItem={({ item }) => (
            <PalettePreview
              colorPalette={item}
              handlePress={() => navigation.navigate('ColorPalette', item)}
            />
          )}
          ListHeaderComponent={
            <TouchableOpacity
              onPress={() => navigation.navigate('NewPaletteModal')}
            >
              <Text style={styles.modal}>Add a color scheme</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    fontSize: 24,
    color: '#19735a',
    fontWeight: 'bold',
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

export default Home;
