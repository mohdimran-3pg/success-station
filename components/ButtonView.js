import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const ButtonView = ({ clickEvent}) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity
                onPress = { () => clickEvent()}
            >
            <Text style={styles.buttonStyle}>
                Sign in
            </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    mainView: {

        width: 320,
        height: 50,
        borderRadius: 4,
        backgroundColor: "#F78A3A",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "stretch"
    },
    buttonStyle: {color: "#ffffff", fontSize: 17, fontWeight: "700", textAlign: "center"}
});

export default ButtonView;