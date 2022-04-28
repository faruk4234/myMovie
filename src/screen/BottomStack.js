import React from 'react'
import { Image, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import home from '../assest/home.png'
import search from '../assest/search.png'
import favovires from '../assest/favrorites.png'

import FavoritesScreen from './favoritesScreen'
import SearchScreen from './searchScreen'
import MainScreen from './mainScreen'
import { favoritesDataMemo } from '../redux/selector'
import color from '../const/color'

const Tab = createBottomTabNavigator()

function BottomStack() {
  const icon = {
    height: 20, width: 20, justifyContent: 'center', alignItems: 'center', top: (Platform.OS === 'ios') ? 12 : 0
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute', opacity: 0.95, borderRadius: 20, bottom: 20, marginHorizontal: 70, height: 40, backgroundColor: color.primaryGreen, overflow: 'hidden', justifyContent: 'center', alignItems: 'center'
        },
      }}
      tabBarOptions={{
        showLabel: false,
        justifyContent: 'center',
        alignItems: 'center'
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
              style={icon}
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
              style={icon}
            />
          )
        }}
      />

      <Tab.Screen
        name="favoriteshScreen"
        component={FavoritesScreen}
        options={{
          headerShown: false,
          tabBarBadge: (useSelector(favoritesDataMemo).length),
          tabBarIcon: () => (
            <Image
              source={favovires}
              style={icon}
            />
          )
        }}
      />

    </Tab.Navigator>
  )
}

export default BottomStack
