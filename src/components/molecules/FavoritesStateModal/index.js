import React from 'react';

import { Text } from '~/components/atoms';

import DeathStar from '../../../../assets/death_star.png';
import DarthVader from '../../../../assets/darth_vader.png';

import {
  Modal,
  ModalBackgroundContainer,
  ModalContentContainer,
  FavoriteImage,
} from './styles';

export const FavoritesStateModal = ({ visible, onClose, type }) => {
  return (
    <Modal visible={visible} transparent={true} onRequesClose={onClose}>
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <FavoriteImage source={type === 'added' ? DarthVader : DeathStar} />

          <Text marginTop={24} fontFamily="bold" size={28} align="center">
            {`Favorito ${
              type === 'added' ? 'Adicionado' : 'Removido'
            } com Sucesso!`}
          </Text>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </Modal>
  );
};
