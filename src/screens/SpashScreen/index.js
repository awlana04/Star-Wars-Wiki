import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Logo from '../../../assets/logo.png';

export const SpashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Star Wars Wiki</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 64,
    height: 64,
  },

  title: {
    marginTop: 12,

    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
