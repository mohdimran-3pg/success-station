import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback, SafeAreaView, I18nManager } from "react-native";
import InputView from "../../components/InputView";
import ButtonView from "../../components/ButtonView";
import {translate} from "./../util/TranslationUtils";
import ApiService from '../network/ApiService';
import Helper from '../util/Helper';
import Loader from './Loader';

export default class LoginScreen extends React.Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: translate('sign_in')
        };
    };

    constructor(props) {
        super(props)
        this.state = {isLoading: false, email: '', password: ''}
    }

    componentDidMount() {
    }
    
    componentWillUnmount() {
    }

    startLogin = () => {

        if (this.state.email == '') {
            alert('Please enter email')
            return;
        } 
          
        if (Helper.isEmailValid(this.state.email)) {
            alert('Enter valid Email')
            return;
        } 

        if (this.state.password == '') {
            alert('Please enter password')
            return;
        }

        this.setState({isLoading: true});
        ApiService.post('login', {
            "email": this.state.email.trim(), "password": this.state.password
        })
        .then((response) => {
            this.setState({isLoading: false});
            this.props.navigation.navigate('dashBoard');
        })
        .catch ((error)=> {
            this.setState({isLoading : false})
            alert(error.data.message)
        })
    }

    render() {
        return <TouchableWithoutFeedback 
        onPress={() => {
            Keyboard.dismiss();
        }}>
            <SafeAreaView style={{flex: 1}}>    
                <View style={{flex: 1, justifyContent: "center"}}>
                    <View style={style.mainViewStyle}> 
                        <View style={{height: 122, alignSelf: "center"}}>
                            <Image style={style.logoImageStyle}
                                source={require('../../assets/logo.png')}
                            />
                        </View>
                        <View style={{height: 50}}>
                            <Text style={style.welcomeTextViewStyle}>{translate('welcome_back')}</Text>
                        </View>
                        <View style={{height: 50}}>
                            <Text style={style.signInTextViewStyle}>{translate('sign_continue')}</Text>
                        </View>
                        <View style={{height: 50}}>
                            <InputView 
                                        changeTextEvent = {(newValue) => {
                                            console.log("Inputtting something .....", newValue);
                                            this.setState({email: newValue})
                                        }} 
                                        imageSource={require('../../assets/SignUp/user-icon.png')}
                                        placeholderText={translate('user_name_placeholder')}
                                        isSecureField={false}
                                        isFullWidth={true}
                            />
                        </View>
                        <View style={{height: 50}}>
                        <InputView 
                                                changeTextEvent = {(newValue) => {
                                                 this.setState({password: newValue})
                                                }} 
                                                imageSource={require('../../assets/SignUp/password-icon.png')}
                                                placeholderText={translate('password_placeholder')}
                                                isSecureField={true}
                                                isFullWidth={true}
                                    />
                        </View>
                        <View style={{height: 30, width: 320, alignSelf: "center", alignItems: "stretch", flexDirection: "row"}}>
                            <View style={{width: 160, height: 25}}>
                            <TouchableOpacity onPress={() => {
                                console.log("Remember me clicked .......")
                            }}>
                                <View style={{alignSelf: "flex-start"}}>
                                    <View style={{borderWidth: 1, borderColor: "#0A878A", borderRadius: 4, width: 15, height: 15, justifyContent: "center", top: 7.5}}></View>
                                    <Text style={{fontWeight: "400", fontSize: 13, lineHeight: 18, left: 20, bottom: 10}}>{translate('remember_me')}</Text>
                                </View>
                            </TouchableOpacity>    
                            </View>
                            <View style={{width: 160, height: 25, alignItems: "flex-end"}}>
                                <View style={{alignContent: "flex-end", width: 110, height: 25}}>
                                <TouchableOpacity onPress={() => {
                                    this.props.navigation.navigate('forgetPassword')
                                }}>
                                    <Text style={{fontWeight: "400", fontSize: 12, lineHeight: 18, color: "#7165E3", textAlignVertical: "center"}}>{translate('forgot_password')}</Text>
                                </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                        <View style={{height: 50, width: 320, alignSelf: "center"}}> 
                            <ButtonView clickEvent = { () => {
                                this.startLogin()
                              //this.props.navigation.navigate('dashBoard')
                                
                            } } name={translate('sign_in_title')} />
                        </View>
                        <View style={style.dontHaveAccountViewStyle}>
                            <TouchableOpacity onPress={() => {
                                console.log("Don;t have account clicked ....")
                                this.props.navigation.navigate('userSignUpForm')
                            }}>
                                <View style={{flexDirection: "row"}}>
                                    <Text style={style.dontHaveAccountTextStyle}>
                                    {translate('Dont_have_account')}
                                    </Text>
                                    <Text style={style.dontHaveSignUpTextStyle}>
                                    {translate('sign_up_text')}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {this.state.isLoading ?   <Loader
                loading={this.state.loading} /> :null}
            </SafeAreaView>
    </TouchableWithoutFeedback>
    }
};

const style = StyleSheet.create({

    mainViewStyle: {
        alignItems: "stretch",
        backgroundColor: "#F2F2F2",
        justifyContent: "space-between",
        height: 480,
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
    },
    dontHaveAccountViewStyle: { 
        width: 280, 
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

});