// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import  React, {useState} from 'react';
import {
 
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import WebView from 'react-native-webview'

import {Card, Paragraph} from 'react-native-paper';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import ApiService from '../../../../network/ApiService';
import Loader from '../../../Loader';
import {translate} from '../../../../util/TranslationUtils';
const profileData = {
  name: 'Rahul Pandey',
  src:
    'https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg',
  ads: 100,
  follower: 40,
  following: 100,
  profileMsg:
    'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
};
import BookDetailView from '../../../../../components/BookDetailView';

const UserCardHeader = ({profile,...props}) => {
  let imageURL = profile.image != null && profile.image.url != null ? profile.image.url: ""
  return (
    <Card style={{margin: 14, elevation: 10}}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Image
            style={[
              {backgroundColor: 'yellow', alignSelf: 'center', marginTop: 5},
              styles.image,
            ]}
            source={{uri: imageURL}}
          />
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
              marginTop: 20,
              height: 1,
              marginEnd: 28,
              marginStart: 28,
              borderBottomColor: '#E2E2E2',
              borderBottomWidth: 1,
            }}
          />
          
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              justifyContent: 'space-evenly',
              marginTop: 12,
              marginBottom: 12,
            }}>
          
            <TouchableOpacity style={{height:50,width:'35%',backgroundColor:'white',borderRadius:5,justifyContent:'center',borderColor:'#0A878A',borderWidth:1}}>
            <Text style={{color:'#151522',fontSize:17,textAlign:'center',fontWeight:'bold'}}>
            Add Friend
            </Text>
            </TouchableOpacity>
            </View>
        </View>
      </Card>

  
  );

};

const CONTACT = ({data}) => {
  
   var user = data
   var city = user.city.city != null ? user.city.city+", ": ""
   var country = user.country.name != null ? user.country.name: ""
   var fullAddress = `${city+country}`
  return (
    <View style={{flex: 1, background: 'white', margin: 16}}>
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 14, lineHeight: 19, fontWeight: '400', color: '#9EA6BE'}}>
        {translate('name')}
        </Text>
        <Text style={{fontSize: 15, lineHeight: 19,fontWeight: 'bold', color: '#2C2948'}}>
            {user.name != null ? user.name : "N/A"}
        </Text>
      </View>
      <View style={{width: '100%',marginTop: 10}}>
        <Text style={{fontSize: 14, lineHeight: 19, fontWeight: '400', color: '#9EA6BE'}}>
        {translate('email')}
        </Text>
        <Text style={{fontSize: 15, lineHeight: 19,fontWeight: 'bold', color: '#2C2948'}}>
            {user.email != null ? user.email : "N/A"}
        </Text>
      </View>
      <View style={{width: '100%',marginTop: 10}}>
        <Text style={{fontSize: 14, lineHeight: 19, fontWeight: '400', color: '#9EA6BE'}}>
        {translate('mobile')}
        </Text>
        <Text style={{fontSize: 15, lineHeight: 19,fontWeight: 'bold', color: '#2C2948'}}>
            {user.mobile != null? user.mobile: "N/A"}
        </Text>
      </View>
      <View style={{width: '100%',marginTop: 10}}>
        <Text style={{fontSize: 14, lineHeight: 19, fontWeight: '400', color: '#9EA6BE'}}>
        {translate('address')}
        </Text>
        <Text style={{fontSize: 15, lineHeight: 19,fontWeight: 'bold', color: '#2C2948'}}>
            {fullAddress}
        </Text>
      </View>
    </View>
  );
}
   
  const ADS = ({data}) => (
    <View style={{flex:1,margin:16}} >
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      numColumns={2}
      renderItem={({item}) => (
        <BookDetailView book={item} />
      )}
    />
    </View>
  );
  const STUDY = ({data}) => {
    var user = data
    return (
      <View style={{flex: 1, background: 'white', margin: 16}}>
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 14, lineHeight: 19, fontWeight: '400', color: '#9EA6BE'}}>
          {translate('college')}
        </Text>
        <Text style={{fontSize: 15, lineHeight: 19,fontWeight: 'bold', color: '#2C2948'}}>
            {user.college != null && user.college.region != null ? user.college.region: "N/A"}
        </Text>
      </View>
      <View style={{width: '100%',marginTop: 10}}>
        <Text style={{fontSize: 14, lineHeight: 19, fontWeight: '400', color: '#9EA6BE'}}>
        {translate('university')}
        </Text>
        <Text style={{fontSize: 15, lineHeight: 19,fontWeight: 'bold', color: '#2C2948'}}>
            {user.university != null && user.university.name != null? user.university.name: "N/A"}
        </Text>
      </View>
      {user.iqama_number != null ?(
      <View style={{width: '100%',marginTop: 10}}>
        <Text style={{fontSize: 14, lineHeight: 19, fontWeight: '400', color: '#9EA6BE'}}>
          {translate('Iqama_number')}
        </Text>
        <Text style={{fontSize: 15, lineHeight: 19,fontWeight: 'bold', color: '#2C2948'}}>
            {user.iqama_number}
        </Text>
      </View>
      ): null}
    </View>
  )
}
   
  const ABOUT = ({data}) => (
    <View style={{flex:1,margin:16}} >
        <Text style={{fontSize:15 ,lineHeight:19}}> {data}</Text>
      </View>
  );


  


  
const initialLayout = { width: Dimensions.get('window').width };
export default class ProfileDetails extends React.Component {

    
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'contact', title: 'CONTACT'  },
        { key: 'ads', title: 'ADS'},
        { key: 'study', title: 'STUDY' },
      ],
      isLoading: false,
      userData: {}
    };
    }


  _handleIndexChange = index => this.setState({ index });
     renderTabBar = props => (
   
      <TabBar
        {...props}
        
        renderLabel={({ route, focused, color }) => (
          <Text style={{ color:'black', margin: 8 }}>
            {route.title}
          </Text>
        )}
  
      
        indicatorStyle={{ backgroundColor: '#F78A3A'}}
        style={{ backgroundColor: 'white' }}
      />
    );
    renderScene = ({ route }) => {
  
      switch (route.key) {
        case 'contact':
          return <CONTACT data={this.props.route.params.user}  />;
        case 'ads':
          return <ADS data={this.props.route.params.ads} />;
          case 'study':
          return <STUDY data={this.props.route.params.user}  />;
        case 'about':
          return <ABOUT data={this.props.route.params.user.about}/>;
        default:
          return null;
      }
    };

  render() {
    const data =  this.props.route.params.user
    return (
      <SafeAreaView style={{flex: 1,flexDirection:'column'}}>
           <View style={[styles.parent, {position: 'absolute'}]} />
           <View style={{flex:1}}>
       <UserCardHeader profile = {data} {...this.props}/>
       <TabView 
     navigationState={this.state}
     renderScene={this.renderScene}
     renderTabBar={this.renderTabBar}
     onIndexChange={this._handleIndexChange}
    />
      </View>
      {this.state.isLoading ? <Loader loading={this.state.loading} /> : null}
      </SafeAreaView>
    );
  }

  getProfileDetail = () => {
    this.setState({isLoading: true});
    ApiService.get(`user-profile?user_id=${this.props.route.params.user.user_id}`)
      .then((response) => {
        this.setState({isLoading: false, userData: response.data});
      })
      .catch((error) => {
        this.setState({isLoading: false});
        alert(error.data.message);
      });
  };

  componentDidMount() {
    this.getProfileDetail();
  }

  componentWillUnmount() {

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
    height: 200,
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    backgroundColor: '#0A878A',
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
});
