import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

// View - This defines the view area
// Text - This shows the text, this is the only tag which is used to show text in react-native
// SafeAreaView - This is specifically used for iOS devices for not getting the things render correctly in place.

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
