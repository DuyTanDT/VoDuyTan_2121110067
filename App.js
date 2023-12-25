import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import Slideshow from './home/Slider';






export default function App() {


  // API
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (productId) => {
    console.log(`Added product with ID ${productId} to the cart`);
  };

  const handlePress = (screen) => {
    console.log(`Navigating to ${screen}`);
    // Perform navigation or other actions based on the button pressed
  };

  const renderProductItem = ({ item }) => (
    <View key={item.id} style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>Price: ${item.price}</Text>
      <TouchableOpacity onPress={() => handleAddToCart(item.id)} style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (

    <View style={styles.container}>
      
      <View style={styles.header}>
        {/* Your logo */}
        <Image source={require('./img/a1.jpg')} style={styles.logo} />

        {/* Search bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={(text) => {
            // Handle search functionality here
          }}
        />
  
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Slideshow />
        {products && (
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.productContainer}
          />
        )}
      </ScrollView>

      <View style={styles.horizontalMenuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Trang chủ')}>
          <Ionicons name="home" size={24} color="black" />
          <Text>Trang chủ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('News')}>
          <Ionicons name="newspaper" size={24} color="black" />
          <Text>News</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Favorite')}>
          <Ionicons name="heart" size={24} color="black" />
          <Text>Favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Hồ sơ')}>
          <Ionicons name="person" size={24} color="black" />
          <Text>Hồ sơ</Text>
        </TouchableOpacity>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productContainer: {
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 150,
    marginBottom: 8,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  // ... other styles

  horizontalMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32, // Increase the padding to make it wider
    marginTop: 16, // Adjust the margin as needed
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#e0e0e0',
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  searchBar: {
    flex: 1,
    marginLeft: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  // ... existing styles
});
