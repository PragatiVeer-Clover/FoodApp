import React from 'react';
import {  StyleSheet, Text, ImageBackground } from 'react-native';
import { img } from '../../assets';



const OnBordingscreen = () => {
  return (

    <ImageBackground source={img.onboardImage} style={styles.container}>
      <Text>Prgati Veer</Text>
    </ImageBackground>

  )
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default OnBordingscreen;