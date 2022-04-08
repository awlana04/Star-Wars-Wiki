import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useFavorites } from '~/services/hooks';
import { dataStore } from '~/services/stores';

import { Logo, Text } from '~/components/atoms';
import {
  Tag,
  IconButton,
  PlayButton,
  FavoritesStateModal,
} from '~/components/molecules';

import { colors } from '~/styles/colors';

import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  IconButtonsView,
  ButtonView,
} from './styles';

export const Hero = ({ item, onDetail }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFavoriteModal, setShowFavoriteModal] = useState(null);

  const navigation = useNavigation();

  const { image_url, type, title, subtitle } = item;

  const { setSelectedData } = dataStore();
  const { addFavorite, getFavorites, removeFavorite } = useFavorites();

  const onPressPlay = () => {
    navigation.navigate('Watch');

    setSelectedData(item);
  };

  const onPressInfo = () => {
    navigation.navigate('Detail');

    setSelectedData(item);
  };

  const checkIsFavorite = async () => {
    const favorites = await getFavorites();

    const isInFavorite = favorites.filter(
      favorite => favorite.id === item.id && favorite.type === item.type,
    );

    setIsFavorite(isInFavorite.length > 0);
  };

  const closeFavoriteModal = () => {
    setTimeout(() => {
      setShowFavoriteModal(null);
    }, 3000);
  };

  const addDataToFavorites = async () => {
    await addFavorite(item);

    setShowFavoriteModal('added');
    closeFavoriteModal();
    checkIsFavorite();
  };

  const removeDataFromFavorites = async () => {
    await removeFavorite(item);

    setShowFavoriteModal('removed');
    closeFavoriteModal();
    checkIsFavorite();
  };

  useEffect(() => {
    checkIsFavorite();
  }, [checkIsFavorite]);

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
            <ButtonView align="flex-start">
              <IconButton
                iconName={
                  isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
                }
                label={isFavorite ? 'Remover Favoritos' : 'Adicionar Favoritos'}
                onPress={() =>
                  isFavorite ? removeDataFromFavorites() : addDataToFavorites()
                }
              />
            </ButtonView>
            <ButtonView>
              <PlayButton onPress={onPressPlay} />
            </ButtonView>
            <ButtonView align="flex-end">
              {!onDetail && (
                <IconButton
                  iconName="information-circle-outline"
                  label="Saiba Mais"
                  onPress={onPressInfo}
                />
              )}
            </ButtonView>
          </IconButtonsView>
        </HeroGradient>
      </HeroImageBackground>
      {!!showFavoriteModal && (
        <FavoritesStateModal
          type={showFavoriteModal}
          visible={!!showFavoriteModal}
          onClose={() => showFavoriteModal(null)}
        />
      )}
    </HeroContainer>
  );
};
