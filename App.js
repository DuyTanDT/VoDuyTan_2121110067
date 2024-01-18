
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import Router from "./src/navigation/Router";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
          <Router>
  </Router>
    </Provider>
  );
};

export default App;
