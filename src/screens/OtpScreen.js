import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity } from "react-native";
import ButtonView from "../../components/ButtonView";
import OTPInputView from 'react-native-otp-textinput';


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
                    <View style={{height: 50 ,marginBottom:18}}>
                        <OTPInputView 
                    
                    handleTextChange={(e) => {}}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={4}
                    tintColor={"#ffffff"}
                    offTintColor={"#ffffff"}
                    inputCellLength={1}
                        />
                    </View>
                    <View style={{height: 50}}>
                        <ButtonView
                            clickEvent={() => {
                                props.navigation.navigate('resetPassword') 
 
                            }} name="Send"
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

const styles = StyleSheet.create({
    textInputContainer: {
        marginBottom: 20,
        
      },
      roundedTextInput: {
        borderRadius: 10,
        borderWidth: 4,
        backgroundColor:"#ffffff"
      },
});

export default OtpScreen;