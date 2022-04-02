import React from 'react';

import logoImage from '../../../../assets/logo.png';

import { ImageContainer } from './styles';

export const Logo = () => {
  return (
    <ImageContainer source={logoImage} />
  );
}
