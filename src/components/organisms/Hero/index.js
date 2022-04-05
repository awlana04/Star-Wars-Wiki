import React, { useState, useEffect } from 'react';

import { useFavorites } from '~/services/hooks';

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
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const { addFavorite, getFavorites, removeFavorite } = useFavorites();

  const { image_url, type, title, subtitle } = item;

  const checkIsFavorite = async () => {
    setLoading(true);

    const favorites = await getFavorites();

    const isInFavorite = favorites.filter(
      favorite => favorite.id === item.id && favorite.type === item.title,
    );

    setIsFavorite(isInFavorite.length > 0);
    setLoading(false);
  };

  useEffect(() => {
    checkIsFavorite();
  }, [checkIsFavorite]);

  const addDataToFavorites = async () => {
    await addFavorite(item);

    checkIsFavorite();
  };

  const removeDataFromFavorites = async () => {
    await removeFavorite(item);

    checkIsFavorite();
  };

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
            <IconButton
              onPress={() =>
                isFavorite ? removeDataFromFavorites() : addDataToFavorites()
              }
              label={isFavorite ? 'Remover Favoritos' : 'Adicionar Favoritos'}
              iconName={
                isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
              }
            />
            <PlayButton />
            {!onDetail && (
              <IconButton
                label="Saiba Mais"
                iconName="information-circle-outline"
              />
            )}
          </IconButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  );
};
