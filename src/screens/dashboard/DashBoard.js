// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import 'react-native-gesture-handler';

import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import SidebarMenu from './SideBarMenu';

import AsyncStorage from '@react-native-community/async-storage';
import ApiService from '../../network/ApiService';
import MainScreenStack ,{AdScreenStack} from "./MainStack";
import { connect } from 'react-redux';

import * as Action from '../../redux/ReduxAction';

import {bindActionCreators} from 'redux';

const Drawer = createDrawerNavigator();



 class DashBoard extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      header: null,
    };
  };

  constructor(props) {
    super(props);
    this.state = {userdata: {}, 
     url: 'https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg',
    isLoading: false};
  }

  componentDidMount() {
    AsyncStorage.getItem('userdata').then((value) => {
      this.setState({userdata: JSON.parse(value)});
      if (!value || 0 != value.length) {
        let user_id = JSON.parse(value).user_id;
        this.getMyProfileData(user_id);
      }
    });
  }

  getMyProfileData(userId) {
    this.setState({isLoading: true});
    ApiService.get(`user-profile?user_id=${userId}`)
      .then((response) => {
        let url= (response.data.image!=null && response.data.image.url.length!=0)?response.data.image.url :'https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg'

        this.setState({url: url});
 
        this.setState({isLoading: false});
      })
      .catch((error) => {
        this.setState({isLoading: false});
        alert(error.data.message);
      });
  }
  render() {
    if(this.state.url != this.props.state.url)  this.setState({url:this.props.state.url})

    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#0A878A',
            inactiveTintColor: '#9EA6BE',
            labelStyle: {marginHorizontal: 1},
            iconStyle: {margin: 3},
          }}
          drawerContent={(props) => (
            <SidebarMenu
              props={props}
              data={this.state.userdata}
              icon= {this.state.url}
              logout={() =>
                AsyncStorage.removeItem('userdata').then(() =>
                  this.props.navigation.replace('login'),
                )
              }
            />
          )}>
          <Drawer.Screen name="MainScreenStack" component={MainScreenStack} />
          <Drawer.Screen name="AdsScreenStack" component={AdScreenStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}




export default connect((state) => (
  {
    state: state.updateProfile,
  }),(dispatch) => ({
    actions: bindActionCreators(Action, dispatch)
  }))(DashBoard);

const TabIcon = ({src, focused}) => {
  return (
    <Image
      source={src}
      style={{
        width: 28,
        height: 18,
        tintColor: focused ? '#FFA733' : '#9EA6BE',
        resizeMode: 'contain',
      }}
    />
  );
};
