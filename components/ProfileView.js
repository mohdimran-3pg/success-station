import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TextInput ,I18nManager, TouchableOpacity} from "react-native";
import {translate} from "../src/util/TranslationUtils";
const ProfileView = ({data, clickEvent}) => {
    let image = data.user_name != null ? data.user_name.image: {}
    return (
        <View style={{width: "100%", height: 70}}>
            <TouchableOpacity style={{}}
                onPress={() => {
                    clickEvent(data.user_name.id)
                }}
            >
            <View style={{marginLeft: 15, height: 40, flexDirection: "row", marginVertical: 30}}>
                <View style={{width: 40, height: 40, alignItems: "center"}}>
                    {image != null && image.thumbnail != null?(
                    <Image style={{borderRadius: 20,width: 40, height: 40}}
                    source={{ uri: image.thumbnail}} 
                        resizeMode="contain" 
                    />
                    ): <Image style={{borderRadius: 20,width: 40, height: 40}}
                    source={{ uri: 'https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg'}}
                    resizeMode="contain" 
                />}
                </View>
                <View style={{marginLeft: 15}}>
                    <Text style={{fontSize: 15, fontWeight: "500", fontStyle: "normal", color: "#000000", fontFamily: "DMSans-Regular"}}>{data.contact_name}</Text>
                    <Text style={{fontSize: 11, fontWeight: "400", fontStyle: "normal", color: "#0A878A", fontFamily: "DMSans-Regular"}}>Owner</Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 125}}>
                    <Text style={{fontSize: 13, fontWeight: "500", fontStyle: "normal", color: "#F78A3A", marginRight: 5, fontFamily: "DMSans-Regular"}}>{translate('see_profile')}</Text>
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