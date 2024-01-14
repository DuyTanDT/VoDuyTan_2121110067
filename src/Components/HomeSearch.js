import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";

const HomeSearch = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Replace this with your actual login logic
    if (username === "your_username" && password === "your_password") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <View style={{ margin: 10 }}>
      {/* Login Form */}
      {!loggedIn ? (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={{
              
              padding: 5,
              marginRight: 10,
              borderWidth: 1,
              borderRadius: 5,
              width: 100,
            }}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={{
              padding: 5,
              marginRight: 10,
              borderWidth: 1,
              borderRadius: 5,
              width: 100,
            }}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={handleLogin} style={{ padding: 5, backgroundColor: "#4CAF50", borderRadius: 5 }}>
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={{ color: "green" }}>Logged in successfully!</Text>
      )}

      {/* Search Bar */}
      <View
        style={{
          backgroundColor: "#DDDDDD",
          height: responsiveHeight(8),
          borderRadius: 20,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <FontAwesome name="search" size={24} color="black" />
        <TextInput style={{ flex: 1 }} placeholder="Tìm kiếm " />
      </View>
    </View>
  );
};

export default HomeSearch;
