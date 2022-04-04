import React, { useEffect } from 'react';

import { Logo, Text, Container } from '../../components';

export const SpashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [navigation]);

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text marginTop={12} fontFamily="bold">
        Star Wars Wiki
      </Text>
    </Container>
  );
};
