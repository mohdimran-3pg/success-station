import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, I18nManager } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {

    en: () => require('../translations/en.json'),
    // ar: () => require('./src/translations/ar.json'),
    // fr: () => require('./src/translations/fr.json'),
    // ur: () => require('./src/translations/ur.json'),
  };
  
  const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key)
  );
  
  const setI18nConfig = (lang) => {
    // fallback if no available language fits
    const fallback = { languageTag: 'en', isRTL: false };
  
    const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;
  
    // clear translation cache
    translate.cache.clear();
    // update layout direction 
    I18nManager.forceRTL(isRTL);
    // set i18n-js config
    i18n.translations = { [lang]: translationGetters[lang]() };
    i18n.locale = lang;
  };
  
  

const countryData= [
    {name: 'Saudi Arabia', id: 1, image: require('../../assets/Flags/saudi-arab-flag.png'), isHidden: true},
    {name: 'UAE', id: 2, image: require('../../assets/Flags/uae-flag.png'), isHidden: true},
    {name: 'Egypt', id: 3, image: require('../../assets/Flags/egypt-flag.png'), isHidden: true},
    {name: 'Kuwait', id: 4, image: require('../../assets/Flags/kuwait-flag.png'), isHidden: true},
    {name: 'Amman', id: 5, image: require('../../assets/Flags/damman-flag.png'), isHidden: true},
    {name: 'Jordan', id: 6, image: require('../../assets/Flags/jordan-flag.png'), isHidden: true},
    {name: 'Bahrain', id: 7, image: require('../../assets/Flags/bahrain-flag.png'), isHidden: true},
];


export default class CountrySelectScreen extends React.Component {

    constructor(props) {
        super(props);
        setI18nConfig('en'); // set initial config
        this.state = {country : countryData}
      }
  
      componentDidMount() {
        RNLocalize.addEventListener('change', this.handleLocalizationChange);
      }
    
      componentWillUnmount() {
        RNLocalize.removeEventListener('change', this.handleLocalizationChange);
      }
    
      handleLocalizationChange = (lang) => {
        setI18nConfig(lang);
      };

  
render(){
    var data = this.state.country
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
                data = {data}
                renderItem = { ({item}) => {
                        return (
                            <TouchableOpacity onPress={ () => {
                                var array = []
                                data.forEach(element => {
                                    if (element.id == item.id) {
                                        element.isHidden = false
                                    } else {
                                        element.isHidden = true
                                    }
                                    array.push(element)
                                }
                                    
                                );
                                this.setState({country : array})
                                this.props.navigation.navigate('login')
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
}
}

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
  

