import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DisplayBookInformation from '../../../../../components/DisplayBookInformation';
import InputViewWithOutImage from '../../../../../components/InputViewWithOutImage';
import {translate} from '../../../../util/TranslationUtils';
import ButtonView from '../../../../../components/ButtonView';
import BorderButton from '../../../../../components/BorderButton';
import ProfileView from '../../../../../components/ProfileView';
import AdPostedAtView from '../../../../../components/AdPostedAtView';
import CommentView from '../../../../../components/CommentView';
import ButtonViewWithImage from '../../../../../components/ButtonViewWithImage';

export default class BookDetailScreen extends React.Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
    
        return {
            header: () => null
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
                <View style={{flex: 1}}>
                    <View style={{width: '100%'}}>
                        <ScrollView style={{}}>
                        <View style={{height: 280, width: "100%"}}>
                            <Image style={{width: "100%", height: 280}}
                                source={require('../../../../../assets/book-image.png')} 
                            />
                            <TouchableOpacity style={{width: 22, height: 22, position: "absolute", marginLeft: 15, marginTop: 55}} 
                                onPress={() =>{
                                    this.props.navigation.pop();
                                }}
                            >
                            <Image 
                                resizeMode="contain"
                                source={require('../../../../../assets/book/back-icon.png')}
                            />
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: 22, height: 22, position: "absolute", marginTop: 55, marginLeft: 370}}>
                            <Image  
                                resizeMode="contain"
                                source={require('../../../../../assets/book/share-icon.png')}
                            />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: "100%"}}>
                            <Text style={{marginLeft: 15, marginTop: 15, marginRight: 15, fontSize: 20, fontStyle: "normal", color: "#000"}}>
                                Medicine book on Internal Medicine used one year
                            </Text>
                            <Text style={{marginLeft: 15, marginTop: 15, marginRight: 15, fontSize: 20, fontStyle: "normal", color: "#0A878A"}}>
                                AED 140
                            </Text>
                        </View>
                        <View style={{width: "100%", height: 6, backgroundColor: "#F4F7FC", marginTop: 15}}></View>
                        <View style={{width: "100%", height: 115, justifyContent: 'space-between', flexDirection: "column"}}>
                                <View style={{width: "80%", height: 40, justifyContent: 'space-between', flexDirection: "row", marginTop: 15}}>
                                    <View style={{width: "25%", marginLeft: 15}}>
                                        <DisplayBookInformation 
                                            heading={translate("city")}
                                            headingValue="Jeddah"
                                        />
                                    </View>
                                    <View style={{width: "25%", marginLeft: 15}}>
                                        <DisplayBookInformation 
                                            heading={translate("type")}
                                            headingValue="Medical"
                                        />
                                    </View>
                                </View>
                                <View style={{width: "80%", height: 40, justifyContent: 'space-between', flexDirection: "row"}}>
                                    <View style={{width: 100, marginLeft: 15}}>
                                        <DisplayBookInformation 
                                            heading={translate("ad_number")}
                                            headingValue="9990624253"
                                        />
                                    </View>
                                    <View style={{width: "25%", marginLeft: 15}}>
                                        <DisplayBookInformation 
                                            heading={translate("status")}
                                            headingValue="Used"
                                        />
                                    </View>
                                </View>
                                <View style={{width: "80%", height: 40, justifyContent: 'space-between', flexDirection: "row", marginBottom: 15}}>
                                    <View style={{width: "25%", marginLeft: 15}}>
                                        <DisplayBookInformation 
                                            heading={translate("section")}
                                            headingValue="Books"
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{width: "100%", height: 6, backgroundColor: "#F4F7FC", marginTop: 15}}></View>
                            <View style={{width: "100%", flexDirection: "column", justifyContent: "space-between", marginTop: 15}}>
                                <Text style={{marginLeft: 15, fontSize: 20, fontStyle: "normal", color: "#000", fontWeight: "700"}}>
                                {translate('details')}
                                </Text>
                                <Text style={{marginLeft: 15, fontSize: 12, fontStyle: "normal", color: "#000", fontWeight: "500", marginTop: 15}}>
                                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts
                                </Text>
                            </View>
                            <View style={{width: "100%", height: 6, backgroundColor: "#F4F7FC", marginTop: 15}}></View>
                            <View style={{width: "100%"}}>
                                <ProfileView 
                                    clickEvent={() => {

                                    }}
                                />
                            </View>
                            <View style={{width: "100%", height: 6, backgroundColor: "#F4F7FC", marginTop: 15}}></View>
                            <View style={{width: "100%", height: 290}}>
                                <AdPostedAtView />

                            </View>
                            <View style={{width: "100%", height: 6, backgroundColor: "#F4F7FC", marginTop: 15}}></View>
                            <View style={{width: "100%"}}>
                                <CommentView
                                    clickEvent={() => {

                                    }}
                                />
                            </View>
                            <View style={{width: "100%"}}>
                                <CommentView
                                    clickEvent={() => {

                                    }}
                                />
                            </View>
                            <View style={{width: "100%", marginBottom: 80}}>
                                <CommentView
                                    clickEvent={() => {

                                    }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{width: "100%", backgroundColor: "white", position: "absolute", bottom: 0}}>
                        <View style={{height: 80, width: "100%"}}>
                            <View style={{width: "95%", flexDirection: 'row', justifyContent: 'space-between', height: "100%", alignSelf: "center"}}>
                                <View style={{width: "42%", height: "100%"}}>
                                    <ButtonViewWithImage 
                                        name={translate('contact')}
                                        clickEvent={() => {
                                        }}
                                        imgSource={require('../../../../../assets/book/phone-icon.png')}
                                        isBackground={true}
                                    />    
                                </View>
                                <View style={{width: "52%", height: "100%"}}>
                                    <ButtonViewWithImage 
                                        name={translate('add_to_favourites')}
                                        clickEvent={() => {
                                        }}
                                        imgSource={require('../../../../../assets/book/heart-icon.png')}
                                        isBackground={false}
                                    /> 
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

});