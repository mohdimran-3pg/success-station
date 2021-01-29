import React from 'react';
import {View,Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, FlatList} from 'react-native'
import InputView from '../../../components/InputView'
import DropDownSelectBox from '../../../components/DropDownSelectBox'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {translate} from ".././../util/TranslationUtils";
import BorderButton from '../../../components/BorderButton';
import ButtonView from '../../../components/ButtonView';
import RBSheet from 'react-native-raw-bottom-sheet';
import {userType} from '.././../util/DataUtil';
import CalendarPicker from "react-native-calendar-picker"

export default class EditProfileScreen extends React.Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
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
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }  

    render() {

        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'space-between'}}>
                    <View style={{height:"90%"}}>
                        <KeyboardAwareScrollView style={{backgroundColor:"#F2F2F2"}}>
                            <View style={{flex: 1, alignItems: 'stretch', backgroundColor: '#F2F2F2', justifyContent: 'space-between', width: 320, alignSelf: 'center', height: 700}}>
            
                                    <View style={{width: 120, height: 120, borderRadius: 60, backgroundColor: "red", alignSelf: "center", marginTop: 25}}>
                                        <Image
                                            source={require('../../../assets/Edit-Profile/avatar-Image.png')}
                                            resizeMode="contain" 
                                        />
                                        <View style={{width: 40, height: 40, position: "absolute", bottom: 0, right: 0}}>
                                            <TouchableOpacity onPress={() => {}} style={{bottom:0, right:0, position: "absolute"}}>
                                                <Image
                                                    source={require('../../../assets/Edit-Profile/camera-icon.png')}
                                                    resizeMode="contain" 
                                                    style={{width: 40, height: 40, position: "absolute", bottom: 0, right: 0}}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{width: 320, height:50}}>
                                        <InputView 
                                                        changeTextEvent = {(newValue) => {
                                                            console.log("Inputtting something .....", newValue);
                                                        }} 
                                                        imageSource={require('../../../assets/SignUp/user-icon.png')}
                                                        placeholderText={translate('user_name_placeholder')}
                                                        isSecureField={false}
                                                        isFullWidth={true}
                                            />
                                    </View>
                                    <View style={{height: 50}}>
                                        <InputView
                                        changeTextEvent={(newValue) => {
                                            console.log('Inputtting something .....', newValue);
                                        }}
                                        imageSource={require('../../../assets/SignUp/email-icon.png')}
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
                                        imageSource={require('../../../assets/SignUp/phone.png')}
                                        placeholderText={translate('mobile_number')}
                                        isSecureField={false}
                                        isFullWidth={true}
                                        />
                                    </View>
                                    <View style={{height: 50}}>
                                        <DropDownSelectBox
                                        placeholderText={translate('user_type')}
                                        selectedText={""}
                                        imageSource={require('../../../assets/SignUp/user-type.png')}
                                        isFullWidth={true}
                                        onPressEvent={() => {
                                            this.Standard.open();
                                        }}
                                        />
                                    </View>
                                    <View style={{height: 50}}>
                                        <DropDownSelectBox
                                                placeholderText={translate('dob')}
                                                imageSource={require('../../../assets/SignUp/dob.png')}
                                                isFullWidth={true}
                                                selectedText={""}
                                                onPressEvent={() => {
                                                    this.calendar.open();
                                                }}
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
                                            imageSource={require('../../../assets/SignUp/region.png')}
                                            placeholderText={translate('region')}
                                            isFullWidth={false}
                                        />
                                        <InputView
                                            changeTextEvent={(newValue) => {
                                            console.log('Inputtting something .....', newValue);
                                            }}
                                            imageSource={require('../../../assets/SignUp/city.png')}
                                            placeholderText={translate('city')}
                                            isFullWidth={false}
                                        />
                                    </View>
                                    <View
                                        style={{
                                        height: 50,
                                        width: 320,
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        }}>
                                        <DropDownSelectBox
                                            placeholderText={translate('country')}
                                            imageSource={require('../../../assets/SignUp/country.png')}
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
                                            imageSource={require('../../../assets/SignUp/graduate.png')}
                                            placeholderText={translate('college')}
                                            isFullWidth={false}
                                        />
                                    </View>
                                    <View style={{height: 50}}>
                                        <InputView
                                        changeTextEvent={(newValue) => {
                                            console.log('Inputtting something .....', newValue);
                                        }}
                                        imageSource={require('../../../assets/Edit-Profile/central-capital.png')}
                                        placeholderText={translate('email')}
                                        isSecureField={false}
                                        isFullWidth={true}
                                        />
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
                        </KeyboardAwareScrollView>
                    </View>
                    <View style={{backgroundColor:'#FFFFFF', height: "10%", alignitems: 'center', justifyContent: 'center'}}>
                        <View style={{height: "80%", width: "90%", backgroundColor:'#FFFFFF', flexDirection: 'row', justifyContent: 'space-between', alignSelf:'center'}}>
                            <View style={{width: "48%", height: "100%"}}>
                                <BorderButton
                                    clickEvent={() => {
                                    }}
                                    name={translate('cancel')}
                                />
                            </View>
                            <View style={{width: "48%", height: "100%"}}>
                                <ButtonView
                                    clickEvent={() => {
                                        console.log('Sign Up Clicked ......', navigation);
                                    }}
                                    name={translate('save')}
                                />
                            </View>
                        </View>                
                    </View>
                </View>
            </SafeAreaView>
        )
    }  
    
}