import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import Cart from '../Screens/Cart';
import Orderplaced from '../Screens/Orderplaced';
import Signup from '../Screens/Signup';

const Stack= createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name={'Home'} component={Home}/>
    <Stack.Screen name={'Details'}component={Details} options={{ headerShown: false }} />
    <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
    <Stack.Screen name="Orderplaced" component={Orderplaced} options={{ headerShown: false }} />
    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />

   </Stack.Navigator>
  )
}

export default HomeStack
