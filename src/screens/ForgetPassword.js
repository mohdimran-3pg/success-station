import React from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, I18nManager } from "react-native";
import InputView from "../../components/InputView";
import ButtonView from "../../components/ButtonView";
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import {translate} from "./../util/TranslationUtils";

export default class ForgetPassword extends React.Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: '',
        };
    };

    constructor(props) {
        super(props);
        I18nManager.forceRTL(true);
        console.log("I am here....");
    }
  
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
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
                            <Text style={styles.forgetPasswordTextStyle}>{translate('forgot_your_password')}</Text>
                        </View>
                        <View style={{height: 50}}>
                        <InputView 
                                                changeTextEvent = {(newValue) => {
                                                    console.log("Inputtting something .....", newValue);
                                                }} 
                                                imageSource={require('../../assets/SignUp/email-icon.png')}
                                                placeholderText={translate('email')}
                                                isSecureField={false}
                                    />
                        </View>
                        <View style={{height: 50}}>
                            <ButtonView clickEvent = { () => {
                                            this.props.navigation.navigate('otpScreen')
                                            console.log("Sign Up Clicked ......")
                                        } } name={translate('send')} />
                        </View>
                        <View style={styles.dontHaveAccountViewStyle}>
                            <TouchableOpacity onPress={() => {
                                console.log("Don;t have account clicked ....")
                                this.props.navigation.pop();
                            }}>
                                <View style={{flexDirection: "row"}}>
                                    <Text style={styles.dontHaveAccountTextStyle}>
                                    {translate('back_to')}
                                    </Text>
                                    <Text style={styles.dontHaveSignUpTextStyle}>
                                    {` `}{translate('sign_in_title')}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
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