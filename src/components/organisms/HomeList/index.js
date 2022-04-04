import React from 'react';
import { FlatList } from 'react-native';

import { theme } from '~/styles/theme';
import { Text } from '~/components/atoms';
import { Card } from '~/components/molecules';

import { HomeListContainer } from './styles';

export const HomeList = ({ data, title }) => {
  return (
    <HomeListContainer>
      <Text marginLeft={24} fontFamily="black" size={18}>
        {title}
      </Text>

      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          paddingTop: theme.metrics.px(12),
          paddingLeft: theme.metrics.px(24),
          paddingBottom: theme.metrics.px(24),
        }}
      />
    </HomeListContainer>
  );
};
