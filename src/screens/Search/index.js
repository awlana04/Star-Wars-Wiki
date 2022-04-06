import React, { useState } from 'react';

import { ScreenScrollView, Text } from '~/components/atoms';
import { GridList } from '~/components/molecules';

export const Search = () => {
  const [results, setResults] = useState([]);

  return (
    <ScreenScrollView withPadding>
      <Text marginBottom={24} fontFamily="bold" size={28}>
        Pesquisar
      </Text>

      <GridList type="search" data={results} />
    </ScreenScrollView>
  );
};
