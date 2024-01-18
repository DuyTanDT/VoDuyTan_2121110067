import { View, Text, Image,ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../Components/Icon";
import HomeSearch from "../Components/Search";
import HomeBanner from "../Components/Banner";
import ProductsTile from "../Components/Tile";
import ProductsCarousel from "../Components/Product";
import { fruits, vegetables } from "../Utils/Date";


const Home = () => {
  return (
    <ScrollView style={{backgroundColor:"#777777"}}>
    <SafeAreaView style={{ paddingHorizontal: 10, paddingTop: 10,backgroundColor:"while" }}>
      <HomeIcon />
      <HomeSearch/>
      <HomeBanner/>
      <ProductsTile   title="Bomber"/>
      <ProductsCarousel data={fruits}/>
      <ProductsTile title="Hoodie                "/>
      <ProductsCarousel data={vegetables}/>
    
    </SafeAreaView>
    </ScrollView>
  );
};
export default Home;
