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

export const Hero = ({ item, onDetail }) => {
  const { image_url, type, title, subtitle } = item;

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}

          <Tag marginTop={onDetail ? 224 : 200}>{type}</Tag>

          <Text marginTop={8} fontFamily="bold" size={28}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>

          <IconButtonsView>
            {!onDetail && (
              <IconButton label="Favoritos" iconName="add-circle-outline" />
            )}
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