import React, { useState } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    ImageBackground,
    Text,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { scale, verticalScale, wp } from '../../../styles/scaling';
import { colors } from '../../../styles/colors';
import { img } from '../../../assets';

const { width: screenWidth } = Dimensions.get('window');
const data = [
    { id: 1, image: img.MenuCarousel },
    { id: 1, image: img.MenuCarousel },
    { id: 1, image: img.MenuCarousel },
    { id: 1, image: img.MenuCarousel },
];

function MenuCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isSingleItem = data.length <= 1;

    const renderItem = ({ item }: { item: (typeof data)[0] }) => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={item.image} style={styles.bannerImage}>
                <View style={styles.overlay}>
                    <Text style={styles.text}>Experience our delicious new dish</Text>
                    <Text style={styles.text2}>30% OFF</Text>
                </View>
            </ImageBackground>
        </View>
    );

    return (
        <>
            <Carousel
                loop={!isSingleItem}
                width={screenWidth}
                height={verticalScale(140)}
                autoPlay={!isSingleItem}
                autoPlayInterval={3000}
                data={data}
                renderItem={renderItem}
                onProgressChange={(_, absoluteProgress) => {
                    if (!isSingleItem) {
                        const index = Math.round(absoluteProgress) % data.length;
                        setCurrentIndex(index);
                    }
                }}
            />
            {!isSingleItem && (
                <View style={styles.dotsContainer}>
                    {data.map((_, index) => (
                        <View
                            key={`item-${index}`}
                            style={[
                                styles.dot,
                                index === currentIndex ? styles.activeDot : styles.inactiveDot,
                            ]}
                        />
                    ))}
                </View>
            )}
        </>
    );
}
const styles = StyleSheet.create({
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        marginHorizontal: wp(1),
    },
    activeDot: {
        backgroundColor: colors.orangeBase,
        width: scale(24),
        height: scale(4),
        borderRadius: scale(3),
    },
    inactiveDot: {
        backgroundColor: colors.yellow2,
        width: scale(25),
        height: scale(5),
        borderRadius: scale(3),
    },
    bannerImage: {
        width: wp(90),
        height: verticalScale(130),
        borderRadius: scale(20),
        overflow: 'hidden',
        alignSelf: 'center',
    },
    text: {
        fontSize: scale(14),
        fontWeight: '600',
        color: colors.white,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    text2: {
        fontSize: scale(24),
        fontWeight: '900',
        color: colors.yellowBase,
        marginTop: scale(4),
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: scale(20),
        width: wp(50),
    },
});

export default MenuCarousel;
