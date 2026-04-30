import React, { useState, useRef } from 'react';
import { StyleSheet, Text, ImageBackground, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { img } from '../../assets';
import Feather from '@react-native-vector-icons/feather'
import { colors } from '../../styles/colors';
import { hp, scale, wp } from '../../styles/scaling';
import Pagination from './components/Pagination';
import { OnbordingData } from '../../utils/helper';
import { navigate } from '../../utils/NavigationUtils';
import { Paths } from '../../navigation/paths';

const OnBordingscreen = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { width } = Dimensions.get('window');

  const onScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    if (currentIndex < OnbordingData.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      flatListRef.current?.scrollToIndex({ index: nextIdx, animated: true });
    } else {
      navigate(Paths.Welcome);
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={{ alignItems: 'center', width: width - 32 }}>
      <Feather name={item.image} size={40} color={colors.orangeBase} />
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.middleText}>
        {item.description}
      </Text>
    </View>
  )

  return (

    <ImageBackground source={img.onboardImage} style={styles.container}>
      <TouchableOpacity style={styles.skipView} onPress={() => navigate(Paths.Welcome)}>
        <Text style={styles.skiptxt}>Skip </Text>
        <Feather name='chevron-right' size={20} color={colors.orangeBase} />
      </TouchableOpacity>
      <View style={styles.bottomView}>
        <FlatList
          ref={flatListRef}
          data={OnbordingData}
          renderItem={renderItem}
          keyExtractor={item => `item-${item?.id}`}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          onScroll={onScroll}
          scrollEventThrottle={16}
          snapToAlignment="center"
          decelerationRate="fast"
        />
        <Pagination index={currentIndex} data={OnbordingData} />
        <TouchableOpacity style={styles.buttonView} onPress={handleNext}>
          <Text style={styles.btntxt}>{currentIndex === OnbordingData.length - 1 ? 'Get Started' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  skipView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 50,
    right: scale(20),

  },
  skiptxt: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.orangeBase
  },
  bottomView: {
    backgroundColor: colors.white100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 350,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: colors.orangeBase

  },
  middleText: {
    fontSize: 14,
    color: colors.black,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginTop: 16,
  },
  buttonView: {
    backgroundColor: colors.orangeBase,
    width: wp(50),
    height: hp(4.5),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scale(16),
    paddingHorizontal: scale(8)
  },
  btntxt: {
    fontSize: 14,
    color: colors.white100,
    fontWeight: 'bold'
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  icons: {
    width: 50,
    height: 50,
    resizeMode: 'contain',

  },
});

export default OnBordingscreen;
