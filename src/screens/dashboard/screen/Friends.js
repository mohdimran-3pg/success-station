// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Searchbar ,DefaultTheme} from 'react-native-paper';
import {translate} from '../../../util/TranslationUtils';
import ApiService from '../../../network/ApiService';
import Loader from '../../Loader';
//
const UserProfile =({user,...props}) => {
  var city = user.city.city != null ? user.city.city+", ": ""
  var region = user.region.region != null ? user.region.region+", ": ""
  var country = user.country.name != null ? user.country.name: ""
  var fullAddress = `${city+region+country}`
  var url ='https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg'
  
  return (
    <TouchableOpacity style={{ width:'47%',margin:'1.5%', borderColor: "#00000030", borderWidth: 1, borderRadius: 4}} onPress = {()=> props.navigation.navigate('ProfileDetail',{  
      user: user
     })} >
        <View style={{width: 60, height: 60, borderRadius: 30, alignSelf: "center", marginTop: 21}}>
            <Image style={{width: 60, height: 60, borderRadius: 30}} 
                  source={{uri: url}}
            />
        </View>
        <View style={{height: 40, marginTop:7}}>
          <Text style={{fontSize: 15, fontWeight: "700", textAlign: "center", color: "#000000"}}>{user.name}</Text>
          <Text style={{fontSize: 15, fontWeight: "400", textAlign: "center", color: "#9EA6BE",marginTop:9}}>{user.email}</Text>
        </View>
        <View style={{width: "70%", alignSelf: "center",marginTop:15, justifyContent: "space-between", flexDirection: "row", height: 30}}>
          <Image style={{width: 24, height:24}}
              source={require('../../../../assets/friends/graduation-icon.png')}
          />
          <Text style={{fontSize: 11, fontWeight: "400",marginStart:4, color: "#9EA6BE", fontStyle: "normal"}}>{fullAddress}</Text>
        </View>
        <View style={{width: "80%", alignSelf: "center", height: 35, marginBottom: 10,marginTop:13}}>
        <View style={styles.mainView}>
            <TouchableOpacity>
            <Text style={styles.buttonStyle}>
            Add Friend
            </Text>
            </TouchableOpacity>
        </View>
        </View>
    </TouchableOpacity>
  )
}


const theme = {
  ...DefaultTheme,
 
  colors: {
    ...DefaultTheme.colors,
    primary: '#0A878A',
    accent: 'black',
    secondary:'black'
  },
};

export default class FreindsScreen extends React.Component {

  static navigationOptions = {
    header: null,
    options: {
      
    }
  };

  constructor(props) {
    super(props);
    this.state = { isLoading :false}
    this.friendList = []
  }

  getFriendList = () => {
    this.setState({isLoading: true});
    ApiService.get('users')
      .then((response) => {
        this.friendList = response.data;
        this.setState({isLoading: false});
      })
      .catch((error) => {
        this.setState({isLoading: false});
        alert(error.data);
      });
  };

  componentDidMount() {
   this.getFriendList()
  }
  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
        <View style={{flex: 1 ,marginBottom:50}}>
          <View
            style={{
              flex: 1,
            }}>
            <View style={{height: 70, width: "100%" ,backgroundColor:"rgba(10, 135, 138, 1)"}}>
            <Searchbar style ={{marginStart:10,marginEnd:10}} 
              placeholder={translate('search_book')}
              icon={()=><Image source = {require('./../../../../assets/search.png')} />}
            />
            </View>
            <View style={{ backgroundColor: "white", height: "90%"}}>
                <View style={{alignSelf: "center", height: "100%"}}>
                <FlatList

                    style = {{margin:5}}
                    keyExtractor = {(item) => item.id} 
                    data = {this.friendList}
                    numColumns={2}
                    renderItem={({item}) => <UserProfile user = {item} {...this.props}/>} 
                />
                </View>
            </View>
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

  mainView: {

      width: "100%",
      height: 35,
      borderRadius: 4,
      backgroundColor: "#FFFFFF",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "stretch",
      borderColor: "#F78A3A",
      borderWidth: 1
  },
  buttonStyle: {color: "#F78A3A", fontSize: 17, fontWeight: "700", textAlign: "center"}
});