import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Logo } from '../../components';
import { CustomText } from '../../components';

export const SpashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <CustomText>Star Wars Wiki</CustomText>
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
})
