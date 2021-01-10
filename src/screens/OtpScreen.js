import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity } from "react-native";
import ButtonView from "../../components/ButtonView";
import OTPInputView from '@twotalltotems/react-native-otp-input';


const OtpScreen = (props) => {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#F2F2F2", justifyContent: "center"}}>
            <TouchableWithoutFeedback
                onPress = {() => {
                    Keyboard.dismiss()
                }} 
            >
                <View style={{width: 320, height: 330, flexDirection: "column", justifyContent: "space-between", alignSelf: "center"}}>
                    <View style={{height: 118, width: 320, alignContent:"center"}}>
                        <Image
                            source={require('../../assets/enter-otp-logo.png')}
                            style={{width: 98, height: 118, resizeMode: "contain", alignSelf: "center"}}
                        />
                    </View>
                    <View style={{height: 29}}>
                        <Text style={{alignSelf: "center", fontSize: 22, fontStyle: "normal", fontWeight: "400", color: "black"}}>Enter OTP</Text>
                    </View>
                    <View style={{height: 16}}>
                        <Text style={{alignSelf: "center", fontSize: 12, fontStyle: "normal", fontWeight: "400", color: "#4A4A4A"}}>An OTP has been sent to your email </Text>
                    </View>    
                    <View style={{height: 50}}>
                        <OTPInputView 
                            pinCount={4}
                            codeInputFieldStyle={{color: "black", backgroundColor: "white", width: 70, borderRadius: 4, fontWeight: "500", fontSize: 20}}
                            onCodeFilled = {(code) => {
                               console.log(" onCodeFilled ", code);     
                            }}
                            //code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                            onCodeChanged = {code => { }}
                            autoFocusOnLoad
    
                        />
                    </View>
                    <View style={{height: 50}}>
                        <ButtonView
                            clickEvent={() => {
                                props.navigation.navigate('recoveredPassword') 
 
                            }} 
                        />    
                    </View>
                    <View style={{height: 25}}>
                        <TouchableOpacity>
                            <Text style={{alignSelf: "center", fontSize: 15, fontStyle: "normal", fontWeight: "700", color: "#F78A3A"}}>Resend</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const Style = StyleSheet.create({

});

export default OtpScreen;