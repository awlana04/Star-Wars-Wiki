import styled from 'styled-components/native';

export const ImageContainer = styled.Image`
  width: ${({ theme, size }) => theme.metrics.px(size)}px;
  height: ${({ theme, size }) => theme.metrics.px(size)}px;
`;
