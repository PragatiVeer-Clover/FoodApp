import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { img } from '../../assets';
import { colors } from '../../styles/colors';
import Feather from '@react-native-vector-icons/feather';
import { openDrawer } from '../../utils/NavigationUtils';
import { scale, RF } from '../../styles/scaling';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ width: 24 }} />
                <Text style={styles.title}>My Profile</Text>
                <TouchableOpacity onPress={() => openDrawer()}>
                    <Feather name="menu" size={24} color={colors.black} />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <Image source={img.logo} style={styles.logo} />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scale(16),
        paddingVertical: scale(12),
    },
    title: {
        fontSize: RF(18),
        fontWeight: 'bold',
        color: colors.black,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
});

export default Profile;