import React from 'react';

import { dataStore } from '~/services/stores';

import { ScreenScrollView, Hero, GoBackButton, Text } from '~/components';

export const Detail = () => {
  const { selectedData } = dataStore();

  return (
    <ScreenScrollView>
      <Hero item={selectedData} onDetail />
      <GoBackButton />

      <Text marginLeft={24} fontFamily="black" size={18}>
        Descrição
      </Text>
      <Text
        marginTop={12}
        marginLeft={24}
        marginRight={24}
        size={14}
        lineHeight={20}
      >
        {selectedData.description}
      </Text>
    </ScreenScrollView>
  );
};
