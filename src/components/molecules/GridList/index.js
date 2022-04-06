import React from 'react';
import { FlatList } from 'react-native';

import { Container, Text } from '~/components/atoms';
import { Card } from '~/components/molecules';

import KyloRen from '../../../../assets/kylo_ren.png';
import StormTrooper from '../../../../assets/storm_trooper.png';

import { SeparatorView, NoDataImage } from './styles';

export const GridList = ({ data, type }) => {
  return (
    <FlatList
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card size="large" item={item} />}
      keyExtractor={item => String(item.id)}
      ItemSeparatorComponent={() => <SeparatorView />}
      ListEmptyComponent={() => (
        <Container align="center" justify="center" height={500}>
          <NoDataImage
            source={type === 'favorites' ? KyloRen : StormTrooper}
            resizeMode="contain"
          />
          <Text marginTop={12} fontFamily="semiBold" size={14}>
            {`Nenhum ${
              type === 'favorites' ? 'Favorito' : 'Resultado'
            } Encontrado`}
          </Text>
        </Container>
      )}
    />
  );
};
