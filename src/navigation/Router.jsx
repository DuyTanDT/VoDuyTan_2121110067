import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import TabRouter from './TabRouter';

const Stack=createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen component={TabRouter} name={'Home'} />
           
                {/* <Stack.Screen component={searchitem} name={'Search'} /> */}
            </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Router
