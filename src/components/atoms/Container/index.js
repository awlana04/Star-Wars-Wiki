import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${({ theme, width }) =>
    width ? `${theme.metrics.px(width)}px` : '100%'};
  height: ${({ theme, height }) =>
    height ? `${theme.metrics.px(height)}px` : '100%'};

  background-color: ${({ background, theme }) =>
    theme.colors[background || 'dark']};

  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};

  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
`;

export const ScreenScrollView = styled.ScrollView`
  background-color: ${({ background, theme }) =>
    theme.colors[background || 'dark']};
`;
