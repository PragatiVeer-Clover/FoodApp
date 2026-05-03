import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import { colors } from '../../styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@react-native-vector-icons/feather';
import { RF, scale } from '../../styles/scaling';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { img } from '../../assets';
import { navigate } from '../../utils/NavigationUtils';
import { Paths } from '../../navigation/paths';
import CustomSearch from '../../components/CustomeSearch';
import MenuList from '../Home/components/MenuList';

const Search = () => {
    const [search, setSearch] = React.useState('');
    return (
        <SafeAreaView style={styles.container}>
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
            <View style={styles.mainView}>
                <MenuList />

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
        marginTop: scale(6),
        alignContent: 'center',
        paddingHorizontal: scale(16),
        paddingVertical: scale(16),
        height: '100%',
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



});

export default Search;