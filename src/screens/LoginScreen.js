import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import InputView from "../../components/InputView";

const LoginScreen = () => {

    return (
        <View style={style.mainViewStyle}>
            <View style={{height: 122, top: 100, alignSelf: "center"}}>
                <Image style={style.logoImageStyle}
                    source={require('../../assets/logo.png')}
                />
            </View>
            <View style={{height: 50, top: 110}}>
                <Text style={style.welcomeTextViewStyle}>Welcome Back!</Text>
            </View>
            <View style={{height: 50, top: 120}}>
                <Text style={style.signInTextViewStyle}>Sign in to continue</Text>
            </View>
            <View style={{height: 50, top: 130}}>
                <InputView />
            </View>
            <View style={{height: 50, top: 140}}>
                <InputView />
            </View>
            <View style={{height: 30, top: 150, width: 320, alignSelf: "center", alignItems: ""}}>
                <View style={{width: 150, alignSelf: "flex-start"}}>
                    <View style={{borderWidth: 1, borderColor: "#0A878A", borderRadius: 4, width: 15, height: 15, justifyContent: "center", top: 7.5}}></View>
                    <Text style={{fontWeight: "400", fontSize: 13, lineHeight: 18, left: 20, bottom: 10}}>Remember me</Text>
                </View>

                <View style={{width: 150, alignSelf: "flex-end"}}>
                    <View style={{borderWidth: 1, borderColor: "#0A878A", borderRadius: 4, width: 15, height: 15, justifyContent: "center", top: 7.5}}></View>
                    <Text style={{fontWeight: "400", fontSize: 13, lineHeight: 18, left: 20, bottom: 10}}>Remember me</Text>
                </View>
                
            </View>
        </View>
    )
};

const style = StyleSheet.create({

    mainViewStyle: {
        alignItems: "stretch",
        backgroundColor: "#F2F2F2",
    },
    logoImageStyle: {
        width: 220,
        height: 122,
        alignItems: "center",
        resizeMode: "contain",
    },
    welcomeTextViewStyle: {
        fontSize: 30,
        fontWeight: "700",
        fontStyle: "normal",
        lineHeight: 40,
        alignSelf: "center",
        color: "#000",
    },
    signInTextViewStyle: {
        fontSize: 15,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 40,
        alignSelf: "center",
        color: "#1C1939",
    },
    emailViewStyle: {
        borderWidth: 1,
        borderColor: "#000000",
        height: 50,
        width: 320,
        borderRadius: 4,
        alignSelf: "center",
    }

});

export default LoginScreen;