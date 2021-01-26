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
import DisplayBookInformation from '../../../../components/DisplayBookInformation';
import InputViewWithOutImage from '../../../../components/InputViewWithOutImage';
import {translate} from '../../../util/TranslationUtils';
import ButtonView from '../../../../components/ButtonView';
import BorderButton from '../../../../components/BorderButton';
import AdsStepView from '../../../../components/AdsStepView'
import ArrowView from '../../../../components/ArrowView'

const AdDetail = ({navigation}) => {
    console.log(navigation);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#F2F2F2'}}>
          <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
            <KeyboardAwareScrollView>
                <View style={{backgroundColor: '#F2F2F2', flexDirection: 'column', justifyContent: 'space-between', height: 1150}}>
                <View style={{backgroundColor: "#0A878A", height:200, width: "100%"}}>
                <View style={{backgroundColor:"#0A878A", height: 80, alignItems: 'center'}}>
              <View style={{height: 40, width:"95%", flexDirection: 'row', top: 10}}>
                <View style={{width: "20%", justifyContent: "flex-start"}}>
                  <Button style={{flex: 1, color: "#ff5c5c", width: "35", height: "35", fontSize: "28"}}
                  color="white"
                  fontSize="28"
                    title="X"
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
                        isSelected={true} 
                      />
                    </View>
                    
                  </View>
                  <View style={{width: "25%", height: 65, alignSelf: "center"}}>
                    <View style={{alignSelf: "center"}}>
                      <AdsStepView
                            isSelected={true} 
                            displayText={translate('review_publish')}
                            stepNo={translate('03')}
                        />
                    </View>
                  </View> 
              </View>
          </View>
                    <View style={{height: 280, width: "100%"}}>
                        <Image style={{width: "100%"}}
                            resizeMode="contain"
                            source={require('../../../../assets/book-image.png')} 
                        />
                    </View>
                    <View style={{width: "100%"}}>
                        <Text style={{marginLeft: 15, marginTop: 15, marginRight: 15, fontSize: 20, fontStyle: "normal", color: "#000"}}>
                            Medicine book on Internal Medicine used one year
                        </Text>
                        <Text style={{marginLeft: 15, marginTop: 15, marginRight: 15, fontSize: 20, fontStyle: "normal", color: "#0A878A"}}>
                            AED 140
                        </Text>
                    </View>
                    <View style={{width: "100%", height: 6, backgroundColor: "#F4F7FC", marginTop: 25}}></View>
                    <View style={{width: "100%", height: 80, justifyContent: 'space-between', flexDirection: "column"}}>
                        <View style={{width: "80%", height: 40, justifyContent: 'space-between', flexDirection: "row"}}>
                            <View style={{width: "25%", marginLeft: 15}}>
                                <DisplayBookInformation 
                                    heading="City"
                                    headingValue="Jeddah"
                                />
                            </View>
                            <View style={{width: "25%", marginLeft: 15}}>
                                <DisplayBookInformation 
                                    heading="Type"
                                    headingValue="Medical"
                                />
                            </View>
                        </View>
                        <View style={{width: "80%", height: 40, justifyContent: 'space-between', flexDirection: "row"}}>
                            <View style={{width: 100, marginLeft: 15}}>
                                <DisplayBookInformation 
                                    heading="Ad Number"
                                    headingValue="9990624253"
                                />
                            </View>
                            <View style={{width: "25%", marginLeft: 15}}>
                                <DisplayBookInformation 
                                    heading="Status"
                                    headingValue="Used"
                                />
                            </View>
                        </View>
                        <View style={{width: "80%", height: 40, justifyContent: 'space-between', flexDirection: "row"}}>
                            <View style={{width: "25%", marginLeft: 15}}>
                                <DisplayBookInformation 
                                    heading="Section"
                                    headingValue="Books"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{width: "100%", height: 6, backgroundColor: "#F4F7FC"}}></View>
                    <View style={{width: "100%", flexDirection: "column", justifyContent: "space-between"}}>
                        <Text style={{marginLeft: 15, fontSize: 20, fontStyle: "normal", color: "#000", fontweight: "700"}}>
                        {translate('details')}
                        </Text>
                        <Text style={{marginLeft: 15, fontSize: 12, fontStyle: "normal", color: "#000", fontweight: "500", marginTop: 15}}>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts
                        </Text>
                    </View>
                    <View style={{width: "100%", height: 6, backgroundColor: "#F4F7FC"}}></View>
                    <View style={{width: "100%", height: 250, justifyContent: "space-between", flexDirection: "column"}}>
                    <Text style={{marginLeft: 15, fontSize: 20, fontStyle: "normal", color: "#000", fontweight: "700"}}>
                            {translate('ad_posted_at')}
                    </Text>
                    <Image
                        source={require('../../../../assets/map-image.png')}
                        style={{width: "90%", alignSelf: "center"}}
                        resizeMode="contain"
                    />
                    <View style={{height: 80, width: 320, flexDirection: 'row', justifyContent: 'space-between', alignSelf: "center"}}>
                        <View style={{width: "48%", height: "100%"}}>
                        <BorderButton
                            clickEvent={() => {
                            navigation.pop();
                            }}
                            name={translate('save_as_draft')}
                        />
                        </View>

                        <View style={{width: "48%", height: "100%"}}>
                        <ButtonView
                            clickEvent={() => {
                            navigation.navigate('AdDetail')
                            console.log('Sign Up Clicked ......', navigation);
                            }}
                            name={translate('publish')}
                        />
                        </View>
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

export default AdDetail;