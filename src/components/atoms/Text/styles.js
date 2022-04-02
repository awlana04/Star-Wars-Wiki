import styled from 'styled-components/native';

export const TextContainer = styled.Text`
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
`;
