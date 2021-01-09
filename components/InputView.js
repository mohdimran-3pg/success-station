import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

const InputView = () => {

    return (
        <View style={style.inputViewStyle}>
            <View style={{ width: 15, justifyContent: "center"}}>
                <Image style={style.imageStyle} />
            </View>
            <View style={{width: 280, justifyContent: "center"}}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={style.inputFieldStyle}
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
        width: 13,
        height: 13,
        left: 12,
        borderWidth: 1,
        borderColor: "red",
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