import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDownSelectBox from '../../components/DropDownSelectBox';
import InputView from '../../components/InputView';
import {translate} from './../util/TranslationUtils';
import ButtonView from '../../components/ButtonView';
import RBSheet from 'react-native-raw-bottom-sheet';
import {userType} from './../util/DataUtil';
import CalendarPicker from "react-native-calendar-picker"
import DynamicTabView from 'react-native-dynamic-tab-view';
<<<<<<< HEAD
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import axios from 'axios';
=======
import RadioForm ,{RadioButton, RadioButtonInput, RadioButtonLabel}  from 'react-native-simple-radio-button';
import ApiService from '../network/ApiService';
import Helper from '../util/Helper';
//import Loading from 'react-native-whc-loading'
import Loader from './Loader';
>>>>>>> API+Integration

var radio_props = [
  {label: translate('company'), value: 'company' },
  {label: translate('individual'), value: 'individual' }
];

export default class UserSignUpForm extends React.Component {
  
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: '',
    };
  };

  constructor(props) {
    super(props);
   
    this.state = {isLoading: false, 
                  selectedUserType: 'student', 
                  isDobVisible: false, 
                  viewHeight: 750+80, 
                  dateOfBirth: '', 
                  index: 0, 
                  universities: [], 
                  countries: [], 
                  cities: [],
                  selectedUniversity: '', 
                  selectedCountry: '',
                  selectedCity: '',
                  selectedUniversityId: 0,
                  selectedCountryId: 0,
                  selectedCityId: 0,
                  userName: '',
                  email: '',
                  mobileNumber: '',
                  region: '',
                  college: '',
                  crNo: '',
                  iqamaNo: ''
                };
    this.data = [
      {title: translate('student'), key: '3', type: 'student'},
      {title: translate('company'), key: '1', type: 'company'}
    ];
  }

  getCountries () {
    ApiService.get('countries').then((response) => {
      console.log('Country Data:::::'+response.data[0].name)
      this.setState({countries: response.data})
      this.setState({isLoading: false});
      this.getUniversities()
      this.setState({isLoading: true});
  }).catch ((error)=> {alert(error)})
  }

  getCityByCountry = () => {
   this.setState({isLoading : true})
    ApiService.get('cities',{
      'country':this.state.selectedCountryId,
  }).then((response) => {
    this.setState({isLoading : false})
    this.setState({cities: response.data})
    this.citySheet.open();
  }).catch ((error)=> {
    this.setState({isLoading : false})
    alert(error)})
  }

  getUniversities() {
  
    ApiService.get('universities',{
      'search':'parameter',
  }).then((response) => {
    console.log('University Data:::::', response.data)
    this.setState({universities: response.data});
    this.setState({isLoading: false});
  }).catch ((error)=> {alert(error)})
  }

  startSignUp() {
    errorArray = []
    console.log('--------- startSignUp |||| ', this.state.selectedCountryId, 'isValid ---- ', Helper.isEmailValid(this.state.email))
    if(this.state.userName == '') {
      errorArray.push("Enter User Name")
    } 
    
    if (this.state.email == '') {
      errorArray.push("Enter Email")
    } 
    
    if (Helper.isEmailValid(this.state.email)) {
      errorArray.push("Enter valid Email")
    } 
    
    if (this.state.mobileNumber == '') {
      errorArray.push("Enter Mobile")
    } 
  
    if (this.state.selectedCountryId == 0) {
      errorArray.push("Select Country")
    } 
    
    if (this.state.selectedCityId == 0) {
      errorArray.push("Select City")
    } 
    
    if (this.state.region == 0) {
      errorArray.push("Enter Region")
    }

    if (this.state.selectedUserType == 'student') {
      if (this.state.dateOfBirth == '') {
        errorArray.push("Select Date of Birth")
      } 
      
      if (this.state.college == '') {
        errorArray.push("Enter college")
      } 
      
      if (this.state.selectedUniversityId == 0) {
        errorArray.push("Selected University")
      }
    } else if (this.state.selectedUserType == 'company') {
      if (this.state.crNo == '') {
        errorArray.push("Enter CR Number")
      } 
    } else if (this.state.selectedUserType == 'individual') {

      if (this.state.dateOfBirth == '') {
        errorArray.push("Select Date of Birth")
      } 
      
      if (this.state.iqamaNo == '') {
        errorArray.push("Enter Iqama Number")
      }
    }

    if (errorArray.length > 0) {
      errorText = errorArray.join("\n")
      alert(errorText)
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
    this.getCountries()
   
  }

  componentWillUnmount() {}
  setUserType = (userType) => {
    console.log(userType);
    this.setState({selectedUserType: userType});
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

  render() {
    return (
    
      (<SafeAreaView style={{flex: 1, backgroundColor: '#F2F2F2'}}>
                     <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
                
          <KeyboardAwareScrollView>
          
            <View style={{flex: 1, alignItems: 'stretch', backgroundColor: '#F2F2F2', justifyContent: 'space-between', height: this.state.viewHeight, width: 320, alignSelf: 'center'}}>
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
              <View style={{width: "80%", height: 60, justifyContent: 'center', alignSelf: 'center'}}>
                <DynamicTabView
                  data={this.data}
                  renderTab={() => <View
                  style={{flex: 1, height: 1 }}
                  />
                }
              
                  defaultIndex={this.state.defaultIndex}
                  containerStyle={style.container2}
                  headerBackgroundColor={'#F2F2F2'}
                  headerTextStyle={style.headerText}
                  onChangeTab={(item) => {
                    console.log('clicked....', this.data[item].type)

                    if (this.data[item].type == "student") {
                      this.setViewHeight(750+80)
                    } else {
                      this.setViewHeight(680+60)
                    }
                    this.setUserType(this.data[item].type)
                  }
                  }
                  headerUnderlayColor={'#F78A3A'}
                />
              </View>
              <View style={{height: 50}}>
                <InputView
                  changeTextEvent={(newValue) => {
                    console.log('Inputtting something .....', newValue);
                    this.setState({userName: newValue});
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
                    this.setState({email: newValue});
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
                    this.setState({mobileNumber: newValue});
                  }}
                  imageSource={require('../../assets/SignUp/phone.png')}
                  placeholderText={translate('mobile_number')}
                  isSecureField={false}
                  isFullWidth={true}
                />
              </View>
              {this.state.selectedUserType === 'company' || this.state.selectedUserType === 'individual' ? (
              <View style={{height: 50, width: 320, justifyContent: 'flex-end'}}>
                <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  formHorizontal={true}
                  selectedButtonColor={"#F78A3A"}
                  buttonColor={"#F78A3A"}
                  labelStyle={{marginRight: 15}}
                  onPress={(item) => {
                    console.log(item)
                    if (item == "individual") {
                      this.setViewHeight(750+80)
                    } else {
                      this.setViewHeight(680+60)
                    }
                    this.setUserType(item)
                  }}
                />   
              </View>)
              : null}
              {this.state.selectedUserType === 'student' || this.state.selectedUserType === 'individual' ? (
              <View>  
                <View style={{height: 50}}>
                  <DropDownSelectBox
                        placeholderText={translate('dob')}
                        imageSource={require('../../assets/SignUp/dob.png')}
                        isFullWidth={true}
                        selectedText={this.state.dateOfBirth}
                        onPressEvent={() => {
                          this.calendar.open();
                        }}
                      />
                </View>
              </View>) : null }
              {this.state.selectedUserType === 'student' || this.state.selectedUserType === 'individual' || this.state.selectedUserType === 'company' ? (            
              <View>
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
                      this.setState({region: newValue});
                    }}
                    imageSource={require('../../assets/SignUp/region.png')}
                    placeholderText={translate('region')}
                    isFullWidth={false}
                  />
                  <DropDownSelectBox
                      placeholderText={translate('city')}
                      imageSource={require('../../assets/SignUp/city.png')}
                      isFullWidth={false}
                      selectedText={this.state.selectedCity}
                      onPressEvent={() => {
                        this.getCityByCountry();
                        console.log('Country Drop Down Clicked.......');
                      }}
                    />
                </View>       
              </View>) : null }

              



              {this.state.selectedUserType === 'student' ? (
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
                      selectedText={this.state.selectedCountry}
                      onPressEvent={() => {
                        this.countriesSheet.open();
                        console.log('Country Drop Down Clicked.......');
                      }}
                    />
                    <InputView
                      changeTextEvent={(newValue) => {
                        console.log('Inputtting something .....', newValue);
                        this.setState({college: newValue});
                      }}
                      imageSource={require('../../assets/SignUp/graduate.png')}
                      placeholderText={translate('college')}
                      isFullWidth={false}
                    />
                  </View>
                  <View style={{height: 50, width: 320, marginTop: 15}}>
                    <DropDownSelectBox
                        placeholderText={translate('university')}
                        imageSource={require('../../assets/SignUp/university.png')}
                        isFullWidth={true}
                        selectedText={this.state.selectedUniversity}
                        onPressEvent={() => {
                          this.universitySheet.open();
                        }}
                      />
                  </View>
                </View>
              ) : null}

              {this.state.selectedUserType === 'individual' ? (
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
                      selectedText={this.state.selectedCountry}
                      onPressEvent={() => {
                        this.countriesSheet.open();
                        console.log('Country Drop Down Clicked.......');
                      }}
                    />
                    </View>
                <View style={{height: 50, width: 320,marginTop:15}}>
                  <InputView
                    changeTextEvent={(newValue) => {
                      console.log('Inputtting something .....', newValue);
                      this.setState({iqamaNo: newValue});
                    }}
                    imageSource={require('../../assets/SignUp/university.png')}
                    placeholderText={translate('Iqama_number')}
                    style={{width: 150}}
                    isFullWidth={true}
                  />
                </View>
                </View>
              ) : null}
              {this.state.selectedUserType === 'company' ? (
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
                  selectedText={this.state.selectedCountry}
                  onPressEvent={() => {
                    this.countriesSheet.open();
                    console.log('Country Drop Down Clicked.......');
                  }}
                />
                </View>
                <View style={{height: 50, width: 320,marginTop:15 }}>
                  <InputView
                    changeTextEvent={(newValue) => {
                      console.log('Inputtting something .....', newValue);
                      this.setState({crNo: newValue});
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
                  clickEvent={()=>{
                    this.startSignUp();
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
                          if (item.id == 1) {
                              this.setViewHeight(750+80)
                          } else if (item.id == 2) {
                            this.setViewHeight(750+80)
                          } else {
                            this.setViewHeight(680+60)
                          }
                          console.log(item)
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
            <RBSheet
            ref={(ref) => {
              this.calendar = ref;
            }}
            height={400}
            >
              <View style={{height: 400, justifyContent: "center", alignItems: "center", backgroundColor: '#F2F2F2'}}>
                <CalendarPicker
                  startFromMonday={true}
                  allowRangeSelection={false}
                  minDate={new Date(1947, 11, 31)}
                  maxDate={new Date()}
                  todayBackgroundColor="#f2e6ff"
                  selectedDayColor="#7300e6"
                  selectedDayTextColor="#FFFFFF"
                  scrollable={true}
                  onDateChange = {(STATE_DATE, END_DATE) => {
                      console.log("STATE_DATE:::", STATE_DATE.toObject())
                      var str = `${STATE_DATE.toObject().date}-${STATE_DATE.toObject().months+1}-${STATE_DATE.toObject().years}`
                      this.setDateOfBirth(str)
                      console.log("END_DATE:::", str)
                    }
                  }
                />
              </View>
            </RBSheet>
            <RBSheet ref={(ref) => {
              this.universitySheet = ref;
              console.log('+++++++++++', this.state.universities)
            }}>
              <FlatList  
                data={this.state.universities}
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
                        this.setState({selectedUniversity: item.name});
                        this.setState({selectedUniversityId: item.id});
                        this.universitySheet.close();
                        console.log('Selected University=========='+item.name)
                      }}>
                      <View style={{flex: 1, justifyContent: 'center', alignItems: "stretch"}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '500',
                          alignSelf: 'center',
                          fontSize: 18,
                        }}>
                        {item.name}
                      </Text>
                      </View>  
                      
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item) => item.id} 
              />
            </RBSheet>
            <RBSheet ref={(ref) => {
              this.countriesSheet = ref;
              console.log('+++++++++++', this.state.countries)
            }}>
              <FlatList  
                data={this.state.countries}
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
                        this.setState({selectedCountry: item.name});
                        this.setState({selectedCountryId: item.id});
                        this.countriesSheet.close();
                        console.log('Selected Country=========='+item.name)
                      }}>
                      <View style={{flex: 1, justifyContent: 'center', alignItems: "stretch"}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '500',
                          alignSelf: 'center',
                          fontSize: 18,
                        }}>
                        {item.name}
                      </Text>
                      </View>  
                      
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item) => item.id} 
              />
            </RBSheet>
            <RBSheet ref={(ref) => {
              this.citySheet = ref;
              console.log('+++++++++++', this.state.countries)
            }}>
              <FlatList  
                data={this.state.cities}
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
                        this.setState({selectedCity: item.city});
                        this.setState({selectedCityId: 227});
                        this.citySheet.close();
                        console.log('Selected Country=========='+item.name)
                      }}>
                      <View style={{flex: 1, justifyContent: 'center', alignItems: "stretch"}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '500',
                          alignSelf: 'center',
                          fontSize: 18,
                        }}>
                        {item.city}
                      </Text>
                      </View>  
                      
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item) => item.id} 
              />
            </RBSheet> 
          </KeyboardAwareScrollView>
        </View>
        {this.state.isLoading ?   <Loader
          loading={this.state.loading} /> :null}

        
      </SafeAreaView>)
    );
  }
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
  container2: {

  },
  headerContainer: {
    marginTop: 16,
  },
  headerText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  tabItemContainer: {
    backgroundColor: '#cf6bab',
  }
});
