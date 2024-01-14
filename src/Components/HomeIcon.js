import { View, Text, Image } from "react-native";
import React from "react";

const HomeIcon = () => {
  return (
    <View>
      <Image
        style={{
          height: 100,
          width: 220,
          alignSelf: "center",
          paddingTop: 10,
          marginTop: 10,
        }}
        source={require("../assets/logo1.png")}
      />
    </View>
  );
};

export default HomeIcon;
