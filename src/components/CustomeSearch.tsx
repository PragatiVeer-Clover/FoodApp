import React, { forwardRef } from 'react';
import {
    TextInput,
    StyleSheet,
    TextInputProps,
    View,
    Platform,
} from 'react-native';
import Feather from '@react-native-vector-icons/feather';
import { colors } from '../styles/colors';
import { RF, scale } from '../styles/scaling';

interface Props extends TextInputProps {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
}

const CustomSearch = forwardRef<TextInput, Props>((
    {
        placeholder = "Search...",
        value,
        onChangeText,
        style,
        ...rest
    },
    ref
) => {
    return (
        <View style={styles.container}>
            <Feather name="search" size={20} color={colors.orangeBase} style={styles.icon} />
            <TextInput
                ref={ref}
                style={[styles.input, style]}
                placeholder={placeholder}
                placeholderTextColor={colors.gray700}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                autoComplete={Platform.OS === 'android' ? 'off' : 'one-time-code'}
                {...rest}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.yellow2,
        borderRadius: scale(15),
        paddingHorizontal: scale(12),
        marginVertical: scale(10),
        width: '60%',

    },
    icon: {
        marginRight: scale(4),
    },
    input: {
        flex: 1,
        fontSize: RF(14),
        color: colors.black,
        height: '100%',
    },
});

CustomSearch.displayName = 'CustomSearch';

export default CustomSearch;
