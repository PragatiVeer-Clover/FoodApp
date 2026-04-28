import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { img } from '../../assets';

const Splashscreen = () => {
  return (
    <View style={styles.container}>
      <Image source={img.logo} style={styles.logo} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5CB58',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});

export default Splashscreen;