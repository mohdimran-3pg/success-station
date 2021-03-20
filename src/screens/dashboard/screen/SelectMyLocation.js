import React, { useState } from "react";
import {Button, View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, I18nManager, FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MapView, { Marker } from "react-native-maps";
import InputView from '../../../../components/InputView';
import {translate} from './../../../util/TranslationUtils';
import ApiService from '../../../network/ApiService';
import Loader from '../../Loader';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropDownSelectBoxWithoutImage from '../../../../components/DropDownSelectBoxWithoutImage';
import DropDownSelectBox from '../../../../components/DropDownSelectBox';
import ImagePicker from "react-native-customized-image-picker";
import ImgToBase64 from 'react-native-image-base64'
import ButtonView from '../../../../components/ButtonView';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class SelectMyLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: false}
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={{width: '100%', height: '95%'}}>
                        <GooglePlacesAutocomplete
                            placeholder='Search'
                            onPress={(data, details = null) => {
                                console.log(data, details);
                            }}
                            query={{
                                key: 'AIzaSyA-8PqMvsgO8pwbV9wD9gzFEggUhG4px6Y',
                                language: 'en',
                            }}
                            onFail={(error) => 
                                console.error("this is after fail", error)
                            }
                        />
                    </View>
                    <View style={{width: '80%', alignSelf: "center"}}>
                    <ButtonView
                        clickEvent={() => {
                            this.setState({isLoading: true});
                            ApiService.post('location-create', this.props.route.params.data)
                            .then((response) => {
                                this.setState({isLoading: false});
                                console.log("API response is:::::", response)
                            })
                            .catch((error) => {
                                this.setState({isLoading: false});
                                alert(error.data.message);
                            });
                        }}
                        name={translate('save')}
                    />
                    </View>    
                </View>
                {this.state.isLoading ?   <Loader
                loading={this.state.loading} /> :null}
            </SafeAreaView>
        )
    }
}