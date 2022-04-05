import React, { useEffect } from 'react';

import { useFavorites } from '~/services/hooks';

import { ScreenScrollView, Text } from '~/components/atoms';

export const Favorites = () => {
  const { getFavorites } = useFavorites();

  const callGetFavorites = async () => {
    const favorites = await getFavorites();
  };

  useEffect(() => {
    const favorite = navigation.addListener('focus', () => {
      callGetFavorites();
    });

    return favorite;
  }, [callGetFavorites]);

  return (
    <ScreenScrollView withPadding>
      <Text fontFamily="bold" size={28}>
        Favoritos
      </Text>
    </ScreenScrollView>
  );
};
