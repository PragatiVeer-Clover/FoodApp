import React, { useCallback, useEffect } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import { PlatformPressable } from '@react-navigation/elements';


import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { wp, hp, RS, verticalScale, scale } from '../styles/scaling';
import { colors } from '../styles/colors';
import { IconKey } from '../assets/iconMap';
import IconByVariant from '../components/IconByVariant';


const { width } = Dimensions.get('window');

const CustomBottomTab: React.FC<BottomTabBarProps> = ({
    state,
    navigation,
}) => {

    const tabWidth = width / state.routes.length;
    const indicatorPosition = React.useRef(new Animated.Value(state.index * tabWidth),).current;

    const moveIndicator = useCallback((index: number) => {
        Animated.timing(indicatorPosition, {
            toValue: index * tabWidth,
            duration: 230,
            useNativeDriver: true,
        }).start();
    }, [indicatorPosition, tabWidth]);

    useEffect(() => {
        moveIndicator(state.index);
    }, [state.index, moveIndicator]);


    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.indicator,
                    {
                        width: tabWidth * 0.55,
                        transform: [{ translateX: indicatorPosition }],
                    },
                ]}
            />
            {state?.routes?.map?.((route, index) => {
                const isFocused = state.index === index;
                const iconColor = isFocused ? colors.black : colors.white100;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route?.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route?.name);
                    }
                };

                const getIconName = (name: string): IconKey => {
                    const map: Record<string, IconKey> = {
                        Home: 'home',
                        Menu: 'menu',
                        Favorites: 'favorites',
                        Orders: 'orders',
                        Help: 'help',

                    };
                    return map[name] || 'home';
                };

                return (
                    <PlatformPressable
                        key={route.key}
                        onPress={onPress}
                        style={styles.pressable}
                    >
                        <View style={styles.tabItem}>
                            <IconByVariant
                                name={getIconName(route.name)}
                                size={wp(6)}
                                color={iconColor}
                            />
                        </View>
                    </PlatformPressable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.orangeBase,
        paddingVertical: verticalScale(20),
        paddingBottom: verticalScale(20),
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),

    },
    indicator: {
        height: RS(3),
        borderBottomEndRadius: RS(10),
        borderBottomStartRadius: RS(10),
        backgroundColor: colors.black,
        position: 'absolute',
        top: 0,
        left: (width / 5 - (width / 5) * 0.55) / 2,
    },
    pressable: {
        flex: 1,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CustomBottomTab;
