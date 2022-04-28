import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useDispatch } from 'react-redux'
import BottomTab from './BottomStack'
import DetailScreen from './movieDetailScreen'
import { getData } from '../const/asyncStorage'
import { getLocalFavorites } from '../redux/action'

const Stack = createNativeStackNavigator()

const Screen = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    getData()
      .then((datas) => {
        dispatch(getLocalFavorites(datas))
      })
  }, [])

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="bottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="detailScreen"
          component={DetailScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Screen
