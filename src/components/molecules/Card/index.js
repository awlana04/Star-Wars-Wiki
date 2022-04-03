import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { dataStore } from '~/services/stores';

import { CardContainer, CardImage } from './styles';

export const Card = ({ item }) => {
  const { setSelectedData } = dataStore();

  const navigation = useNavigation();

  const onSelectItem = () => {
    setSelectedData(item);
    navigation.navigate('Detail');
  };

  return (
    <CardContainer onPress={() => onSelectItem()}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
};
