import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const DropDownSelectBox = ({imageSource, placeholderText, isFullWidth, onPressEvent}) => {
    return (
        <TouchableOpacity style={ isFullWidth ? style.inputFullViewStyle :style.inputHalfViewStyle}
            onPress = {() =>{
                onPressEvent();
            }}
        >
            <View style={{ width: 18, justifyContent: "center"}}>
                <Image 
                    style={style.imageStyle} 
                    source={imageSource}
                />
            </View>
            <View style={{width: isFullWidth? 274: 98, justifyContent: "center"}}>
                <Text style={{width: isFullWidth? 274: 98, borderColor: "black", borderWidth: 0, left: isFullWidth? 15: 15, color: "#C5C5C7"}}>
                    {placeholderText}
                </Text>
            </View>
            <View style={{ width: 18, justifyContent: "center"}}>
                <Image 
                    style={style.userTypeimageStyle}
                    source={require('../assets/drop-down.png')}
                />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({

    inputFieldStyle: {
        height: 50,
        borderWidth: 1,
        borderColor: "red",
        left: 15,
        width: 98,
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