import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const DisplayBookInformation = ({heading, headingValue}) => {
    return (
        <View style={styles.mainView}>
            <View style={{width: 8, height: 8, backgroundColor: "#9EA6BE46", alignSelf: "center"}}></View>
            <View style={{flexDirection: "row", left: 10}}>
                <Text style={{fontSize:14, color:"#9EA6BE", fontWeight:"400", fontStyle: "normal", textAlign: "left"}}>{heading}</Text> 
                <Text style={{fontSize:14, color:"#000", fontWeight:"400", fontStyle: "normal", left: 5}}>{headingValue}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainView: {
        width: "100%",
        alignSelf: "center",
        alignItems: "stretch",
        flexDirection: "row"
    },
});

export default DisplayBookInformation;