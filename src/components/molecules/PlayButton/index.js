import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Text } from '~/components/atoms';

import { theme } from '~/styles/theme';

import { PlayButtonContainer } from './styles';

export const PlayButton = ({ onPress }) => {
  return (
    <PlayButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(14)}
        color={theme.colors.black}
      />
      <Text
        marginTop={2}
        marginLeft={4}
        color="dark"
        fontFamily="bold"
        size={14}
      >
        Assistir
      </Text>
    </PlayButtonContainer>
  );
};
