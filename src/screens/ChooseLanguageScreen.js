import React, {useState} from "react";
import {View,SafeAreaView, StyleSheet, Text, Image, FlatList, TouchableOpacity, I18nManager} from "react-native"
import DropDownSelectBox from '../../components/DropDownSelectBox'
import ButtonView from '../../components/ButtonView'
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {translate} from "./../util/TranslationUtils";
import RBSheet from 'react-native-raw-bottom-sheet';
import {languageArray} from './../util/DataUtil'

const translationGetters = {

    en: () => require('../translations/en.json'),
    ar: () => require('../translations/ar.json'),
};


const setI18nConfig = (lang) => {
    const fallback = { languageTag: 'ar', isRTL: false };
    const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;
    translate.cache.clear();
    I18nManager.forceRTL(isRTL);
    i18n.translations = { [lang]: translationGetters[lang]() };
    i18n.locale = lang;
};

export default class ChooseLanguageScreen extends React.Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
  
    return {
      header: () => null
        };
    };

    constructor(props) {
        super(props);
        this.state = {langTitle: languageArray[0].label, langCode: languageArray[0].code}
        setI18nConfig('en');
    }
  
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    setChosseLang = (lang) => {
      this.setState({chosseLang: lang});
    }

    setLanguage = (item) => {
      console.log(item.label);
      this.setState({chosseLang: item.code});
    };

    render() {
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#F2F2F2"}}>
            <View style={{flex: 1, justifyContent: "center"}}>
                <View style={{width: 320, alignSelf: "center"}}>
                    <View style={{width: 96, height: 96, alignSelf: "center"}}>
                            <Image style={{}}
                                resizeMode="contain"
                                source={require('../../assets/language-choose-icon.png')} 
                            />
                    </View>
                    <View style={{height: 32, alignSelf: "center", marginTop: 10}}>
                        <Text style={{fontSize: 29, fontWeight: "bold", fontStyle: "normal", color: "#1C1939"}}>{translate('choose_language')}</Text>
                    </View>
                    <View style={{height: 18, alignSelf: "center", marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: "normal", fontStyle: "normal", color: "#1C1939"}}>{translate('choose_language')}</Text>
                    </View>
                    <View style={{width: 320, height: 50, marginTop: 10}}>
                        <DropDownSelectBox 
                                selectedText={this.state.langTitle}
                                isFullWidth={true}
                                onPressEvent = {() =>{
                                    this.ChooseLanguage.open();    
                                }}
                        />
                    </View>
                    <View style={{width: 320, height: 50, marginTop: 10}}>
                            <ButtonView
                                name={translate('next')}
                                clickEvent = { () => {
                                    console.log('----:', this.state.lang)
                                    console.log("this is language code::::",this.state.langCode)
                                    this.props.navigation.navigate('countrySelectScreen', { data: { code: this.state.langCode} })
                                }}
                            />
                    </View>
                </View>
                <RBSheet
              ref={(ref) => {
                this.ChooseLanguage = ref;
              }}
              height={150}>
              <View>
                <FlatList
                  data={languageArray}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        style={{
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderBottomWidth: 1,
                          borderColor: '#D3D3D3',
                          backgroundColor: '#F2F2F2'
                        }}
                        onPress={() => {
                          this.ChooseLanguage.close();
                          this.setState({'langTitle': item.label})
                          this.setState({'langCode': item.code})
                          console.log("id is:::", item.id, item.code)
                        }}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: "stretch"}}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: '500',
                            alignSelf: 'center',
                            fontSize: 18,
                          }}>
                          {item.label}
                        </Text>
                        </View>  
                        
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </RBSheet>
            </View>
        </SafeAreaView>
    )
    }
    
}