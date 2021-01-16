import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DropDownSelectBox = ({imageSource, placeholderText, isFullWidth}) => {
    return (
        <View style={ isFullWidth ? style.inputFullViewStyle :style.inputHalfViewStyle}>
            <View style={{ width: 18, justifyContent: "center"}}>
                <Image 
                    style={style.imageStyle} 
                    source={imageSource}
                />
            </View>
            <View style={{width: 284}}>
                <Text style={style.inputFieldStyle}>
                    {placeholderText}
                </Text>
            </View>
            <View style={{ width: 18, justifyContent: "center"}}>
                <Image 
                    style={style.userTypeimageStyle}
                    source={require('../assets/drop-down.png')}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    inputFieldStyle: {
        height: 50,
        borderWidth: 0,
        borderColor: "green",
        left: 20,
        width: 254,
        textAlignVertical: "center"
    },
    imageStyle: {
        width: 18,
        height: 15,
        left: 12,
        borderWidth: 0,
        borderColor: "red",
        resizeMode: "contain",
    },
    userTypeimageStyle: {
        width: 10,
        height: 5,
        borderWidth: 0,
        resizeMode: "contain",
        textAlignVertical: "center"
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

export default DropDownSelectBox;