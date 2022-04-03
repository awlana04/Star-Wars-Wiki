import React from 'react';

import { colors } from '~/styles/colors';

import { Logo, Text } from '~/components/atoms';
import { Tag, IconButton, PlayButton } from '~/components/molecules';

import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  IconButtonsView,
} from './styles';

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

          <Tag marginTop={200}>Filme</Tag>

          <Text marginTop={8} fontFamily="bold" size={28}>
            Episódio III
          </Text>
          <Text size={18}>A Vingança dos Siths</Text>

          <IconButtonsView>
            <IconButton label="Favoritos" iconName="add-circle-outline" />
            <PlayButton />
            <IconButton
              label="Saiba Mais"
              iconName="information-circle-outline"
            />
          </IconButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  );
};
