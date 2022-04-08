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
  const navigation = useNavigation();

  const { setSelectedData } = dataStore();

  const onSelectItem = () => {
    setSelectedData(item);

    navigation.navigate('Detail');
  };

  return (
    <CardContainer
      size={size ? sizes[size] : sizes.small}
      onPress={() => onSelectItem()}
    >
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
};
