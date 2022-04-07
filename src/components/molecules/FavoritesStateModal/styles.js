import styled from 'styled-components/native';

export const Modal = styled.Modal``;

export const ModalContentContainer = styled.View`
  width: ${({ theme }) => theme.metrics.px(326)}px;
  height: ${({ theme }) => theme.metrics.px(326)}px;
  padding: ${({ theme }) => theme.metrics.px(24)}px;

  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.metrics.px(24)}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBackgroundContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.darkTransparent};

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FavoriteImage = styled.Image`
  width: ${({ theme }) => theme.metrics.px(80)}px;
  height: ${({ theme }) => theme.metrics.px(80)}px;
`;
