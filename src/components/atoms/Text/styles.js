import styled from 'styled-components/native';

export const TextContainer = styled.Text`
  margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
  margin-left: ${({ theme, marginLeft }) =>
    theme.metrics.px(marginLeft || 0)}px;
  margin-bottom: ${({ theme, marginBottom }) =>
    theme.metrics.px(marginBottom || 0)}px;
  margin-right: ${({ theme, marginRight }) =>
    theme.metrics.px(marginRight || 0)}px;

  color: ${({ theme, color }) => theme.colors[color || 'white']};
  font-family: ${({ theme, fontFamily }) =>
    theme.fonts[fontFamily || 'regular']};
  font-size: ${({ theme, size }) => size || theme.metrics.px(24)}px;
`;
