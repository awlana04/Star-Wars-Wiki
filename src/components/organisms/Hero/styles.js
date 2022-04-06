import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const HeroContainer = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;

  display: flex;
  flex-direction: column;
`;

export const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const HeroGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.metrics.px(56)}px;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;

  display: flex;
  flex-direction: column;
`;

export const IconButtonsView = styled.View`
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;

  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
`;

export const ButtonView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: ${({ align }) => align || 'center'};
`;
