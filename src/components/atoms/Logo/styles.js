import styled from 'styled-components/native';

export const ImageContainer = styled.Image`
  width: ${({ theme }) => theme.metrics.px(64)}px;
  height: ${({ theme }) => theme.metrics.px(64)}px;
`;
