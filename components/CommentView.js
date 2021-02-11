import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TextInput ,I18nManager, TouchableOpacity} from "react-native";
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {translate} from "../src/util/TranslationUtils";
import BorderButton from './BorderButton';

const CommentView = ({clickEvent}) => {
    return (
        <View style={{width: "100%", backgroundColor: "white"}}>
            <View style={{width: "90%", alignSelf: "center", flexDirection: "row"}}>
                <View style={{marginTop: 10}}>
                    <Image style={{width: 40, height: 40, borderRadius: 20}}
                        resizeMode="contain"
                        source={require('../assets/book/profile-pic-lady.png')}
                    />
                </View>
                <View style={{marginLeft: 10, marginTop: 10, marginBottom: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontSize:15, fontWeight: "500", fontStyle: "normal", color: "#000000"}}>Jorge Watson</Text>
                        <Image style={{width: 8, height: 7}}
                            resizeMode="contain"
                            source={require('../assets/book/flag-button.png')}
                        />
                    </View>
                    <Text style={{fontSize:12, fontWeight: "normal", fontStyle: "normal", color: "rgba(60, 60, 67, 0.6)"}}>2 hours ago</Text>
                    <Text style={{fontSize:12, fontWeight: "500", fontStyle: "normal", color: "#5D648A", marginRight: 20}}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out</Text>
                    <TouchableOpacity
                        onPress = { () => clickEvent()}
                    >
                    <Text style={{fontSize: 13, fontWeight: "normal", fontStyle: "normal", color: "#007AFF", marginTop: 12}}>
                        {translate('reply')}
                    </Text>
                    <View style={{backgroundColor:"rgba(158, 166, 190, 0.26)", height: 1, marginTop: 15}}></View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CommentView;