import React, { useState, useEffect } from 'react';

import { useFavorites } from '~/services/hooks';

import { ScreenScrollView, Text } from '~/components/atoms';
import { GridList } from '~/components/molecules';

export const Favorites = ({ navigation }) => {
  const [favoritesList, setFavoritesList] = useState([]);

  const { getFavorites } = useFavorites();

  const callGetFavorites = async () => {
    const favorites = await getFavorites();

    setFavoritesList(favorites);
  };

  useEffect(() => {
    const favorite = navigation.addListener('focus', () => {
      callGetFavorites();
    });

    return favorite;
  }, [callGetFavorites]);

  return (
    <ScreenScrollView withPadding>
      <Text marginBottom={24} fontFamily="bold" size={28}>
        Favoritos
      </Text>

      <GridList type="favorites" data={favoritesList} />
    </ScreenScrollView>
  );
};
