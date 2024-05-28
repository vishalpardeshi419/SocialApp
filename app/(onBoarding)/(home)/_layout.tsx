import React from 'react';

import { Text, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Link } from 'expo-router';

export default function TabLayout() {


  return (
    <View style={styles.lottie}>
      <Text style={styles.lottie_text}>Work in Progress...</Text>
      <LottieView style={{ flex: 1 }} source={require('../../../assets/animations/AnikiHamster.json')} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  lottie: {
    position: 'absolute',
    height: 278,
    width: 290,
    bottom: 0,
    left: 50,
  },
  lottie_text: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'yellow',
  }
});
