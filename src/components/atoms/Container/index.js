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

export const ScreenView = styled.View`
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
  padding-vertical: ${({ theme }) => theme.metrics.px(56)}px;

  background-color: ${({ theme }) => theme.colors.dark};
`;

export const ScreenScrollView = styled.ScrollView.attrs(
  ({ theme, withPadding }) => ({
    contentContainerStyle: withPadding
      ? {
          paddingHorizontal: theme.metrics.px(24),
          paddingVertical: theme.metrics.px(56),
        }
      : {},
  }),
)`
  background-color: ${({ background, theme }) =>
    theme.colors[background || 'dark']};
`;
