import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/Screens/Splash";
import Login from "./src/Screens/Login";
import Signup from "./src/Screens/Signup";
import Home from "./src/Screens/Home";
import Details from "./src/Screens/Details";
import Cart from "./src/Screens/Cart";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import Orderplaced from "./src/Screens/Orderplaced";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Slapsh"
        screeeOptions={{
        headerShown:false,  
        }}
      >
        <Stack.Screen name="Slapsh" component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
       <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
       <Stack.Screen name="Orderplaced" component={Orderplaced} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
