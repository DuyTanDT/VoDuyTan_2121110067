import { View, Text } from "react-native";
import React from "react";


const ProductsTile = ({title}) => {
  return (
    <View
      style={{
        
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "Space-between",
        alignItems: "center",
      }}
    >
        <Text style={{left:140, fontSize:25,color: "black", fontWeight:"700"}} >{title} </Text>
      
    </View>
  );
};

export default ProductsTile;
