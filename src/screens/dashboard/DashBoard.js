// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image,StatusBar} from 'react-native';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Offers from './screen/Offers';
import Friends from './screen/Friends';
import Services from './screen/Services';
import AdsScreen from './screen/Ads';
import ExploreScreen from './screen/ExploreScreen';
import SettingScreen from './screen/SettingScreen';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#0A878A" translucent = {true}/>

      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require('../../../assets/tabs/menu.png')}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};


const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Offers':
      return 'Offers';
      case 'Friends':
        return 'Friends';
    case 'Services':
      return 'Services';
    case 'Ads':
      return 'Ads';
  }
};

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Offers"
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#9EA6BE',
         
        
        style: {
          backgroundColor: '#ffffff',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="Offer"
        component={Offers}
        options={{
          tabBarLabel: 'Offer',
          tabBarIcon: ({ color, focused }) => (
 
             <Image source={require('../../../assets/tabs/offers.png')} style={{width:28,height:18,tintColor:focused? "#FFA733" :"#9EA6BE", resizeMode: "contain"}}></Image>
           
           ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: 'Friends',
           tabBarIcon: ({ color, focused }) => (
            <Image source={require('../../../assets/tabs/friends.png')} style={{width:28,height:18,tintColor:focused? "#FFA733" :"#9EA6BE", resizeMode: "contain"}}></Image>
            ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Services',
           tabBarIcon: ({ color, focused }) => (
            <Image source={require('../../../assets/tabs/services.png')} style={{width:28,height:18,tintColor:focused? "#FFA733" :"#9EA6BE", resizeMode: "contain"}}></Image>
            ),
        }}
      />
      <Tab.Screen
        name="Ads"
        component={AdsScreen}
        options={{
          tabBarLabel: 'Ads',
         tabBarIcon: ({ color, focused }) => (
          <Image source={require('../../../assets/tabs/ads.png')} style={{width:28,height:18,tintColor:focused? "#FFA733" :"#9EA6BE", resizeMode: "contain"}}></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Offers">
      <Stack.Screen
        name="BottomTabStack"
        component={BottomTabStack}
        options={({route}) => ({
          
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#0A878A', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#0A878A', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: 'Setting', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

export default class DashBoard extends React.Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
        header: null
    };
};
  render() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{drawerLabel: 'Home Screen Option'}}
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SettingScreenStack"
          options={{drawerLabel: 'Setting Screen Option'}}
          component={SettingScreenStack}
        />
       
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}};


