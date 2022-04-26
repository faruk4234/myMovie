import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import home from '../assest/home.png'
import search from '../assest/search.png'
import favovires from '../assest/favrorites.png'

import FavoritesScreen from './favoritesScreen'
import SearchScreen from './searchScreen'
import MainScreen from './mainScreen'

const Tab = createBottomTabNavigator()

function BottomStack() {

  return (

    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >

      <Tab.Screen
        name="mainScreen"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={home}
              style={{ height: 25, width: 25 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="searchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={search}
              style={{ height: 25, width: 25 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="favoriteshScreen"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={favovires}
              style={{ height: 25, width: 25 }}
            />
          )
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomStack
