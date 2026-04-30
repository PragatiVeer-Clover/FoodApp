import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';
import { RS, scale, wp, RF, hp } from '../styles/scaling';


interface Props {
    title: string;
    onPress: () => void;
    backgroundColor: string;
}
const CustomButton = ({ title, onPress, backgroundColor }: Props) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: wp(50),
        borderRadius: RS(30),
        margin: scale(5),
    },
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    buttonText: {
        color: colors.white100,
        fontSize: RF(15),
        fontWeight: "600"

    }
});

export default CustomButton;