import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import InputView from "../../components/InputView";
import ButtonView from "../../components/ButtonView";


const ForgetPassword = (props) => {

    return (
        <TouchableWithoutFeedback onPress={ () => {
            Keyboard.dismiss()
        }}>
            <View style={styles.containerView}>
                <View style={{height: 350, width: 320, alignSelf: "center", flexDirection: "column", justifyContent: "space-between"}}>
                    <View style={{height: 105}}>
                        <Image style={{width: 105, height: 105, alignSelf: "center"}} source={require('../../assets/forget-pwd-new-icon.png')} />
                    </View>
                    <View style={{height: 29, alignContent: "center"}}>
                        <Text style={styles.forgetPasswordTextStyle}>Forgot your password?</Text>
                    </View>
                    <View style={{height: 50}}>
                    <InputView 
                                            changeTextEvent = {(newValue) => {
                                                console.log("Inputtting something .....", newValue);
                                            }} 
                                            imageSource={require('../../assets/SignUp/email-icon.png')}
                                            placeholderText="Email"
                                            isSecureField={false}
                                />
                    </View>
                    <View style={{height: 50}}>
                        <ButtonView clickEvent = { () => {
                                        console.log("Sign Up Clicked ......")
                                    } } />
                    </View>
                    <View style={styles.dontHaveAccountViewStyle}>
                        <TouchableOpacity onPress={() => {
                            console.log("Don;t have account clicked ....")
                            props.navigation.pop();
                        }}>
                            <View style={{flexDirection: "row"}}>
                                <Text style={styles.dontHaveAccountTextStyle}>
                                Back to
                                </Text>
                                <Text style={styles.dontHaveSignUpTextStyle}>
                                {` `}Sign In
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    containerView: {
        backgroundColor: "#F2F2F2",
        flex: 1,
        justifyContent: "center",
    },
    forgetPasswordTextStyle: { 
        textAlignVertical: "center", 
        fontSize: 22, 
        fontWeight: "400", 
        fontStyle: "normal", 
        color: "#0B0B0B",
        alignSelf: "center",
    },
    dontHaveAccountViewStyle: { 
        alignSelf: "center", 
        height: 25, 
        borderColor: "red", 
        borderWidth: 0, 
        alignItems: "center",
    },
    dontHaveAccountTextStyle: { 
        textAlignVertical: "center", 
        fontSize: 15, 
        fontWeight: "400", 
        fontStyle: "normal", 
        color: "#2C2948",
    },
    dontHaveSignUpTextStyle: { 
        textAlignVertical: "center", 
        fontSize: 15, 
        fontWeight: "700", 
        fontStyle: "normal", 
        color: "#F78A3A"
    }
})

export default ForgetPassword;