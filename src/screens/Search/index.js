import React, { useState, useEffect } from 'react';

import { useGetData } from '~/services/hooks';

import { ScreenView, Text, Input } from '~/components/atoms';
import { GridList } from '~/components/molecules';

export const Search = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

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
        placeholder="Filme ou Nome do Personagem"
        onChangeText={text => setQuery(text)}
        value={query}
      />

      <GridList loading={loading} type="search" data={results} />
    </ScreenView>
  );
};
