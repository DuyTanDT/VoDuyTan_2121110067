// ProductsCarousel.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import { myColors } from '../Utils/MyColor';
import { useRoute } from "@react-navigation/native"; // Import the useRoute hook

const styles = {
  container: {
    marginVertical: 8,
  },
  itemContainer: {
    height: 230,
    width: 180,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 8,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 20,
    height: 280,
  },
  contentContainer: {
    padding: 10,
  },
  productName: {
    fontSize: 13,
    fontWeight: "600",
  },
  soldText: {
    color: "black",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  priceText: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  cartAndHeartContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 130,
  },
  heartIcon: {
    marginRight: 10,
    color: "red",
  },
  cartButton: {
    backgroundColor: myColors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    backgroundColor: "#fff",
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  cartButtonText: {
    color: "white",
    fontWeight: "bold",
  },
};

const ProductsCarousel = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const dispatch = useDispatch();
  const nav = useNavigation();
  const route = useRoute(); // Use the useRoute hook to get the route prop

  useEffect(() => {
    // Filter data based on search query
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={22} color="#555" />
        <TextInput
          placeholder="Tìm kiếm sản phẩm"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          style={styles.searchInput}
        />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", {
                main: item,
              });
            }}
            activeOpacity={0.8}
            style={styles.itemContainer}
          >
            <Image style={styles.image} source={{ uri: item.img }} />

            <View style={styles.contentContainer}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.soldText}>Đã bán: {item.pieces}</Text>

              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>Giá: {item.price} Vnd</Text>

                <View style={styles.cartAndHeartContainer}>
                  <Ionicons
                    name="heart-outline"
                    size={22}
                    style={styles.heartIcon}
                    onPress={() => {
                      // Handle heart icon press
                      nav.navigate("Heart", { selectedProduct: item }); // Pass the selected item to Heart.js
                    }}
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(item));
                nav.navigate("Cart");
              }}
              style={styles.cartButton}
            >
              <Text style={styles.cartButtonText}>Giỏ hàng</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsCarousel;
