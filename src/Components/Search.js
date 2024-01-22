import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";

const HomeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Perform the search functionality using the searchQuery
    console.log("Search for:", searchQuery);
    // You can implement your search logic here, like fetching data from an API
  };

  return (
    <View
      style={{
        backgroundColor: "#DDDDDD",
        height: responsiveHeight(6.5),
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
      }}
    >
      <FontAwesome name="search" size={24} color="black" />
      <TextInput
        style={{ flex: 1 }}
        placeholder="Tìm kiếm"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

export default HomeSearch;
