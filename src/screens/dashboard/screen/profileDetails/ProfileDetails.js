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


const UserCardHeader = ({profile,...props}) => {
  return (
  
    <Card style={{margin: 14, elevation: 10}}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Image
            style={[
              {backgroundColor: 'yellow', alignSelf: 'center', marginTop: 5},
              styles.image,
            ]}
            source={{uri: profile.src}}
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

const CONTACT = ({data}) => (
    <View style={ {flex:1 ,justifyContent:'center', margin:16}} >
      <WebView source = {{uri: data}} />
      </View>
  );
   
  const ADS = ({data}) => (
    <View style={{flex:1,margin:16}} >
    <Text style={{fontSize:15 ,lineHeight:19}}> {data}</Text>
    </View>
  );
  const STUDY = ({data}) => (
    <View style={{flex:1,margin:16}} >
        <Text style={{fontSize:15 ,lineHeight:19}}> {data}</Text>
      </View>
  );
   
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
        { key: 'about', title: 'ABOUT'},
      ],
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
          return <CONTACT data={this.props.route.params.user.contact}  />;
        case 'ads':
          return <ADS data={this.props.route.params.user.ads} />;
          case 'study':
          return <STUDY data={this.props.route.params.user.study}  />;
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
