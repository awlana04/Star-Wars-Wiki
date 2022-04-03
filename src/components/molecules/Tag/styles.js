import styled from 'styled-components/native';

export const TagContainer = styled.View`
  width: auto;
  max-width: ${({ theme }) => theme.metrics.px(80)}px;
  height: ${({ theme }) => theme.metrics.px(24)}px;
  margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
  margin-left: ${({ theme, marginLeft }) =>
    theme.metrics.px(marginLeft || 0)}px;
  margin-bottom: ${({ theme, marginBottom }) =>
    theme.metrics.px(marginBottom || 0)}px;
  margin-right: ${({ theme, marginRight }) =>
    theme.metrics.px(marginRight || 0)}px;
  padding-horizontal: ${({ theme }) => theme.metrics.px(4)}px;

  background-color: ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.metrics.px(24)}px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
