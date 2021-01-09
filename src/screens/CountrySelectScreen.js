import React, {useState} from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const CountrySelectScreen = () => {

    const [country, setCountry] = useState([
        {name: 'Saudi Arabia', id: 1, image: require('../../assets/Flags/saudi-arab-flag.png'), isHidden: true},
        {name: 'UAE', id: 2, image: require('../../assets/Flags/uae-flag.png'), isHidden: true},
        {name: 'Egypt', id: 3, image: require('../../assets/Flags/egypt-flag.png'), isHidden: true},
        {name: 'Kuwait', id: 4, image: require('../../assets/Flags/kuwait-flag.png'), isHidden: true},
        {name: 'Amman', id: 5, image: require('../../assets/Flags/damman-flag.png'), isHidden: true},
        {name: 'Jordan', id: 6, image: require('../../assets/Flags/jordan-flag.png'), isHidden: true},
        {name: 'Bahrain', id: 7, image: require('../../assets/Flags/bahrain-flag.png'), isHidden: true},
    ]);

    const createThreeButtonAlert = (item) =>
    Alert.alert(
      "Alert Title",
      `My Alert Msg ${item.name}`,
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    return (
        <View style={styles.mainViewStyle}>
            <View style={{top: 50}}>
                <Text style={styles.headingStyle}>
                    Choose the Language
                </Text>
            </View>
            <View style={{top: 60}}> 
            <FlatList
                keyExtractor = {(item) => item.id} 
                data = {country}
                renderItem = { ({item}) => {
                        return (
                            <TouchableOpacity onPress={ () => {
                                var array = []
                                country.forEach(element => {
                                    if (element.id == item.id) {
                                        element.isHidden = false
                                    } else {
                                        element.isHidden = true
                                    }
                                    array.push(element)
                                }
                                    
                                );
                                setCountry(array);
                            }}>
                                <View style={styles.countryNameStyle}>
                                    <Image 
                                        source={item.image} 
                                        style={styles.imageStyle} 
                                    />
                                    <Text style={styles.countryNameTextStyle}>{item.name}</Text>
                                    <View style={[styles.roundViewStyle, item.isHidden ? styles.roundViewStyle : styles.roundViewStyleWithoutBorder]}>
                                        <Image
                                            source={require('../../assets/yellow-check-mark.png')}
                                            style={{display: item.isHidden ? "none" :  "flex", width: 20, height: 20}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            
                        )
                    }
                } 
            />
            </View>          
        </View>
    )   
};

const styles = StyleSheet.create({
    mainViewStyle: {
        backgroundColor: "#F2F2F2",
        alignItems: "stretch",
        flexDirection: "column",
    },
    headingViewStyle: {
        top: 90
    },
    countryNameStyle: {
        height: 70,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: "white"
    },
    countryNameTextStyle: {
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 38,
        textAlign: "left",
        flex: 1,
        position: "absolute",
        left: 82
    },
    headingStyle: {
        fontWeight: "bold",
        fontStyle: "normal",
        fontSize: 29,
        lineHeight: 38,
        textAlign: "center",
    },
    imageStyle: {
        left: 19,
        width: 52,
        height: 33,
        position: "absolute",
        alignSelf: "center",
        resizeMode: 'contain',
    },
    roundViewStyle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: "#5D648A",
        borderWidth: 1,
        right: 20,
        alignSelf: "flex-end"
    },
    roundViewStyleWithoutBorder: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: "#F2F2F2",
        borderWidth: 1,
        right: 20,
        alignSelf: "flex-end"
    }
  });
  

export default CountrySelectScreen;