import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import InputView from "../../components/InputView";
import ButtonView from "../../components/ButtonView";
import * as RNLocalize from 'react-native-localize';
import {translate} from "./../util/TranslationUtils";

export default class ResetPassword extends React.Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: '',
        };
    };

    constructor(props) {
        super(props);
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
                            <Image style={{width: 105, height: 105, alignSelf: "center"}} source={require('../../assets/forgot.png')} />
                        </View>
                        <View style={{height: 29, alignContent: "center"}}>
                            <Text style={styles.forgetPasswordTextStyle}>{translate('enter_new_password')}</Text>
                        </View>
                        <View style={{height: 50}}>
                        <InputView 
                                                changeTextEvent = {(newValue) => {
                                                 
                                                }} 
                                                imageSource={require('../../assets/SignUp/password-icon.png')}
                                                placeholderText={translate('password_placeholder')}
                                                isSecureField={false}
                                    />
                        </View>
                        <View style={{height: 50}}>
                        <InputView 
                                                changeTextEvent = {(newValue) => {
                                                    
                                                }} 
                                                imageSource={require('../../assets/SignUp/password-icon.png')}
                                                placeholderText={translate('confirm_password')}
                                                isSecureField={false}
                                    />
                        </View>
                        <View style={{height: 50}}>
                            <ButtonView clickEvent = { () => {
                                             this.props.navigation.navigate('recoveredPassword') 
                                        } } name={translate('submit')} />
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
 
})