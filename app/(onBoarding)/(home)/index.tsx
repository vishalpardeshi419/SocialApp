import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.lottie}>HOME</View>
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
