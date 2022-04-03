import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '~/styles/theme';
import { Text } from '~/components/atoms';

import { IconButtonContainer } from './styles';

export const IconButton = ({ onPress, iconName, label }) => {
  return (
    <IconButtonContainer onPress={onPress}>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <Text marginTop={6} fontFamily="semiBold" size={10}>
        {label}
      </Text>
    </IconButtonContainer>
  );
};
