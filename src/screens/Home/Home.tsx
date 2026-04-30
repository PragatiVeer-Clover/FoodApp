import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@react-native-vector-icons/feather';
import { hp, RF, scale } from '../../styles/scaling';
import CustomSearch from '../../components/CustomeSearch';
import IconByVariant from '../../components/IconByVariant';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerWrapper}>
                <View style={styles.headerView}>
                    <CustomSearch value={''} onChangeText={() => { }} placeholder="Search" />
                    <View style={styles.cartIcon}>
                        <Feather name='shopping-cart' size={20} color={colors.orangeBase} />
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                    </View>
                    <View style={styles.notificationIcon}>
                        <Feather name='bell' size={20} color={colors.orangeBase} />
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                    </View>
                    <View style={styles.filterIcon}>
                        <Feather name='user' size={20} color={colors.orangeBase} />
                    </View>
                </View>
                <View style={styles.greetingView}>
                    <Text style={styles.greeting}>Good Morning</Text>
                    <Text style={styles.locationText}>Rise and shine! It's breakfast time</Text>
                </View>
            </View>
            <View style={styles.mainView}>
                <IconByVariant name="snack" size={hp(5)} />
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
    headerWrapper: {
        paddingHorizontal: scale(16),
        paddingVertical: scale(20),
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: RF(24),
        fontWeight: 'bold',
        color: colors.white100,
        textAlign: 'center',
        flex: 1,
    },
    mainView: {
        // flex: 1,
        backgroundColor: colors.white100,
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        paddingHorizontal: scale(20),
        paddingVertical: scale(24),
        height: hp(100)
    },
    title: {
        fontSize: RF(20),
        fontWeight: 'bold',
        color: colors.black,
        marginBottom: scale(20)

    },
    forgotPassword: {
        fontSize: RF(12),
        fontWeight: '600',
        color: colors.orangeBase,
        textAlign: 'right',
        marginTop: scale(16),
    },
    signupText: {
        fontSize: RF(14),
        color: colors.black,
        textAlign: 'center',
        marginTop: scale(16),
    },
    signup: {
        fontSize: RF(14),
        fontWeight: '600',
        color: colors.orangeBase,
        textAlign: 'center',
        marginTop: scale(16),
    },
    fingerPrint: {
        width: scale(40),
        height: scale(40),
        resizeMode: 'contain',
        marginHorizontal: scale(8),

    },
    orText: {
        fontSize: RF(12),
        color: colors.black,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: scale(12)
    },
    cartIcon: {
        width: scale(35),
        height: scale(35),
        borderRadius: scale(10),
        backgroundColor: colors.yellow2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(8),
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: colors.black,
        borderRadius: scale(10),
        width: scale(15),
        height: scale(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: colors.white100,
        fontSize: RF(10),
        fontWeight: '600',
    },
    notificationIcon: {
        width: scale(35),
        height: scale(35),
        borderRadius: scale(10),
        backgroundColor: colors.yellow2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(16),
    },
    filterIcon: {
        width: scale(35),
        height: scale(35),
        borderRadius: scale(10),
        backgroundColor: colors.yellow2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(12),
    },
    greeting: {
        fontSize: RF(24),
        fontWeight: 'bold',
        color: colors.white100,

    },
    greetingView: {
        marginTop: scale(8)
    },
    locationText: {
        fontSize: RF(14),
        color: colors.orangeBase,
        marginTop: scale(2),
    }

});

export default Home;