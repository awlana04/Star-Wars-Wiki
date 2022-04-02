import styled from 'styled-components/native';

export const CardContainer = styled.View`
  width: ${({ theme }) => theme.metrics.px(88)}px;
  height: ${({ theme }) => theme.metrics.px(124)}px;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;

  border-radius: ${({ theme }) => theme.metrics.px(8)}px;

  overflow: hidden;
`;

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
