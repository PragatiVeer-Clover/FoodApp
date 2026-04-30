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


const SetPassword = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => navigate(Paths.Welcome)}>
                    <Feather name='chevron-left' size={30} color={colors.orangeBase} />
                </TouchableOpacity>
                <Text style={styles.text}>Set Password</Text>
            </View>
            <View style={styles.mainView}>
                <CustomTextInput title='Password' placeholder="Enter Password" value="" onChangeText={() => { }} />
                <CustomTextInput title='Confirm Password' placeholder="Confirm Password" value="" secureTextEntry onChangeText={() => { }} />
                <View style={{ marginTop: scale(50), alignItems: 'center' }}>
                    <CustomButton title='Create New Password' backgroundColor={colors.orangeBase} onPress={() => { }} />
                </View>
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
        marginTop: scale(16),
        alignContent: 'center',
        paddingHorizontal: scale(30),
        paddingVertical: scale(24),
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
    }
});

export default SetPassword;