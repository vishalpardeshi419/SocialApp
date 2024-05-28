import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { StyleSheet } from 'react-native';

import { Tabs } from 'expo-router';


export default function TabLayout() {


  return (
    <Tabs>
      <Tabs.Screen options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }} name="(home)" />
      <Tabs.Screen
        options={{
          title: 'Office',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="coffee" color={color} />,
        }} name="(office)" />
    </Tabs>
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
