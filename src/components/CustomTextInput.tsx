import React, { forwardRef } from 'react';
import {
    TextInput,
    StyleSheet,
    TextInputProps,
    KeyboardTypeOptions,
    ReturnKeyTypeOptions,
    Platform,
    View,
    Text,
} from 'react-native';
import { colors } from '../styles/colors';
import { RF, scale } from '../styles/scaling';



interface Props extends TextInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
    returnKeyType?: ReturnKeyTypeOptions;
    title?: string;
}

const CustomTextInput = forwardRef<TextInput, Props>((
    {
        placeholder,
        value,
        onChangeText,
        keyboardType = 'default',
        returnKeyType = 'done',
        style,
        title,
        ...rest
    },
    ref
) => {
    return (
        <View style={{ marginVertical: scale(5) }}>
            <Text style={styles.textStyle}>{title}</Text>
            <TextInput
                ref={ref}
                style={[styles.input, style]}
                placeholder={placeholder}
                placeholderTextColor={colors.gray700}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCorrect={false}
                autoComplete={Platform.OS === 'android' ? 'off' : 'one-time-code'}
                textContentType="none"
                importantForAutofill="no"
                {...rest}
            />
        </View>
    );
}
);

const styles = StyleSheet.create({
    input: {
        fontSize: RF(14),
        color: colors.white100,
        backgroundColor: colors.yellow2,
        borderRadius: scale(10),
        paddingHorizontal: scale(16),
        paddingVertical: scale(12),
        borderColor: colors.gray700,
    },
    textStyle: {
        color: colors.black,
        fontSize: RF(14),
        marginVertical: scale(8),
        fontWeight: '600'



    }
});

CustomTextInput.displayName = 'CustomTextInput';

export default CustomTextInput;