import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function TabLayout() {

  return (
    <View style={styles.lottie}>
      <Text>office</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  lottie: {
    position: 'absolute',
    height: 278,
    width: 290,
    left: 50,
  },
  lottie_text: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'yellow',
  }
});
