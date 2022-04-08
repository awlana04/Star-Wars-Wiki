import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '~/styles/theme';

import { Home, Search, Favorites } from '~/screens';

const routeIcons = {
  HomeTab: 'home-outline',
  SearchTab: 'search-outline',
  FavoritesTab: 'heart-outline',
};

export const BottomRoute = () => {
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
        tabBarIcon: ({ _focused, color, _size }) => {
          return (
            <Ionicons name={routeIcons[route.name]} size={22} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="SearchTab"
        component={Search}
        options={{ tabBarLabel: 'Pesquisar' }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={Favorites}
        options={{ tabBarLabel: 'Favoritos' }}
      />
    </Tab.Navigator>
  );
};
