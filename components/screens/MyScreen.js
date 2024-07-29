// screens/MyScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyComponent from '../MyComponent'; // Import your component

const MyScreen = () => {
  return (
    <View style={styles.container}>
      <MyComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyScreen;
