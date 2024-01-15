import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { myColors } from "../Utils/MyColor";
import { useNavigation } from "@react-navigation/native";

const HomeSearch = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigation = useNavigation(); // Get the navigation object

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
      {/* Search Bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Search Bar */}
        <View
          style={{
            backgroundColor: "#DDDDDD",
            height: responsiveHeight(8),
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            flex: 1,
          }}
        >
          <FontAwesome name="search" size={24} color="black" />
          <TextInput style={{ flex: 1 }} placeholder="Tìm kiếm " />
        </View>

        {/* Signup Now */}
        <TouchableOpacity
          onPress={() => {
            console.log("Press");
            // Add navigation to Signup screen
            navigation.navigate("Signup");
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: myColors.primary,
              fontWeight: 600,
            }}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeSearch;
