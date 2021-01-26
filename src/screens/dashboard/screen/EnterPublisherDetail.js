import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  I18nManager,
  Button,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDownSelectBoxWithoutImage from '../../../../components/DropDownSelectBoxWithoutImage';
import InputViewWithOutImage from '../../../../components/InputViewWithOutImage';
import {translate} from '../../../util/TranslationUtils';
import ButtonView from '../../../../components/ButtonView';
import BorderButton from '../../../../components/BorderButton';
import AdsStepView from '../../../../components/AdsStepView'
import RBSheet from 'react-native-raw-bottom-sheet';
import {userType} from '../../../util/DataUtil';
import CalendarPicker from "react-native-calendar-picker"
import ArrowView from '../../../../components/ArrowView'

const EnterPublisherDetail = ({navigation}) => {
  
  setUserType = (userType) => {
    console.log(userType.label);
    this.setState({selectedUserType: userType.label});
  };
  setIsDobVisible = (isDobVisible) => {
    this.setState({isDobVisible: isDobVisible});
  }
  setViewHeight = (viewHeight) => {
    this.setState({viewHeight: viewHeight});
  }
  setDateOfBirth = (dateOfBirth) => {
    this.setState({dateOfBirth: dateOfBirth});
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
        <KeyboardAwareScrollView>
        <View style={{backgroundColor: "#0A878A", height:200, width: "100%"}}>
        <View style={{backgroundColor:"#0A878A", height: 80, alignItems: 'center'}}>
              <View style={{height: 40, width:"95%", flexDirection: 'row', top: 10}}>
                <View style={{width: "20%", justifyContent: "flex-start"}}>
                <Image style={{width: 15, height:15}}
                  source ={require('./../../../../assets/Ads/cross.png')}
                   />
                </View>
                <View style={{width: "60%", justifyContent: "center"}}>
                  <Text style={style.titleText}>{translate('ads')}</Text>
                </View>
                <View style={{width: "20%", alignItems: 'flex-end'}}>
                  <Image 
                    style={{width: 35, height: 35, borderRadius: 17.5}} 
                    source={require('../../../../assets/Ads/profile-pic.jpg')}
                  />
                </View>
              </View>
          </View>
        <View style={{height: 65, width:"85%", flexDirection: 'row', top: 25, justifyContent: "space-between", alignSelf: "center"}}>
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
                          isSelected={true} 
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
          <View style={{flex: 1, alignItems: 'stretch', backgroundColor: '#F2F2F2', justifyContent: 'space-between', height: 700, width: 320, alignSelf: 'center'}}>
            <View style={{height: 30, width: 320}}></View>
            <View style={{height: 80, justifyContent: 'space-between'}}>
              <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('full_name')}</Text>
              <InputViewWithOutImage
                changeTextEvent={(newValue) => {
                  console.log('Inputtting something .....', newValue);
                }}
                placeholderText={translate('full_name')}
                isFullWidth={true}
              />
            </View>
            <View style={{height: 80, justifyContent: 'space-between'}}>
              <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('mobile_no')}</Text>
              <InputViewWithOutImage
                changeTextEvent={(newValue) => {
                  console.log('Inputtting something .....', newValue);
                }}
                placeholderText={translate('mobile_no')}
                isFullWidth={true}
              />
            </View>
            <View style={{height: 80, justifyContent: 'space-between'}}>
              <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('Telephone_no')}</Text>
              <InputViewWithOutImage
                changeTextEvent={(newValue) => {
                  console.log('Inputtting something .....', newValue);
                }}
                placeholderText={translate('Telephone_no')}
                isFullWidth={true}
              />
            </View>
            <View style={{height: 80, justifyContent: 'space-between'}}>
              <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('email')}</Text>
              <InputViewWithOutImage
                changeTextEvent={(newValue) => {
                  console.log('Inputtting something .....', newValue);
                }}
                placeholderText={translate('email')}
                isFullWidth={true}
              />
            </View>
            <View style={{height: 120, justifyContent: 'space-between'}}>
            <Text style={{width: "100%", fontSize:15, fontWeight:"400", fontStyle: "normal", color:"#9EA6BE", height: 25}}>{translate('notes')}</Text>
              <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{textAlign: I18nManager.isRTL ? 'right' : 'left', borderWidth: 1, borderColor: "#0A878A", borderRadius:4, height: 90}}
                  placeholder={`  `+translate('notes')}
                  multiline={true}
              />
            </View>
            <View style={{height: 80, width: 320, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: "48%", height: "100%"}}>
              <BorderButton
                clickEvent={() => {
                  navigation.pop();
                }}
                name={translate('previous')}
              />
              </View>

              <View style={{width: "48%", height: "100%"}}>
              <ButtonView
                clickEvent={() => {
                  navigation.navigate('AdDetail')
                  console.log('Sign Up Clicked ......', navigation);
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

const style = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F2F2F2',
    justifyContent: 'space-between',
    height: 500,
    width: 320,
    alignSelf: 'center',
  },
  dontHaveAccountViewStyle: {
    width: 280,
    alignSelf: 'center',
    height: 25,
    borderColor: 'red',
    borderWidth: 0,
    alignItems: 'center',
  },
  dontHaveAccountTextStyle: {
    textAlignVertical: 'center',
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    color: '#2C2948',
  },
  dontHaveSignUpTextStyle: {
    textAlignVertical: 'center',
    fontSize: 15,
    fontWeight: '700',
    fontStyle: 'normal',
    color: '#F78A3A',
  },
  titleText: {
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center", 
    color: "white"
  }
});

export default EnterPublisherDetail;