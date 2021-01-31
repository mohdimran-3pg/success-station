// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import React, {useState} from 'react';
import {Button, View, Text, SafeAreaView, TouchableWithoutFeedback, Image, StyleSheet, TextInput, I18nManager, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputViewWithOutImage from '../../../../components/InputViewWithOutImage';
import DropDownSelectBoxWithoutImage from '../../../../components/DropDownSelectBoxWithoutImage';
import {translate} from '../../../util/TranslationUtils';
import AdsStepView from '../../../../components/AdsStepView'
import ArrowView from '../../../../components/ArrowView'
import ButtonView from '../../../../components/ButtonView'
import ImagePicker from "react-native-customized-image-picker";

const AdsScreen = ({navigation}) => {
  const [borderWidth, setBorderWidth] = useState(0)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
            <KeyboardAwareScrollView>
            <View style={{flex: 1, flexDirection: "column", height: 850}}>
            <View style={{backgroundColor:"#0A878A", height: 80, alignItems: 'center'}}>
              <View style={{height: 40, width:"95%", flexDirection: 'row', top: 10}}>
                <View style={{width: "20%", justifyContent: "flex-start"}}>
                </View>
                <View style={{width: "60%", justifyContent: "center"}}>
                  <Text style={styles.titleText}>{translate('ads')}</Text>
                </View>
                <View style={{width: "20%", alignItems: 'flex-end'}}>
                  <Image 
                    style={{width: 35, height: 35, borderRadius: 17.5}} 
                    source={require('../../../../assets/Ads/profile-pic.jpg')}
                  />
                </View>
              </View>
          </View>  
            <View style={{backgroundColor:"#0A878A", height: 80}}>
            <View style={{width:"80%", flexDirection: 'row', justifyContent: "space-between", alignSelf: "center"}}>
                  <View style={{width: "32%", height: 65, flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                      <AdsStepView
                          isSelected={true} 
                          displayText={translate('announce_new')}
                          stepNo={translate('01')}
                      />
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <ArrowView
                        isSelected={true} 
                        style={{alignSelf: 'center'}}
                      />
                    </View>
                  </View>
                  <View style={{width: "32%", height: 65, flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                      <AdsStepView
                          isSelected={false} 
                          displayText={translate('contact_information')}
                          stepNo={translate('02')}
                      />
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <ArrowView
                        isSelected={false} 
                      />
                    </View>
                    
                  </View>
                  <View style={{width: "25%", height: 65, alignSelf: "center"}}>
                    <View style={{alignSelf: "center"}}>
                      <AdsStepView
                            isSelected={false} 
                            displayText={translate('review_publish')}
                            stepNo={translate('03')}
                        />
                    </View>
                  </View> 
              </View>
            </View>  
            <View style={{flex: 1, alignItems: 'stretch', backgroundColor: '#F2F2F2', justifyContent: 'space-between', width: 320, alignSelf: 'center', height: 650, top: 25}}>
              <View style={{height: 80, justifyContent: 'space-between'}}>
                <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('category')}</Text>
                <DropDownSelectBoxWithoutImage
                  placeholderText={translate('category')}
                  selectedText={''}
                  isFullWidth={true}
                  onPressEvent={() => {
                    console.log('------')
                  }}
                />
              </View>
              <View style={{height: 80, justifyContent: 'space-between'}}>
                <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('user_type')}</Text>
                <DropDownSelectBoxWithoutImage
                  placeholderText={translate('user_type')}
                  selectedText={''}
                  isFullWidth={true}
                  onPressEvent={() => {
                  }}
                />
              </View>
              <View style={{height: 80, justifyContent: 'space-between'}}>
                <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('title')}</Text>
                <InputViewWithOutImage
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                  }}
                  placeholderText={translate('title')}
                  isFullWidth={true}
                />
              </View>
              <View style={{height: 115, justifyContent: 'space-between'}}>
                <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('description')}</Text>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{textAlign: I18nManager.isRTL ? 'right' : 'left', borderWidth: borderWidth, borderColor: "#0A878A", borderRadius:4, height: 90, backgroundColor: '#FFFFFF'}}
                    placeholder={`  `+translate('description')}
                    multiline={true}
                    onFocus = {(newValue) => {
                      setBorderWidth(1);
                    }}
                />
              </View>
              <View style={{width: "100%", height: 54, backgroundColor: "#FFA73342", borderRadius:4}}>
                  <TouchableOpacity 
                      style={{width: "100%", height: "100%", justifyContent: "center", alignItems: 'center'}}
                      onPress={() => {
                        console.log('hello imran', navigation);
                        ImagePicker.openPicker({}).then(image => {
                          console.log(image);
                        });
                      }

                      }
                  >
                      <View style={{width: 120, height: 20, flexDirection: "row", justifyContent: "space-between"}}>
                        <Image
                            style={{width: 24, height: 20, resizeMode: "contain"}}
                            source={require('../../../../assets/Ads/upload-icon.png')} 
                        />
                        <Text style={{fontSize:15, fontWeight: "400", fontStyle: "normal", color: "#F78A3A", width: 86, height: 20}}>Uplad Photo</Text>
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={{height: 80, justifyContent: 'space-between'}}>
                <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('city')}</Text>
                <InputViewWithOutImage
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                  }}
                  placeholderText={translate('city')}
                  isFullWidth={true}
                />
              </View>
              <View style={{height: 50, width: 320 ,marginBottom:30}}>
                <ButtonView
                  clickEvent={() => {
                    console.log('Sign Up Clicked ......');
                    navigation.navigate('EnterPublisherDetail')
                  }}
                  name={translate('next')}
                />
              </View>
            </View>
            </View>
            </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center", 
    color: "white"
  },
  stepTitleText: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center", 
    color: "white"
  },
  stepNumberText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#F78A3A",
    width:20,
    height:20,
    alignSelf: "center",
  },
  inputFullViewStyle: {
    borderWidth: 1,
    borderColor: "#0A878A",
    height: 100,
    width: 320,
    borderRadius: 4,
    alignItems: "stretch",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row"
}
});


export default AdsScreen;
