import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { dataStore } from '~/services/stores';

import { CardContainer, CardImage } from './styles';

const sizes = {
  small: {
    width: 88,
    height: 124,
  },
  large: {
    width: 102,
    height: 150,
  },
};

export const Card = ({ item, size }) => {
  const { setSelectedData } = dataStore();

  const navigation = useNavigation();

  const onSelectItem = () => {
    setSelectedData(item);
    navigation.navigate('Detail');
  };

  return (
    <CardContainer
      onPress={() => onSelectItem()}
      size={size ? sizes[size] : sizes.small}
    >
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
};
