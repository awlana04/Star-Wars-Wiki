import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const CustomText = ({ children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 12,

    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
