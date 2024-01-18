import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const HomeBanner = () => {
  const images = [
    require('../assets/banner1.png'),
    require('../assets/banner2.png'),
    require('../assets/banner3.png'),
  ];

  const { width: screenWidth } = Dimensions.get('window');

  const calculateImageHeight = () => {
    // Assume a fixed aspect ratio for the images, adjust as needed
    const aspectRatio = 16 / 9; // You can change this to match your image aspect ratio
    return screenWidth / aspectRatio;
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image
          style={[styles.image, { height: calculateImageHeight() }]}
          source={item}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={_renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        loop={true}
        autoplay={true}
        autoplayInterval={3000}
        containerCustomStyle={{ marginTop: 15 }}
        contentContainerCustomStyle={styles.sliderContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    borderRadius: 15,
  },
  sliderContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeBanner;
