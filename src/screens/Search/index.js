import React, { useState } from 'react';

import { ScreenView, Text, Input } from '~/components/atoms';
import { GridList } from '~/components/molecules';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  return (
    <ScreenView>
      <Text marginBottom={24} fontFamily="bold" size={28}>
        Pesquisar
      </Text>

      <Input placeholder="Pesquise por Título ou Subtítulo do Filme ou Personagem" />

      <GridList type="search" data={results} />
    </ScreenView>
  );
};
