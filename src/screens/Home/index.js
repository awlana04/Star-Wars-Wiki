import React from 'react';

import { ScreenScrollView, HomeList, Hero } from '~/components';

const FAKE_DATA_CHARACTERS = [
  {
    id: 0,
    image_url:
      'https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Darth-Vader-serie-Disney-Plus.jpg',
    type: 'Personagem',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader (anteriormente chamado Anakin Skywalker) é um dos personagens centrais da série de filmes Star Wars (Guerra nas Estrelas), tendo sido um dos protagonistas, juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo)',
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
      <Hero
        item={{
          image_url:
            'https://static.wikia.nocookie.net/ptstarwars/images/c/c9/Vingan%C3%A7a_dos_sith_p%C3%B4ster.png/revision/latest?cb=20130922212409',
          type: 'Filme',
          title: 'Episódio III',
          subtitle: 'A Vingaça dos Siths',
        }}
      />
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERS} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERS} />
    </ScreenScrollView>
  );
};
