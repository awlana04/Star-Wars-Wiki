import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '~/styles/theme';

import { GoBackButtonContainer } from './styles';

export const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <GoBackButtonContainer onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        color={theme.colors.white}
        size={theme.metrics.px(28)}
      />
    </GoBackButtonContainer>
  );
};
