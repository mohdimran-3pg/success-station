import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TextInput ,I18nManager} from "react-native";

const InputView = ({ changeTextEvent , imageSource, placeholderText, isSecureField, isFullWidth}) => {

    return (
        <View style={isFullWidth ? style.inputFullViewStyle : style.inputHalfViewStyle}>
            <View style={{ width: 18, justifyContent: "center"}}>
                <Image 
                    style={style.imageStyle} 
                    source={imageSource}
                />
            </View>
            <View style={{width: isFullWidth ? 280: 108, justifyContent: "center"}}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={isFullWidth ? style.inputFullFieldStyle : style.inputHalfFieldStyle,{textAlign: I18nManager.isRTL ? 'right' : 'left'}}
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

    inputFullFieldStyle: {
        height: 45,
        alignSelf: "center",
        width: 270,
    },
    inputHalfFieldStyle: {
        height: 45,
        alignSelf: "center",
        width: 85,
    },
    imageStyle: {
        width: 18,
        height: 15,
        left: 12,
        borderWidth: 0,
        borderColor: "red",
        resizeMode: "contain",
    },
    inputFullViewStyle: {
        borderWidth: 1,
        borderColor: "#0A878A",
        height: 50,
        width: 320,
        borderRadius: 4,
        alignItems: "stretch",
        alignSelf: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    inputHalfViewStyle: {
        borderWidth: 1,
        borderColor: "#0A878A",
        height: 50,
        width: 150,
        borderRadius: 4,
        alignItems: "stretch",
        alignSelf: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    }
});

export default InputView;