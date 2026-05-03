import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { colors } from '../../../styles/colors';

import IconByVariant from '../../../components/IconByVariant';
import { hp, RF, RS, scale, wp } from '../../../styles/scaling';
import Feather from '@react-native-vector-icons/feather';
import { RecommendMenuList } from '../../../utils/helper';
const RecommendMenu = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>Recommended</Text>
            </View>
            <FlatList
                data={RecommendMenuList}
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

                            <View style={styles.topSection}>
                                <TouchableOpacity style={styles.favButton}>
                                    <Feather name="heart" size={RF(14)} color={item.fav ? colors.orangeBase : colors.black} />
                                </TouchableOpacity>
                            </View>


                            <View style={styles.bottomSection}>
                                <View style={styles.ratingContainer}>
                                    <Feather name="star" size={RF(13)} color={colors.white100} />
                                    <Text style={styles.ratingText}>{item.rating}</Text>
                                </View>
                                <View style={styles.priceBadge}>
                                    <Text style={styles.priceText}>${item.price}</Text>
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
        width: '100%',
        alignSelf: 'center',
        marginBottom:wp(20)
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
        // paddingHorizontal: scale(16),
        gap: scale(12),
    },

    slideImage: {
        borderRadius: 20,
        width: wp(43),
        height: hp(16)
    },
    slideImageStyle: {
        borderRadius: 20,
    },

    overlay: {
        flex: 1,
        padding: scale(16),
        justifyContent: 'space-between',
    },
    // Top Section
    topSection: {
        alignItems: 'flex-start',
    },
    foodName: {
        fontSize: RF(16),
        fontWeight: '500',
        color: colors.black100,
        marginBottom: hp(1),
        width: wp(70),
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.orangeBase,
        paddingHorizontal: scale(8),
        paddingVertical: hp(0.5),
        borderRadius: 50,
        gap: wp(1),
    },
    ratingText: {
        fontSize: RF(12),
        fontWeight: 'bold',
        color: colors.white100,
        marginLeft: wp(0.5),
    },

    bottomSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'blue'
    },
    priceBadge: {
        backgroundColor: colors.white100,
        paddingHorizontal: scale(10),
        paddingVertical: hp(0.5),
        borderRadius: 50,
    },
    priceText: {
        fontSize: RF(12),
        fontWeight: 'bold',
        color: colors.black,
    },
    favButton: {
        backgroundColor: colors.white100,
        width: scale(30),
        height: scale(30),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default RecommendMenu;
