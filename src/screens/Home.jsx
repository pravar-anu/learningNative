import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalette, setColorPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
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
        <Text style={[{}]}>Add a color scheme</Text>
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
              <Text
                style={[
                  styles.modal,
                  { color: '#19735a', backgroundColor: 'blue' },
                ]}
              >
                Add a color scheme
              </Text>
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
