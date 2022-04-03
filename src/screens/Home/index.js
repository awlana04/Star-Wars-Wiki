import React from 'react';

import { ScreenScrollView, HomeList, Hero } from '~/components';

const FAKE_DATA_CHARACTERS = [
  {
    id: 0,
    image_url:
      'https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus.jpg',
  },
  {
    id: 1,
    image_url:
      'https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg',
  },
];

export const Home = () => {
  return (
    <ScreenScrollView>
      <Hero />
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERS} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERS} />
    </ScreenScrollView>
  );
};
