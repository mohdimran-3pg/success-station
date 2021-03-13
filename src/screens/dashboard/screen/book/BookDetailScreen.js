import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import DisplayBookInformation from '../../../../../components/DisplayBookInformation';
import {translate} from '../../../../util/TranslationUtils';
import ProfileView from '../../../../../components/ProfileView';
import AdPostedAtView from '../../../../../components/AdPostedAtView';
import CommentView from '../../../../../components/CommentView';
import ButtonViewWithImage from '../../../../../components/ButtonViewWithImage';
import ApiService from '../../../../network/ApiService';
import Loader from '../../../Loader';



export default class BookDetailScreen extends React.Component {

    getBookDetail = () => {
        this.setState({isLoading: true});
        ApiService.get(`listings?id=${this.props.route.params.data.bookId}`)
        .then((response) => {
            this.setState({isLoading: false});
            console.log("Book Data is ::::: ",response.data.category.category);
            console.log("Image is this :::: ", response.data.media[0].url)
            this.setState({book: response.data})
        })
        .catch((error) => {
            this.setState({isLoading: false});
        console.log("Error of Book is :::", error)
        });
    }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
      
        return {
          header: () => null
            };
        };

    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: false,
            book: {}
        }
        
    }

    componentDidMount() {
        this.getBookDetail()
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
                            {this.state.book.media != null?
                            (<Image style={{width: "100%", height: 280}}
                            source={{ uri: this.state.book.media[0].url }} 
                                 />) : (
                            <Image style={{width: "100%", height: 280}}
                                source={require('../../../../../assets/book-image.png')} 
                            />)
    }
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
                            <TouchableOpacity style={{width: 22, height: 22, position: 'absolute', marginTop: 55, right:10}}>
                            <Image  
                                resizeMode="contain"
                                source={require('../../../../../assets/book/share-icon.png')}
                            />
                            </TouchableOpacity>
                        </View>
                        <View style={{width: "100%"}}>
                            <Text style={{marginLeft: 15, marginTop: 15, marginRight: 15, fontSize: 20, fontStyle: "normal", color: "#000"}}>
                                {this.state.book != null? this.state.book.title: "N/A"}
                            </Text>
                            <Text style={{marginLeft: 15, marginTop: 15, marginRight: 15, fontSize: 20, fontStyle: "normal", color: "#0A878A"}}>
                                AED {this.state.book.price}
                            </Text>
                        </View>
                        <View style={{width: "100%", height: 6, backgroundColor: "#F4F7FC", marginTop: 15}}></View>
                        <View style={{width: "100%", height: 115, justifyContent: 'space-between', flexDirection: "column"}}>
                                <View style={{width: "80%", height: 40, justifyContent: 'space-between', flexDirection: "row", marginTop: 15}}>
                                    <View style={{width: "25%", marginLeft: 15}}>
                                        <DisplayBookInformation 
                                            heading={translate("city")}
                                            headingValue={this.state.book.cities != null && this.state.book.cities.length > 0 ? this.state.book.cities[0].city: "N/A"}
                                        />
                                    </View>
                                    <View style={{width: "25%", marginLeft: 15}}>
                                        <DisplayBookInformation 
                                            heading={translate("type")}
                                            headingValue={this.state.book.category != null ? this.state.book.category.category: "N/A"}
                                        />
                                    </View>
                                </View>
                                <View style={{width: "80%", height: 40, justifyContent: 'space-between', flexDirection: "row"}}>
                                    <View style={{width: 100, marginLeft: 15}}>
                                        <DisplayBookInformation 
                                            heading={translate("ad_number")}
                                            headingValue={this.state.book.phone != null ? this.state.book.phone: "N/A"}
                                        />
                                    </View>
                                    <View style={{width: "25%", marginLeft: 15}}>
                                        <DisplayBookInformation 
                                            heading={translate("status")}
                                            headingValue={this.state.book.status != null? this.state.book.status: "N/A"}
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
                                    {this.state.book.description}
                                </Text>
                            </View>
                            <View style={{width: "100%", height: 6, backgroundColor: "#F4F7FC", marginTop: 15}}></View>
                            <View style={{width: "100%"}}>
                                <ProfileView 
                                    data = {{name: this.state.book.contact_name}}
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
                {this.state.isLoading ?   <Loader
                loading={this.state.loading} /> :null}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

});