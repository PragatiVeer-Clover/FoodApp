import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { colors } from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@react-native-vector-icons/feather';
import { hp, RF, scale } from '../../styles/scaling';
import CustomSearch from '../../components/CustomeSearch';

import MenuList from './components/MenuList';
import MenuCarousel from './components/MenuCarousel';
import BestSeller from './components/BestSeller';
import RecommendMenu from './components/RecommendMenu';

const Home = () => {
    const [search, setSearch] = React.useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerWrapper}>
                <View style={styles.headerView}>
                    <CustomSearch value={search} onChangeText={setSearch} placeholder="Search" />
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
                <MenuList />
                <View style={{ height: 1, backgroundColor: colors.orange2, marginVertical: scale(16) }} />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: scale(100) }}
                >
                    <MenuCarousel />
                    <BestSeller />
                    <RecommendMenu />
                </ScrollView>
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
    mainView: {
        backgroundColor: colors.white,
        borderTopLeftRadius: scale(30),
        borderTopRightRadius: scale(30),
        paddingHorizontal: scale(20),
        paddingVertical: scale(24),
        flex: 1,
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
    },


});

export default Home;