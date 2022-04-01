import React from 'react';
import { StyleSheet, Image } from 'react-native';

import logoImage from '../../../../assets/logo.png';

export const Logo = () => {
  return (
    <Image style={styles.logo} source={logoImage} />
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 64,
    height: 64,
  },
})