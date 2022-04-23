import React from "react"

import BottomTab from './BottomStack'
import DetailScreen  from './movieDetailScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const Screen =()=>{
    return (
        <NavigationContainer>

          <Stack.Navigator>

            <Stack.Screen 
            name="bottomTab" 
            component={BottomTab} 
            options={{headerShown:false}} />

            <Stack.Screen 
            name="detailScreen" 
            component={DetailScreen} />

          </Stack.Navigator>

        </NavigationContainer>
      );
}

export default Screen