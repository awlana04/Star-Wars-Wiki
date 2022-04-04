import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '~/styles/theme';

import { SpashScreen, Home, Detail, Search, Favorites } from '../screens';

const routeIcons = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorites: 'heart-outline',
};

const BottomRoute = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.red,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarLabelStyle: {
          fontSize: theme.metrics.px(11),
          fontFamily: theme.fonts.semiBold,
        },
        tabBarStyle: {
          height: theme.metrics.px(48),
          paddingTop: theme.metrics.px(6),
          paddingBottom: theme.metrics.px(6),
          backgroundColor: theme.colors.black,
          borderTopColor: 'transparent',
        },
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons name={routeIcons[route.name]} size={22} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ tabBarLabel: 'Pesquisar' }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ tabBarLabel: 'Favoritos' }}
      />
    </Tab.Navigator>
  );
};

export const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Spash" component={SpashScreen} />
        <Stack.Screen name="Home" component={BottomRoute} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
