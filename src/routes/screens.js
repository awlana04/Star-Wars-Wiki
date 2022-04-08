import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomRoute } from './tab';
import { SpashScreen, Detail, WatchScreen } from '../screens';

export const Screens = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Spash" component={SpashScreen} />
      <Stack.Screen name="Home" component={BottomRoute} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Watch" component={WatchScreen} />
    </Stack.Navigator>
  );
};
