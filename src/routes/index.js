import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Screens } from './screens';

export const Routes = () => {
  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};
