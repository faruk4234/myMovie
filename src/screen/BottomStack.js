import React from 'react'
import { Image, Platform, StyleSheet } from 'react-native'
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

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveBackgroundColor: color.primaryOrange
      }}
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
              style={styles.iconstyle}
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
              style={styles.iconstyle}
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
              style={styles.iconstyle}
            />
          )
        }}
      />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    opacity: 0.95,
    borderRadius: 20,
    bottom: 20,
    marginHorizontal: 100,
    height: 35,
    backgroundColor: color.primaryGreen,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconstyle: {
    height: 30,
    width: 30,
    top: (Platform.OS === 'ios') ? 12 : 0
  }
})

export default BottomStack
