import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '~/styles/theme';
import { Text } from '~/components/atoms';

import { PlayButtonContainer } from './styles';

export const PlayButton = ({ onPress }) => {
  return (
    <PlayButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(16)}
        color={theme.colors.black}
      />
      <Text fontFamily="bold" color="dark" size={14}>
        Play
      </Text>
    </PlayButtonContainer>
  );
};
