import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Feather } from '@expo/vector-icons';
import { myColors } from '../Utils/MyColor';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/CartSlice';

const ProductDetails = ({ route }) => {
  const dispatch = useDispatch();
  const productData = route.params.main;
  const { name, price, img } = productData;

  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <View style={styles.header}>
        <Image
          style={styles.productImage}
          source={{ uri: img }}
        />
        <TouchableOpacity style={styles.backButton} onPress={() => nav.navigate("Home")}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Feather name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>Giá: {price} VND</Text>
        <Text style={styles.additionalInfo}>

          - Dễ mặc, dễ phối đồ{"\n"}
          - Phù hợp với mọi thời tiết nắng nóng hay trở gió lạnh{"\n"}
          - Chất vải nỉ bông PO dày mềm mịn. Nỉ bông PO là vải nỉ độ dày vừa đủ, không quá nóng, sợi bông thấm hút, êm, mịn.{"\n"}
     
          - Tư vấn bảng size áo hoodie theo cân nặng và chiều cao:{"\n"}
          + Size XS: cân nặng từ 38kg-42kg; chiều cao 1.45m-1.60m{"\n"}
          + Size S: cân nặng từ 42kg-47kg; chiều cao từ 1.50m-1.65m{"\n"}
          + Size M: cân nặng từ 47kg-52kg; chiều cao từ 1.55m-1.70m{"\n"}
          + Size L: cân nặng từ 52kg-60kg; chiều cao từ 1.55m-1.70m
        </Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {
              dispatch(addToCart(productData));
              nav.navigate("Cart");
            }}
            style={styles.cartButton}
          >
            <Text style={styles.buttonText}>Giỏ hàng</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log("Mua Hàng button clicked");
              // Add your logic for purchasing here
            }}
            style={styles.buyButton}
          >
            <Text style={styles.buttonText}>Mua ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.background,
  },
  header: {
    position: 'relative',
  },
  productImage: {
    height: 400,
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  shareButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  productInfo: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  productName: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  productPrice: {

    fontSize: 20,
    color: 'red',
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cartButton: {
    backgroundColor: myColors.primary,
    borderRadius: 20,
    height: 60,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: myColors.ye,
    borderRadius: 20,
    height: 60,
    width: '45%',
    justifyContent: 'center',

    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProductDetails;
