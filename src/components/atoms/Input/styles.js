import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: ${({ theme }) => theme.metrics.px(327)}px;
  height: ${({ theme }) => theme.metrics.px(42)}px;
  margin-top: ${({ theme, marginTop }) => theme.metrics.px(marginTop || 0)}px;
  margin-left: ${({ theme, marginLeft }) =>
    theme.metrics.px(marginLeft || 0)}px;
  margin-bottom: ${({ theme, marginBottom }) =>
    theme.metrics.px(marginBottom || 0)}px;
  margin-right: ${({ theme, marginRight }) =>
    theme.metrics.px(marginRight || 0)}px;
  padding: ${({ theme }) => theme.metrics.px(6)}px;

  border-width: ${({ theme }) => theme.metrics.px(1)}px;
  border-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InputText = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.grey,
}))`
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
`;
