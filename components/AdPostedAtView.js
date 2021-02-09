import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TextInput ,I18nManager} from "react-native";
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {translate} from "../src/util/TranslationUtils";
import BorderButton from './BorderButton';
const AdPostedAtView = () => {

    return (
        <View style={{width: "100%", height: 270}}>
            <View style={{width: "90%", alignSelf: "center"}}>
                <Text style={{fontSize: 20, fontWeight: "700", fontStyle: "normal", marginTop: 10}}>Ad Posted at</Text>
                <Image
                            source={require('../assets/map-image.png')}
                            style={{width: "100%", alignSelf: "center", marginTop: 10, height: 100}}
                />
            </View>
            <View style={{width: "90%", alignSelf: "center"}}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{textAlign: I18nManager.isRTL ? 'right' : 'left', borderColor: "#0A878A", borderRadius:4, height: 83, backgroundColor: 'rgba(196, 196, 196, 0.26)', width: "100%", marginTop: 10}}
                    placeholder={`  `+translate('write_comment_here')}
                    multiline={true}
                    onFocus = {(newValue) => {
                    }}
                />
            </View>
            <View style={{width: "90%", alignSelf: "center"}}>
                <View style={{width: "40%", marginTop: 10, alignSelf: "flex-end"}}>
                    <BorderButton
                        name={translate("add_a_comment")}
                        clickEvent={() => {
                            
                        }}
                    />  
                </View>
            </View>      
            
        </View>
        )
}

const styles = StyleSheet.create({

});

export default AdPostedAtView;