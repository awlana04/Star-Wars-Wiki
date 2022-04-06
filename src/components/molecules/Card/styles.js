import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: ${({ theme, size }) => theme.metrics.px(size.width)}px;
  height: ${({ theme, size }) => theme.metrics.px(size.height)}px;
  margin-right: ${({ theme }) => theme.metrics.px(12)}px;

  border-radius: ${({ theme }) => theme.metrics.px(8)}px;

  overflow: hidden;
`;

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
