import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

const InputView = ({ changeTextEvent , imageSource, placeholderText, isSecureField}) => {

    return (
        <View style={style.inputViewStyle}>
            <View style={{ width: 18, justifyContent: "center"}}>
                <Image 
                    style={style.imageStyle} 
                    source={imageSource}
                />
            </View>
            <View style={{width: 280, justifyContent: "center"}}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={style.inputFieldStyle}
                    onChangeText = {(newValue) => 
                        changeTextEvent(newValue)
                    }
                    placeholder={placeholderText}
                    secureTextEntry={isSecureField}
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({

    inputFieldStyle: {
        height: 45,
        alignSelf: "center",
        width: 270,
    },
    imageStyle: {
        width: 18,
        height: 15,
        left: 12,
        borderWidth: 0,
        borderColor: "red",
        resizeMode: "contain",
    },
    inputViewStyle: {
        borderWidth: 1,
        borderColor: "#0A878A",
        height: 50,
        width: 320,
        borderRadius: 4,
        alignItems: "stretch",
        alignSelf: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    }
});

export default InputView;