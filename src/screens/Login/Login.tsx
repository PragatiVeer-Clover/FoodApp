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

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => navigate(Paths.Welcome)}>
                    <Feather name='chevron-left' size={30} color={colors.orangeBase} />
                </TouchableOpacity>
                <Text style={styles.text}>Login</Text>
            </View>
            <View style={styles.mainView}>
                <Text style={styles.title}>Welcome</Text>
                <CustomTextInput title='Email or Mobile Number' placeholder="Email and Phone" value="" onChangeText={() => { }} />
                <CustomTextInput title='Password' placeholder="Enter Password" value="" secureTextEntry onChangeText={() => { }} />
                <Text style={styles.forgotPassword} onPress={() => navigate(Paths.SetPassword)}>Forget Password?</Text>
                <View style={{ marginTop: scale(50), alignItems: 'center' }}>
                    <CustomButton title='Login' backgroundColor={colors.orangeBase} onPress={() => navigate(Paths.Home)} />
                </View>

                <View style={{ marginTop: scale(20), alignItems: 'center' }}>
                    <Text style={styles.orText}>or sign up with</Text>
                    <View style={styles.row}>
                        <Image source={img.google} style={styles.fingerPrint} />
                        <Image source={img.fingerPrint} style={styles.fingerPrint} />
                    </View>
                    <TouchableOpacity onPress={() => navigate(Paths.Signup)}>
                        <Text style={styles.signupText}>Don't have an account? <Text style={styles.signup}>Sign Up</Text></Text>
                    </TouchableOpacity>
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

export default Login;