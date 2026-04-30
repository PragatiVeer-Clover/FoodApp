import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { img } from '../../assets';
import { colors } from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { RF, scale } from '../../styles/scaling';
import { navigate } from '../../utils/NavigationUtils';
import { Paths } from '../../navigation/paths';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={img.yellowLogo} style={styles.logo} />
      <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
      <View style={styles.buttonView}>
        <CustomButton title="Login" onPress={() => navigate(Paths.Login)} backgroundColor={colors.yellowBase} />
        <CustomButton title="Sign Up" onPress={() => navigate(Paths.Signup)} backgroundColor={colors.yellow2} />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orangeBase,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: scale(200),
    height: scale(250),
    resizeMode: 'contain',
  },
  textStyle: {
    color: colors.white100,
    textAlign: 'center',
    fontSize: RF(15),
    paddingHorizontal: scale(50),
    marginVertical: scale(24)
  },
  buttonView: {
    margin: scale(30)
  }
});

export default Welcome;