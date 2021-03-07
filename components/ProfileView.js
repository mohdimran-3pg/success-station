import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TextInput ,I18nManager, TouchableOpacity} from "react-native";
import {translate} from "../src/util/TranslationUtils";
const ProfileView = ({data, clickEvent}) => {

    return (
        <View style={{width: "100%", height: 70}}>
            <TouchableOpacity style={{}}
                onPress={() => {
                    clickEvent()
                }}
            >
            <View style={{marginLeft: 15, height: 40, flexDirection: "row", marginVertical: 30}}>
                <View style={{width: 40, height: 40, alignItems: "center"}}>
                    <Image style={{borderRadius: 20}}
                        source={require('../assets/book/profile-pic-lady.png')}
                        resizeMode="contain" 
                    />
                </View>
                <View style={{marginLeft: 15}}>
                    <Text style={{fontSize: 15, fontWeight: "500", fontStyle: "normal", color: "#000000"}}>{data.name}</Text>
                    <Text style={{fontSize: 11, fontWeight: "400", fontStyle: "normal", color: "#0A878A"}}>Owner</Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 125}}>
                    <Text style={{fontSize: 13, fontWeight: "500", fontStyle: "normal", color: "#F78A3A", marginRight: 5}}>{translate('see_profile')}</Text>
                    <Image style={{}}
                        source={require('../assets/right-arrow.png')}
                    />
                </View>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileView;