import React from 'react';
import { FlatList } from 'react-native';

import { Text } from '~/components/atoms';
import { Card } from '~/components/molecules';

import { theme } from '~/styles/theme';

import { HomeListContainer } from './styles';

export const HomeList = ({ data, title, type }) => {
  return (
    <HomeListContainer>
      <Text marginLeft={24} fontFamily="black" size={18}>
        {title}
      </Text>

      <FlatList
        horizontal
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(24),
          paddingBottom: theme.metrics.px(24),
        }}
        data={data}
        renderItem={({ item }) => <Card item={{ ...item, type }} />}
        keyExtractor={item => item.id}
      />
    </HomeListContainer>
  );
};
