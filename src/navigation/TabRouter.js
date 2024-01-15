import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeStack from './HomeStack';
import Cart from '../Screens/Cart';
import Signup from '../Screens/Signup';

const Tab=createBottomTabNavigator();
const TabRouter = () => {
  return (
    <Tab.Navigator
    // initialRouteName={'Home'}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "gray",
      tabBarShowLabel: false,
      tabBarItemStyle: {
        padding: 1,
      },
      tabBarStyle: {
        padding: 5,
        height: 70,
      },
    }}
  >
    <Tab.Screen
      name={'HomeStack'}
      component={HomeStack}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Icon name="home" size={25} color={focused ? "red" : "gray"} />
          );
        },
      }}
    />
    <Tab.Screen
      name={"Search"}
      component={Cart}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Icon name="search" size={25} color={focused ? "red" : "gray"} />
          );
        },
      }}
    />
     <Tab.Screen
      name={"Cart"}
      component={Cart}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <Icon name="cart" size={25} color={focused ? "red" : "gray"} />
          );
        },
      }}
    />
     <Tab.Screen
      name={"User"}
      component={Signup}
      options={{
        tabBarIcon: ({ focused }) => {
          return (
            <FontAwesome name="user" size={25} color={focused ? "red" : "gray"} />
          );
        },
      }}
    />
  </Tab.Navigator>
  )
}

export default TabRouter