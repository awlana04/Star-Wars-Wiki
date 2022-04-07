import React, { useState, useEffect } from 'react';

import { ScreenView, Text, Input } from '~/components/atoms';
import { GridList } from '~/components/molecules';

import { useGetData } from '~/services/hooks';

export const Search = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const { getSearchResult } = useGetData();

  const callGetSearchResult = async () => {
    setLoading(true);

    const result = await getSearchResult(query);

    if (!result.error) {
      setResults(result);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (query.length > 0 && query.length % 3 === 0) {
      callGetSearchResult();
    }
  }, [query, callGetSearchResult]);

  return (
    <ScreenView>
      <Text marginBottom={24} fontFamily="bold" size={28}>
        Pesquisar
      </Text>

      <Input
        marginBottom={24}
        value={query}
        onChangeText={text => setQuery(text)}
        placeholder="Filme ou Nome do Personagem"
      />

      <GridList type="search" data={results} loading={loading} />
    </ScreenView>
  );
};
