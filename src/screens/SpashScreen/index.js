import React from 'react';

import { Logo } from '../../components';
import { Text } from '../../components';

import { Container } from './styles';

export const SpashScreen = () => {
  return (
    <Container>
      <Logo />
      <Text>Star Wars Wiki</Text>
    </Container>
  );
};
