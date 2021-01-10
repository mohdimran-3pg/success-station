import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import InputView from "../../components/InputView";
import ButtonView from "../../components/ButtonView";


const ResetPassword = (props) => {

    return (
        <TouchableWithoutFeedback onPress={ () => {
            Keyboard.dismiss()
        }}>
            <View style={styles.containerView}>
                <View style={{height: 350, width: 320, alignSelf: "center", flexDirection: "column", justifyContent: "space-between"}}>
                    <View style={{height: 105}}>
                        <Image style={{width: 105, height: 105, alignSelf: "center"}} source={require('../../assets/forgot.png')} />
                    </View>
                    <View style={{height: 29, alignContent: "center"}}>
                        <Text style={styles.forgetPasswordTextStyle}>Enter New password?</Text>
                    </View>
                    <View style={{height: 50}}>
                    <InputView 
                                            changeTextEvent = {(newValue) => {
                                             
                                            }} 
                                            imageSource={require('../../assets/SignUp/password-icon.png')}
                                            placeholderText="Password"
                                            isSecureField={false}
                                />
                    </View>
                    <View style={{height: 50}}>
                    <InputView 
                                            changeTextEvent = {(newValue) => {
                                                
                                            }} 
                                            imageSource={require('../../assets/SignUp/password-icon.png')}
                                            placeholderText="Comfirm Password"
                                            isSecureField={false}
                                />
                    </View>
                    <View style={{height: 50}}>
                        <ButtonView clickEvent = { () => {
                                         props.navigation.navigate('recoveredPassword') 
                                    } } name="Submit" />
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
 
})

export default ResetPassword;