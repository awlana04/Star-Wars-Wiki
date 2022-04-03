import React from 'react';

import { dataStore } from '~/services/stores';

import { ScreenScrollView, Hero, GoBackButton } from '~/components';

export const Detail = () => {
  const { selectedData } = dataStore();

  return (
    <ScreenScrollView>
      <Hero item={selectedData} onDetail />
      <GoBackButton />
    </ScreenScrollView>
  );
};
