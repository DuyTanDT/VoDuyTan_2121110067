import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/my-image.jpg')}
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});