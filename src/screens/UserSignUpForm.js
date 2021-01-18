import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDownSelectBox from '../../components/DropDownSelectBox';
import InputView from '../../components/InputView';
import {translate} from './../util/TranslationUtils';
import ButtonView from '../../components/ButtonView';
import RBSheet from 'react-native-raw-bottom-sheet';
import {userType} from './../util/DataUtil';

export default class UserSignUpForm extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: '',
    };
  };

  constructor(props) {
    super(props);
    console.log('------');
    this.state = {selectedUserType: ''};
  }

  componentDidMount() {}

  componentWillUnmount() {}
  setUserType = (userType) => {
    console.log(userType.label);
    this.setState({selectedUserType: userType.label});
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F2F2F2'}}>
        <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
          <KeyboardAwareScrollView>
            <View style={style.mainViewStyle}>
              <View style={{width: 320, height: 122}}>
                <Image
                  style={{resizeMode: 'contain', alignSelf: 'center'}}
                  source={require('../../assets/logo.png')}
                />
              </View>
              <View style={{height: 50, width: 320}}>
                <Text style={{textAlign: 'center'}}>
                  {translate('sign_up_desc')}
                </Text>
              </View>
              <View style={{height: 50}}>
                <InputView
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                  }}
                  imageSource={require('../../assets/SignUp/user-icon.png')}
                  placeholderText={translate('user_name')}
                  isSecureField={false}
                  isFullWidth={true}
                />
              </View>
              <View style={{height: 50}}>
                <InputView
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                  }}
                  imageSource={require('../../assets/SignUp/email-icon.png')}
                  placeholderText={translate('email')}
                  isSecureField={false}
                  isFullWidth={true}
                />
              </View>
              <View style={{height: 50}}>
                <InputView
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                  }}
                  imageSource={require('../../assets/SignUp/phone.png')}
                  placeholderText={translate('mobile_number')}
                  isSecureField={false}
                  isFullWidth={true}
                />
              </View>
              <View style={{height: 50}}>
                <DropDownSelectBox
                  placeholderText={translate('user_type')}
                  selectedText={this.state.selectedUserType}
                  imageSource={require('../../assets/SignUp/user-type.png')}
                  isFullWidth={true}
                  onPressEvent={() => {
                    this.Standard.open();
                  }}
                />
              </View>
              <View style={{height: 50}}>
                <InputView
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                  }}
                  imageSource={require('../../assets/SignUp/dob.png')}
                  placeholderText={translate('dob')}
                  isSecureField={false}
                  isFullWidth={true}
                />
              </View>
              <View
                style={{
                  height: 50,
                  width: 320,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <InputView
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                  }}
                  imageSource={require('../../assets/SignUp/region.png')}
                  placeholderText={translate('region')}
                  isFullWidth={false}
                />
                <InputView
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                  }}
                  imageSource={require('../../assets/SignUp/city.png')}
                  placeholderText={translate('city')}
                  isFullWidth={false}
                />
              </View>

              {this.state.selectedUserType === 'Student' ? (
                <View>
                  <View
                    style={{
                      height: 50,
                      width: 320,
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <DropDownSelectBox
                      placeholderText={translate('country')}
                      imageSource={require('../../assets/SignUp/country.png')}
                      isFullWidth={false}
                      selectedText={''}
                      onPressEvent={() => {
                        console.log('Country Drop Down Clicked.......');
                      }}
                    />
                    <InputView
                      changeTextEvent={(newValue) => {
                        console.log('Inputtting something .....', newValue);
                      }}
                      imageSource={require('../../assets/SignUp/graduate.png')}
                      placeholderText={translate('college')}
                      isFullWidth={false}
                    />
                  </View>
                  <View style={{height: 50, width: 320, marginTop: 15}}>
                    <InputView
                      changeTextEvent={(newValue) => {
                        console.log('Inputtting something .....', newValue);
                      }}
                      imageSource={require('../../assets/SignUp/university.png')}
                      placeholderText={translate('university')}
                      style={{width: 150}}
                      isFullWidth={true}
                    />
                  </View>
                </View>
              ) : null}

              {this.state.selectedUserType === 'Individual' ? (
                  <View>
                      <View
                    style={{
                      height: 50,
                      width: 320,
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <DropDownSelectBox
                      placeholderText={translate('country')}
                      imageSource={require('../../assets/SignUp/country.png')}
                      isFullWidth={true}
                      selectedText={''}
                      onPressEvent={() => {
                        console.log('Country Drop Down Clicked.......');
                      }}
                    />
                    </View>
                <View style={{height: 50, width: 320,marginTop:15}}>
                  <InputView
                    changeTextEvent={(newValue) => {
                      console.log('Inputtting something .....', newValue);
                    }}
                    imageSource={require('../../assets/SignUp/university.png')}
                    placeholderText={translate('Iqama_number')}
                    style={{width: 150}}
                    isFullWidth={true}
                  />
                </View>
                </View>
              ) : null}
              {this.state.selectedUserType === 'Company' ? (
                  <View>
                  <View
                style={{
                  height: 50,
                  width: 320,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <DropDownSelectBox
                  placeholderText={translate('country')}
                  imageSource={require('../../assets/SignUp/country.png')}
                  isFullWidth={true}
                  selectedText={''}
                  onPressEvent={() => {
                    console.log('Country Drop Down Clicked.......');
                  }}
                />
                </View>
                <View style={{height: 50, width: 320,marginTop:15 }}>
                  <InputView
                    changeTextEvent={(newValue) => {
                      console.log('Inputtting something .....', newValue);
                    }}
                    imageSource={require('../../assets/SignUp/university.png')}
                    placeholderText={translate('cr_no')}
                    style={{width: 150}}
                    isFullWidth={true}
                  />
                </View>
                </View>
              ) : null}
              <View style={{height: 50, width: 320}}>
                <ButtonView
                  clickEvent={() => {
                    console.log('Sign Up Clicked ......');
                  }}
                  name={translate('sign_up_btn_text')}
                />
              </View>
              <View style={style.dontHaveAccountViewStyle}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('Don;t have account clicked ....');
                    this.props.navigation.navigate('userSignUpForm');
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={style.dontHaveAccountTextStyle}>
                      {translate('already_login_text')}
                    </Text>
                    <Text style={style.dontHaveSignUpTextStyle}>
                      {translate('sign_in_with_dash')}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <RBSheet
              ref={(ref) => {
                this.Standard = ref;
              }}
              height={150}>
              <View>
                <FlatList
                  data={userType}
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
                          this.Standard.close();
                          this.setUserType(item);
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
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F2F2F2',
    justifyContent: 'space-between',
    height: 850,
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
});
