import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FavoritesScreen from './favoritesScreen'
import SearchScreen from './searchScreen'
import MainScreen from './mainScreen'

const Tab = createBottomTabNavigator()

function BottomStack() {

  return (

    <Tab.Navigator>

      <Tab.Screen
        name="mainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="searchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="favoriteshScreen"
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />

    </Tab.Navigator>
  )
}

export default BottomStack
