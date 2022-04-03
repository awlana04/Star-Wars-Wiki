import React from 'react';

import logoImage from '../../../../assets/logo.png';

import { ImageContainer } from './styles';

const sizes = {
  small: 28,
  large: 64,
};

export const Logo = ({ size }) => {
  return <ImageContainer source={logoImage} size={sizes[size || 'large']} />;
};
