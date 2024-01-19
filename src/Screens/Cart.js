import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";
import { myColors } from "../Utils/MyColor";
import Orderplaced from "./Orderplaced";
import { Feather } from "@expo/vector-icons";
const Cart = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.CartSlice);
  const [searchText, setSearchText] = useState(""); // Initialize as an empty string
  const [quantities, setQuantities] = useState({});

  const incrementQuantityHandler = (name) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [name]: (prevQuantities[name] || 0) + 1,
    }));
  };

  const decrementQuantityHandler = (name) => {
    if (quantities[name] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [name]: prevQuantities[name] - 1,
      }));
    }
  };

  const handleRemoveItem = (itemName) => {
    dispatch(removeFromCart({ name: itemName }));
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[itemName];
      return updatedQuantities;
    });
  };

  const filteredData = storeData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "white",
        gap: 15,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 23, fontWeight: "600" }}>
          Giỏ hàng
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            flex: 0.5,
            marginLeft: 10,
            paddingLeft: 10,
            borderRadius: 10,
          }}
          placeholder="Tìm kiếm sản phẩm"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: responsiveHeight(19.5),
              borderBottomColor: "#DCDCDC",
              borderBottomWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: 120,
                width: 120,
                resizeMode: "contain",
                marginTop: 20,
              }}
              source={{
                uri: item.img,
              }}
              defaultSource={require("../Utils/Date")}
            />
            <View style={{ flex: 1, marginLeft: 10, justifyContent: "space-between" }}>
              <Text >{item.name}</Text>
              <Text style={{ color: 'red' }}>Giá: ${item.price}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => decrementQuantityHandler(item.name)}>
                  <AntDesign name="minus" size={24} color={myColors.primary} />
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10 }}>{quantities[item.name] || 1}</Text>
                <TouchableOpacity onPress={() => incrementQuantityHandler(item.name)}>
                  <AntDesign name="plus" size={24} color={myColors.primary} />
                </TouchableOpacity>
              </View>
              <Text style={{ color: 'red',top:35 }}>Tổng: ${item.price * (quantities[item.name] || 1)}</Text>

              <TouchableOpacity
                onPress={() => handleRemoveItem(item.name)}
                style={{
                  top: 20,
                left:210,
                  borderRadius: 10,
                  padding: 5,
                }}
              >
                {/* Replace the "Xóa" text with the trash bin icon */}
                <Feather name="trash-2" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={{ flex: 0.9, justifyContent: "flex-end" }}>
        <TouchableOpacity
          onPress={() => {
            nav.navigate(Orderplaced);
          }}
          style={{
            backgroundColor: myColors.primary,
            borderRadius: 20,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
            Mua
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
