// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, SafeAreaView, TouchableWithoutFeedback, Image, StyleSheet, TextInput, I18nManager, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputView from '../../../../components/InputView';
import DropDownSelectBox from '../../../../components/DropDownSelectBox';
import {translate} from '../../../util/TranslationUtils';
import AdsStepView from '../../../../components/AdsStepView'
import ButtonView from '../../../../components/ButtonView'
const AdsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'stretch',
          }}>
          <View style={{backgroundColor:"#0A878A", height: 190, alignItems: 'center'}}>
              <View style={{height: 40, width:"95%", flexDirection: 'row', top: 10}}>
                <View style={{width: "20%", justifyContent: "flex-start"}}>
                  <Button style={{flex: 1, color: "#ff5c5c", width: "35", height: "35", fontSize: "28"}}
                  color="white"
                  fontSize="28"
                    title="X"
                   />
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
              <View style={{height: 65, width:"85%", flexDirection: 'row', top: 25, justifyContent: "space-between", alignSelf: "center"}}>
                  <View style={{width: "32%", height: 65}}>
                    <AdsStepView
                         isSelected={true} 
                         displayText={translate('announce_new')}
                         stepNo={translate('01')}
                         isArrowNeeded={true}
                    />
                  </View>
                  <View style={{width: "32%", height: 65}}>
                    <AdsStepView
                         isSelected={false} 
                         displayText={translate('contact_information')}
                         stepNo={translate('02')}
                         isArrowNeeded={true}
                    />
                  </View>
                  <View style={{width: "32%", height: 65}}>
                    <AdsStepView
                          isSelected={false} 
                          displayText={translate('review_publish')}
                          stepNo={translate('03')}
                          isArrowNeeded={false}
                      />
                  </View>
              </View>
          </View>  
          <View style={{width: "100%", height: 750, top: 25}}>
            <KeyboardAwareScrollView style={{}}>
            <View style={{flex: 1, alignItems: 'stretch', backgroundColor: '#F2F2F2', justifyContent: 'space-between', width: 320, alignSelf: 'center', height: 700}}>
              <View style={{height: 80, justifyContent: 'space-between'}}>
                <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('category')}</Text>
                <DropDownSelectBox
                  placeholderText={translate('category')}
                  imageSource={require('../../../../assets/SignUp/user-type.png')}
                  isFullWidth={true}
                  onPressEvent={() => {
                  }}
                />
              </View>
              <View style={{height: 80, justifyContent: 'space-between'}}>
                <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('user_type')}</Text>
                <DropDownSelectBox
                  placeholderText={translate('user_type')}
                  imageSource={require('../../../../assets/SignUp/user-type.png')}
                  isFullWidth={true}
                  onPressEvent={() => {
                  }}
                />
              </View>
              <View style={{height: 80, justifyContent: 'space-between'}}>
                <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('title')}</Text>
                <InputView
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                  }}
                  imageSource={require('../../../../assets/SignUp/email-icon.png')}
                  placeholderText={translate('title')}
                  isSecureField={false}
                  isFullWidth={true}
                />
              </View>
              <View style={{height: 115, justifyContent: 'space-between'}}>
                <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('description')}</Text>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{textAlign: I18nManager.isRTL ? 'right' : 'left', borderWidth: 1, borderColor: "#0A878A", borderRadius:4, height: 90}}
                    placeholder={translate('description')}
                    multiline={true}
                />
              </View>
              <View style={{width: "100%", height: 54, backgroundColor: "#FFA73342", borderRadius:4}}>
                  <TouchableOpacity style={{width: "100%", height: "100%", justifyContent: "center", alignItems: 'center'}}>
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
                <InputView
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                  }}
                  imageSource={require('../../../../assets/SignUp/email-icon.png')}
                  placeholderText={translate('city')}
                  isSecureField={false}
                  isFullWidth={true}
                />
              </View>
              <View style={{height: 50, width: "100%"}}>
                <ButtonView
                  clickEvent={() => {
                    console.log('Sign Up Clicked ......');
                  }}
                  name={translate('next')}
                />
              </View>
            </View>
            </KeyboardAwareScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
