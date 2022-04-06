import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: ${({ theme }) => theme.metrics.px(327)}px;
  height: ${({ theme }) => theme.metrics.px(42)}px;
  padding: ${({ theme }) => theme.metrics.px(6)}px;

  border-width: ${({ theme }) => theme.metrics.px(1)}px;
  border-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InputText = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.white,
}))`
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
`;
