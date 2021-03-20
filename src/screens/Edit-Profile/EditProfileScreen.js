import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBase,
} from 'react-native';
import InputView from '../../../components/InputView';
import DropDownSelectBox from '../../../components/DropDownSelectBox';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {translate} from '.././../util/TranslationUtils';
import BorderButton from '../../../components/BorderButton';
import ButtonView from '../../../components/ButtonView';
import RBSheet from 'react-native-raw-bottom-sheet';
import ApiService from '../../network/ApiService';
import Loader from '../Loader';
import CalendarPicker from 'react-native-calendar-picker';

import ImagePicker from "react-native-customized-image-picker";


export default class EditProfileScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: 'Edit Profile',
      headerStyle: {
        backgroundColor: '#0A878A',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {date_of_birth: '',
    countries: [],
    regions: [],
    cities: [],
    universities: [],
    colleges: [],
    selectedCountry: '',
    selectedCountryId: 0,
    selectedRegionId: 0,
    selectedRegion: '',
    selectedCity: '',
    selectedCityId: 0,
    isLoading:false,
    selectedUniversity: '',
    selectedUniversityId: 0,
    selectedCollege: '',
    selectedCollegeId: 0,
    userName: '',
    email: '',
    mobileNumber: '',
    crNo: '',
    iqamaNo: '',
    img:'',
    mime:''
      };
    this.data = props.route.params.data;
    this.type = 'Student';

    if (this.data.user_type == 3) {
      this.type = 'Individual';
    } else if (this.data.user_type == 4) {
      this.type = 'Company';
    }
  }
  getUniversities() {
    this.setState({isLoading: true});
    ApiService.get('universities', {
      country: this.state.selectedCountryId,
    })
      .then((response) => {
        this.setState({universities: response.data});
        this.setState({isLoading: false});
        this.universitySheet.open();
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
        alert(error.data);
      });
  }
  imageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  updateProfile() {
    this.setState({isLoading: true});
    ApiService.post('update-profile',{
      name: this.data.name,
    email: this.data.email,
    mobile: this.data.mobile,
    country_id: this.state.selectedCountryId,
    city_id: this.state.selectedCityId,
    region_id: this.state.selectedRegionId,
    user_id: this.data.user_id,
    user_type: this.data.user_type,
    date_of_birth: this.state.date_of_birth,
    college_id: this.state.selectedCollegeId,
    university_id: this.state.selectedUniversityId,
    image: "data:image/png;base64,"+this.state.img
    })
      .then((response) => {
        this.setState({isLoading: false});
        this.props.navigation.goBack()
      })
      .catch((error) => {
       
        alert(error.data.message);
        this.setState({isLoading: false});
      });
  }

  getCollegeByUniversities = () => {
    this.setState({isLoading: true});
    ApiService.get('colleges', {
      university: this.state.selectedUniversityId,
    })
      .then((response) => {
        this.setState({isLoading: false});
        this.setState({colleges: response.data});
        this.collegeSheet.open();
      })
      .catch((error) => {
        this.setState({isLoading: false});
        alert(error.data.message);
      });
  };
  getCountries= () =>{
    this.setState({isLoading: true});
    ApiService.get('countries')
      .then((response) => {
        this.setState({isLoading: false});
        this.setState({countries: response.data});
        this.countriesSheet.open()
      })
      .catch((error) => {
        this.setState({isLoading: false});
        alert(error.data);
      });
  }
  getRegionByCountry = () => {
    this.setState({isLoading: true});
    ApiService.get('regions', {
      country: this.state.selectedCountryId,
    })
      .then((response) => {
        this.setState({isLoading: false});
        this.setState({regions: response.data});
        this.regionSheet.open();
      })
      .catch((error) => {
        this.setState({isLoading: false});
        alert(error.data.message);
      });
  };

  getCityByRegion = () => {
    this.setState({isLoading: true});
    ApiService.get('cities', {
      region: this.state.selectedRegionId,
    })
      .then((response) => {
        this.setState({isLoading: false});
        this.setState({cities: response.data});
        this.citySheet.open();
      })
      .catch((error) => {
        this.setState({isLoading: false});
        alert(error.data.message);
      });
  };

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'stretch'}}>
          <View>
            <KeyboardAwareScrollView style={{backgroundColor: '#F2F2F2'}}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'stretch',
                  backgroundColor: '#F2F2F2',
                  width: 320,
                  marginBottom: 100,
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                    
                    alignSelf: 'center',
                    marginTop: 25,
                  }}>
                    
                  {this.state.img.trim() == ""?  <Image
                    source={ require('../../../assets/Edit-Profile/avatar-Image.png')}
                    
                    style = {{width: 120,
                      height: 120,
                      borderRadius: 60,}}
                  /> :  <Image
                  source={{uri:"data:image/png;base64,"+this.state.img}}
                  
                  style = {{width: 120,
                    height: 120,
                    borderRadius: 60,}}
                />}
                 
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                      
                        ImagePicker.openPicker({includeBase64:true}).then(image => {
                        
                          
                            this.setState({img:image[0].data,mime: image[0].mime })
                        })
                          
                        
                      }}
                      style={{ width: 40,
                        height: 40,bottom: 0, right: 0, position: 'absolute'}}>
                      <Image
                        source={require('../../../assets/Edit-Profile/camera-icon.png')}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{width: 320, height: 50, marginTop: 10}}>
                  <InputView
                    changeTextEvent={(newValue) => {}}
                    imageSource={require('../../../assets/SignUp/user-icon.png')}
                    value={
                      this.data != null
                        ? this.data.name
                        : translate('user_name_placeholder')
                    }
                    isSecureField={false}
                    isEnable={false}
                    isFullWidth={true}
                  />
                </View>
                <View style={{height: 50, marginTop: 10}}>
                  <InputView
                    changeTextEvent={(newValue) => {}}
                    imageSource={require('../../../assets/SignUp/email-icon.png')}
                    isSecureField={false}
                    isFullWidth={true}
                    value={
                      this.data != null ? this.data.email : translate('email')
                    }
                    isEnable={false}
                  />
                </View>
                <View style={{height: 50, marginTop: 10}}>
                  <InputView
                    changeTextEvent={(newValue) => {
                      
                    }}
                    imageSource={require('../../../assets/SignUp/phone.png')}
                    isSecureField={false}
                    value={
                      this.data != null
                        ? this.data.mobile
                        : translate('mobile_number')
                    }
                    isFullWidth={true}
                    isEnable={false}
                  />
                </View>
                <View style={{height: 50, marginTop: 10}}>
                  <DropDownSelectBox
                    placeholderText={translate('user_type')}
                    selectedText={this.type}
                    imageSource={require('../../../assets/SignUp/user-type.png')}
                    isFullWidth={true}
                    disabled={true}
                  />
                </View>
                <View style={{height: 50, marginTop: 10}}>
                  <DropDownSelectBox
                    placeholderText={translate('dob')}
                    imageSource={require('../../../assets/SignUp/dob.png')}
                    isFullWidth={true}
                    selectedText={this.state.date_of_birth}
                    onPressEvent={() => {
                      this.calendar.open();
                    }}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <View
                    style={{
                      width: 320,
                    }}>
                    <View
                      style={{
                        height: 50,
                        width: 320,
                      }}>
                      <DropDownSelectBox
                        placeholderText={translate('country')}
                        imageSource={require('../../../assets/SignUp/country.png')}
                        isFullWidth={true}
                        selectedText={this.state.selectedCountry}
                        onPressEvent={() => {
                          this.getCountries();
                        }}
                      />
                    </View>
                  </View>
                </View>

                <View style={{marginTop: 10}}>
                  <View
                    style={{
                      width: 320,
                    }}>
                    <View
                      style={{
                        height: 50,
                        width: 320,
                      }}>
                      <DropDownSelectBox
                        placeholderText={translate('region')}
                        imageSource={require('../../../assets/SignUp/region.png')}
                        isFullWidth={true}
                        selectedText={this.state.selectedRegion}
                        onPressEvent={() => {
                          this.getRegionByCountry();
                        }}
                      />
                    </View>
                  </View>
                </View>

                <View style={{marginTop: 10}}>
                  <View
                    style={{
                      width: 320,
                    }}>
                    <View
                      style={{
                        height: 50,
                        width: 320,
                      }}>
                      <DropDownSelectBox
                        placeholderText={translate('city')}
                        imageSource={require('../../../assets/SignUp/city.png')}
                        isFullWidth={true}
                        selectedText={this.state.selectedCity}
                        onPressEvent={() => {
                          this.getCityByRegion();
                        }}
                      />
                    </View>
                  </View>
                  {this.data.user_type == 2 ? (
                    <View>
                      <View style={{height: 50, width: 320, marginTop: 10}}>
                        <DropDownSelectBox
                          placeholderText={translate('university')}
                          imageSource={require('../../../assets/SignUp/university.png')}
                          isFullWidth={true}
                          selectedText={this.state.selectedUniversity}
                          onPressEvent={() => {
                            if (this.state.selectedCountryId == 0) {
                              alert('Please select country');
                            } else {
                              this.getUniversities();
                            }
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: 50,
                          width: 320,
                          marginTop: 10,
                          flexDirection: 'row',
                        }}>
                        <DropDownSelectBox
                          placeholderText={translate('college')}
                          imageSource={require('../../../assets/SignUp/graduate.png')}
                          isFullWidth={true}
                          selectedText={this.state.selectedCollege}
                          onPressEvent={() => {
                            if (this.state.selectedUniversityId == 0) {
                              alert('Please select university');
                            } else {
                              this.getCollegeByUniversities();
                            }
                          }}
                        />
                      </View>
                    </View>
                  ) : null}

                  {this.data.user_type == 3 ? (
                    <View style={{marginTop: 10}}>
                      <View style={{height: 50, width: 320}}>
                        <InputView
                          changeTextEvent={(newValue) => {
                            this.setState({iqamaNo: newValue});
                          }}
                          imageSource={require('../../../assets/SignUp/university.png')}
                          placeholderText={translate('Iqama_number')}
                          style={{width: 150}}
                          isFullWidth={true}
                        />
                      </View>
                    </View>
                  ) : null}
                  {this.data.user_type == 4 ? (
                    <View style={{marginTop: 10}}>
                      <View style={{height: 50, width: 320}}>
                        <InputView
                          changeTextEvent={(newValue) => {
                            this.setState({crNo: newValue});
                          }}
                          imageSource={require('../../../assets/SignUp/university.png')}
                          placeholderText={translate('cr_no')}
                          style={{width: 150}}
                          isFullWidth={true}
                        />
                      </View>
                    </View>
                  ) : null}
                </View>
              </View>
              <RBSheet
                ref={(ref) => {
                  this.countriesSheet = ref;
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
                        }}
                        onPress={() => {
                          this.setState({selectedCountry: item.name});
                          this.setState({selectedCountryId: item.id});
                          this.countriesSheet.close();
                        }}>
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'stretch',
                          }}>
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
              <RBSheet
                ref={(ref) => {
                  this.regionSheet = ref;
                }}>
                <FlatList
                  data={this.state.regions}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        style={{
                          height: 50,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderBottomWidth: 1,
                          borderColor: '#D3D3D3',
                        }}
                        onPress={() => {
                          this.setState({selectedRegion: item.region});
                          this.setState({selectedRegionId: item.id});
                          this.regionSheet.close();
                        }}>
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'stretch',
                          }}>
                          <Text
                            style={{
                              color: 'black',
                              fontWeight: '500',
                              alignSelf: 'center',
                              fontSize: 18,
                            }}>
                            {item.region}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item) => item.id}
                />
              </RBSheet>
              <RBSheet
                ref={(ref) => {
                  this.citySheet = ref;
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
                        }}
                        onPress={() => {
                          this.setState({selectedCity: item.city});
                          this.setState({selectedCityId: item.id});
                          this.citySheet.close();
                        }}>
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'stretch',
                          }}>
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

              <RBSheet
                ref={(ref) => {
                  this.calendar = ref;
                }}
                height={400}>
                <View
                  style={{
                    height: 400,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F2F2F2',
                  }}>
                  <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={false}
                    minDate={new Date(1947, 11, 31)}
                    maxDate={new Date()}
                    todayBackgroundColor="#f2e6ff"
                    selectedDayColor="#7300e6"
                    selectedDayTextColor="#FFFFFF"
                    scrollable={true}
                    onDateChange={(STATE_DATE, END_DATE) => {
                      var str = `${STATE_DATE.toObject().years}-${
                        STATE_DATE.toObject().months + 1
                      }-${STATE_DATE.toObject().date}`;
                      this.setState({date_of_birth: str});
                      this.calendar.close();
                    }}
                  />
                </View>
              </RBSheet>
              <RBSheet
              ref={(ref) => {
                this.universitySheet = ref;
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
                      
                      }}
                      onPress={() => {
                        this.setState({selectedUniversity: item.name});
                        this.setState({selectedUniversityId: item.id});
                        this.universitySheet.close();
                      }}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'stretch',
                        }}>
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
            <RBSheet
              ref={(ref) => {
                this.collegeSheet = ref;
              }}>
              <FlatList
                data={this.state.colleges}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#D3D3D3',
                   
                      }}
                      onPress={() => {
                        this.setState({selectedCollege: item.college});
                        this.setState({selectedCollegeId: item.id});
                        this.collegeSheet.close();
                      }}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'stretch',
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: '500',
                            alignSelf: 'center',
                            fontSize: 18,
                          }}>
                          {item.college}
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
          <View
            style={{
              backgroundColor: '#FFFFFF',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              paddingBottom: 10,
              alignitems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: '80%',
                width: '90%',
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
              }}>
              <View style={{width: '48%', height: '100%'}}>
                <BorderButton
                  clickEvent={() => {this.props.navigation.goBack()}}
                  name={translate('cancel')}
                />
              </View>
              <View style={{width: '48%', height: '100%'}}>
                <ButtonView
                  clickEvent={() => {
                    this.updateProfile()
                  }}
                  name={translate('save')}
                />
              </View>
            </View>
            {this.state.isLoading ? <Loader loading={this.state.loading} /> : null}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
