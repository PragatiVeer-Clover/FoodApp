import React, { useState, useCallback } from 'react';
import { View, Dimensions, StyleSheet, ImageBackground, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { scale, verticalScale, wp } from '../../../styles/scaling';
import { colors } from '../../../styles/colors';
import { img } from '../../../assets';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const CAROUSEL_DATA = [
    { id: '1', image: img.MenuCarousel },
    { id: '2', image: img.MenuCarousel },
    { id: '3', image: img.MenuCarousel },
    { id: '4', image: img.MenuCarousel },
];

// ── Sub-components ────────────────────────────────────────────────────────────

const CarouselItem = React.memo(({ item }: { item: (typeof CAROUSEL_DATA)[0] }) => (
    <ImageBackground source={item.image} style={styles.bannerImage}>
        <View style={styles.overlay}>
            <Text style={styles.text}>Experience our delicious new dish</Text>
            <Text style={styles.text2}>30% OFF</Text>
        </View>
    </ImageBackground>
));

const Dots = React.memo(
    ({ count, activeIndex }: { count: number; activeIndex: number }) => (
        <View style={styles.dotsContainer}>
            {Array.from({ length: count }).map((_, i) => (
                <View
                    key={i}
                    style={[styles.dot, i === activeIndex ? styles.activeDot : styles.inactiveDot]}
                />
            ))}
        </View>
    ),
);

// ── Main Component ────────────────────────────────────────────────────────────

function MenuCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isMultiple = CAROUSEL_DATA.length > 1;

    const handleProgressChange = useCallback(
        (_: number, absoluteProgress: number) => {
            setCurrentIndex(Math.round(absoluteProgress) % CAROUSEL_DATA.length);
        },
        [],
    );

    const renderItem = useCallback(
        ({ item }: { item: (typeof CAROUSEL_DATA)[0] }) => <CarouselItem item={item} />,
        [],
    );

    return (
        <>
            <Carousel
                loop={isMultiple}
                width={SCREEN_WIDTH}
                height={verticalScale(140)}
                autoPlay={isMultiple}
                autoPlayInterval={3000}
                data={CAROUSEL_DATA}
                renderItem={renderItem}
                onProgressChange={isMultiple ? handleProgressChange : undefined}
            />
            {isMultiple && <Dots count={CAROUSEL_DATA.length} activeIndex={currentIndex} />}
        </>
    );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
    bannerImage: {
        width: wp(88),
        height: verticalScale(130),
        borderRadius: scale(20),
        overflow: 'hidden',
       alignSelf:'flex-start'
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: scale(20),
        width: wp(50),
    },
    text: {
        fontSize: scale(14),
        fontWeight: '600',
        color: colors.white,
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    text2: {
        fontSize: scale(24),
        fontWeight: '900',
        color: colors.yellowBase,
        marginTop: scale(4),
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scale(5),
    },
    dot: {
        marginHorizontal: wp(1),
        borderRadius: scale(3),
    },
    activeDot: {
        backgroundColor: colors.orangeBase,
        width: scale(24),
        height: scale(4),
    },
    inactiveDot: {
        backgroundColor: colors.yellow2,
        width: scale(25),
        height: scale(5),
    },
});

export default MenuCarousel;