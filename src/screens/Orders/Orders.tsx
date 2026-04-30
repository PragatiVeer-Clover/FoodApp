import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { img } from '../../assets';
import { colors } from '../../styles/colors';

const Orders = () => {
    return (
        <View style={styles.container}>
            <Image source={img.logo} style={styles.logo} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.yellowBase,
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

export default Orders;