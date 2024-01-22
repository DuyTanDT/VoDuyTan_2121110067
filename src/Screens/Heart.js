// Heart.js
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Heart = ({ route }) => {
  const { selectedProduct } = route.params || {};
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const loadLikedProducts = async () => {
      try {
        const storedLikedProducts = await AsyncStorage.getItem("likedProducts");
        if (storedLikedProducts !== null) {
          setLikedProducts(JSON.parse(storedLikedProducts));
        }
      } catch (error) {
        console.error("Error loading liked products:", error);
      }
    };

    loadLikedProducts();
  }, []);

  const handleLikeToggle = async () => {
    try {
      // Toggle the liked status for the selected product
      const isLiked = likedProducts.some((product) => product.id === selectedProduct?.id);

      if (isLiked) {
        // Unlike the product
        const updatedLikedProducts = likedProducts.filter((product) => product.id !== selectedProduct?.id);
        setLikedProducts(updatedLikedProducts);
      } else {
        // Like the product
        const updatedLikedProducts = [...likedProducts, selectedProduct];
        setLikedProducts(updatedLikedProducts);
      }

      // Save updated liked products to AsyncStorage
      await AsyncStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
    } catch (error) {
      console.error("Error handling like toggle:", error);
    }
  };

  return (
    <View>
      <Text>This is the Heart Screen</Text>
      {selectedProduct && (
        <View>
          <Image style={{ width: 100, height: 100 }} source={{ uri: selectedProduct.img }} />
          <Text>{selectedProduct.name}</Text>

          <TouchableOpacity onPress={handleLikeToggle}>
            <Text>{likedProducts.some((product) => product.id === selectedProduct.id) ? "Unlike" : "Like"}</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Display the list of liked products */}
      <View>
        <Text>Liked Products:</Text>
        {likedProducts.map((product) => (
          <View key={product.id}>
            <Image style={{ width: 50, height: 50 }} source={{ uri: product.img }} />
            <Text>{product.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Heart;
