// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
  FlatList
} from 'react-native';

import {Card, Paragraph} from 'react-native-paper';
import DynamicTabView from 'react-native-dynamic-tab-view';
import { render } from 'react-dom';
import ApiService from '../../../../network/ApiService';
import Loader from '../../../Loader';

const UserCardHeader = ({profile, ...props}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'white',
        }}>
        <Text
          style={{
            color: '#151522',
            fontSize: 20,
            alignSelf: 'center',
            marginTop: 25,
            fontWeight: 'bold',
          }}>
          {profile.name}
        </Text>
        <Card.Content>
          <Paragraph
            style={{
              fontSize: 13,
              color: '#666666',
              lineHeight: 18,
              textAlign: 'center',
            }}>
            {profile.profileMsg}
          </Paragraph>
        </Card.Content>
      
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            justifyContent: 'space-evenly',
            marginTop: 10,
            marginBottom: 24,
          }}>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={styles.countTextStye}>{profile.follower}</Text>
            <Text style={styles.titleCountTextStye}>Follower</Text>
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={styles.countTextStye}>{profile.following}</Text>
            <Text style={styles.titleCountTextStye}>Following</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            justifyContent: 'space-evenly',
            marginTop: 6,
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: '35%',
              backgroundColor: '#F78A3A',
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Follow
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const CONTACTS = ({data}) => {
    var user = data
    var city = user.city.city != null ? user.city.city+", ": ""
    var country = user.country.name != null ? user.country.name: ""
    var fullAddress = `${city+country}`
    var isHttps = user.website.includes('https') || user.website.includes('http') 
    var link = isHttps ? user.website :'https://'+user.website

 return(
 <View style={{flex: 1, background: 'white', margin: 16}}>
    <Text style={{fontSize: 20, lineHeight: 19}}>
      {`Name : `+ user.contact_name}
    </Text>
    <Text style={{fontSize: 20, lineHeight: 19 ,marginTop:4}}>
      {`Email : `+ user.email}
    </Text>
    <Text style={{fontSize: 20, lineHeight: 19,marginTop:4}}>
      {`Mobile : `+ user.mobile_number}
    </Text>
    <Text style={{fontSize: 20, lineHeight: 19,marginTop:4}}>
      {`Phone : `+ user.phone_number}
    </Text>
    <Text style={{fontSize: 20, lineHeight: 19,marginTop:4}}>
      {`Addresss : `+ fullAddress}
    </Text>
<TouchableOpacity onPress={() => Linking.openURL(link)}>
    <Text style={{fontSize: 20, lineHeight: 19,marginTop:4,color:'blue'}}>
      {`Website : `+ user.website}
    </Text>
    </TouchableOpacity>
  </View>
 )
};

const BookCard = ({book}) => {

  return (
    <TouchableOpacity
      style={{
        width:'47%',margin:'1.5%', 
        
        borderColor: '#00000030',
        borderWidth: 1,
        borderRadius: 4,
        
      }}
      onPress={() => props.navigation.navigate('ServiceProfileScreen', {book})}>
      <View style={{}}>
        <View style={{width: '100%', height: 140}}>
          <Image
          
            
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{width: '100%'}}>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: '500',
                color: '#000000',
                marginTop: 10,
              }}>
             
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: '500',
                color: '#000000',
                marginTop: 5,
                marginBottom:5
              }}>
             
            </Text>
           
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PRODUCTS = ({data}) =>{
  return(
  <View style={{flex: 1, background: 'white', margin: 16}}>
     <View style={{flex: 1}}>
              <FlatList
                
                keyExtractor={(item) => item.id}
                data={data}
                numColumns={2}
                renderItem={({item}) => (
                  <BookCard book={item} />
                )}
              />
            </View>
  </View>
)
};

const DESCRIPTION = ({data}) => (
  
  <View style={{flex: 1, background: 'white', margin: 16}}>
    <Text style={{fontSize: 20, lineHeight: 19}}>
      {data.description}
     
    </Text>
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};
export default class ServiceDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isLoading:false,
      products : []
    };
  

    this.data = [
      {key: '1', title: 'CONTACTS'},
      {key: '4', title: 'PRODUCTS'},
      {key: '5', title: 'DESCRIPTION'},
    ];
  }

  getServiceList = (id) => {

    
      let path = `listings?user_id=${id}`;
      this.setState({isLoading: true});
    ApiService.get(path)
      .then((response) => {
        this.setState({products: response.data})
        
        this.setState({isLoading: false});
      })
      .catch((error) => {
        this.setState({isLoading: false});
        alert(error.data);
      });
  };
  componentDidMount(){
    this.getServiceList(this.props.route.params.book.user_name_id)
  }
  

  onChangeTab = (index) => {
    console.log("dkdldj",index)
  };
  _renderScene = (item, index) => {
  console.log("hhhhehehe",this.state.products,item)
    switch (item['key']) {
      case '1':
        return <CONTACTS data={this.props.route.params.book} />;
      case '4':
        return <PRODUCTS data={this.state.products} />;
      case '5':
        return <DESCRIPTION data={this.props.route.params.book} />;
      default:
        return null;
    }
  };

  render() {
    const data = this.props.route.params.book;
    return (
      <SafeAreaView
        style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
        <View style={[styles.parent]}>
          <Image
            style={[styles.parent, {}]}
            source={require('../../../../../assets/service-bg.png')}
          />
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Image
            style={[
              {backgroundColor: 'yellow', alignSelf: 'center', marginTop: -40},
              styles.image,
            ]}
            source={{uri: data.image[0].url}}
          />
          <UserCardHeader profile={data} {...this.props} />
          {this.state.isLoading ? null
             
           :   <DynamicTabView
          data={this.data}
          renderTab={this._renderScene}
          defaultIndex={this.state.index}
          containerStyle={styles.container}
          headerBackgroundColor={'white'}
          headerTextStyle={styles.headerText}
          onChangeTab={this.onChangeTab}
          headerUnderlayColor={'#F78A3A'}
        />}
        
        </View>
        <View
          style={{
            position: 'absolute',
            left: 15,
            justifyContent: 'center',
            top: 45,
            flex: 1,
            flexDirection: 'row',
            alignItems:'center'
          }}>
          <TouchableOpacity
            style={{
              width: 28,
              height: 28,
              flex:.6
            }}
            onPress={() => {
              this.props.navigation.pop();
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../../../assets/book/back-icon.png')}
            />
          </TouchableOpacity>
          <View style={{flex:1,}}>
          <Text
            style={{
              color: 'white',
             
              fontSize: 26,
            }}>
            Profile
          </Text>
          </View>
          {this.state.isLoading ? (
            <Loader loading={this.state.loading} />
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    overflow: 'hidden',
  },
  parent: {
    width: '100%',
    height: 200,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    borderBottomLeftRadius: 10,
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],

    backgroundColor: '#0A878A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: Platform.OS === 'iOS' ? 20 : 0,
  },

  FlatList_Item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  header_footer_style: {
    width: '100%',
    height: 44,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21,
  },
  countTextStye: {
    color: '#151522',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleCountTextStye: {
    color: '#666666',
    fontSize: 13,
    textAlign: 'center',
  },
  cardImageItem: {
    width: 'auto',
    height: 'auto',
    aspectRatio: 16 / 9,
  },
  container: {
    flex: 1,
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
  },
});
