import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { colors } from '../../../styles/colors';

import IconByVariant from '../../../components/IconByVariant';
import { hp, RF, RS, scale, wp } from '../../../styles/scaling';
import Feather from '@react-native-vector-icons/feather';
import { bestSellerList } from '../../../utils/helper';
const BestSeller = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Best Seller </Text>
        <TouchableOpacity style={styles.arrow}>
          <Text style={styles.seeMore}>View All</Text>
          <Feather name='chevron-right' size={20} color={colors.orangeBase} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={bestSellerList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.carouselContent}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.image}
            style={styles.slideImage}
            imageStyle={styles.slideImageStyle}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <View style={styles.bottomSection}>
                <Text style={styles.nameText} numberOfLines={1}>{item.name}</Text>
                <View style={styles.priceBadge}>
                  <Text style={styles.priceText}>$ {item.price}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp(1),
    width: wp(100),
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    marginVertical: hp(1),
    alignSelf: 'center',
  },
  text: {
    color: colors.black100,
    fontSize: RS(16),
    fontWeight: '500',
  },
  arrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(1),
  },
  seeMore: {
    fontSize: RS(12),
    fontWeight: '500',
    color: colors.orangeBase,
  },
  carouselContent: {
    paddingHorizontal: scale(16),
    gap: scale(12),
  },

  slideImage: {
    borderRadius: 20,
    width: wp(35),
    height: hp(16)
  },
  slideImageStyle: {
    borderRadius: 20,
  },
  overlay: {
    flex: 1,
    padding: scale(10),
    justifyContent: 'flex-end',
  },
  bottomSection: {
    gap: scale(4),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  priceBadge: {
    backgroundColor: colors.orangeBase,
    paddingHorizontal: scale(10),
    paddingVertical: scale(2),
    borderRadius: scale(20),
    alignSelf: 'flex-start',
  },
  priceBadge: {
    backgroundColor: colors.orangeBase,
    paddingHorizontal: scale(8),
    paddingVertical: scale(2),
    borderRadius: scale(20),
    alignSelf: 'flex-start',
  },
  priceText: {
    color: colors.white100,
    fontSize: RF(10),
    fontWeight: 'bold',
  },
  nameRow: {
    alignSelf: 'flex-end',
  },
  nameText: {
    color: colors.white,
    fontSize: RF(13),
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },

});

export default BestSeller;
