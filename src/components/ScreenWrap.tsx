import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@react-native-vector-icons/feather';


import { colors } from '../styles/colors';
import { RF, scale } from '../styles/scaling';

const ScreenWrap = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Feather name='chevron-left' size={30} color={colors.orangeBase} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.mainView}>
        {children}
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellowBase,
    flex: 1,

  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  headerView: {
    flexDirection: 'row',
    marginVertical: scale(20),

    alignItems: 'center',
    paddingHorizontal: scale(16),

  },
  text: {
    fontSize: RF(24),
    fontWeight: 'bold',
    color: colors.white100,
    textAlign: 'center',
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: colors.white100,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    marginTop: scale(16),
    alignContent: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: scale(24),
  }
});

export default ScreenWrap;