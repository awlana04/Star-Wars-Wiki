import React from 'react';

import { colors } from '~/styles/colors';

import { Logo, Text } from '~/components/atoms';

import { HeroContainer, HeroImageBackground, HeroGradient } from './styles';

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: 'https://static.wikia.nocookie.net/ptstarwars/images/c/c9/Vingan%C3%A7a_dos_sith_p%C3%B4ster.png/revision/latest?cb=20130922212409',
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          <Logo size="small" />

          <Text>Episódio III</Text>
          <Text>A Vingança dos Siths</Text>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  );
};
