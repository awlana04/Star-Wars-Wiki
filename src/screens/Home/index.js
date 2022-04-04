import React, { useEffect, useState } from 'react';

import { useGetData } from '~/services/hooks';

import { ScreenScrollView, HomeList, Hero, Loader } from '~/components';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);

  const { getFilms, getCharacters } = useGetData();

  const callGetData = async () => {
    const filmsResponse = await getFilms();
    const charactersResponse = await getCharacters();

    if (!filmsResponse.error && !charactersResponse.error) {
      setFilms(filmsResponse);
      setCharacters(charactersResponse);
      setLoading(false);
    }
  };

  useEffect(() => {
    callGetData();
  }, []);

  if (loading) {
    return (
      <ScreenScrollView>
        <Loader />
      </ScreenScrollView>
    );
  }

  return (
    <ScreenScrollView>
      <Hero item={{ ...films[0], type: 'film' }} />
      <HomeList title="Filmes" data={films} />
      <HomeList title="Personagens" data={characters} />
    </ScreenScrollView>
  );
};
