// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image,StatusBar,StyleSheet,Text} from 'react-native';

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
import AdDetail from './screen/AdDetail';
import EnterPublisherDetail from './screen/EnterPublisherDetail';
import ExploreScreen from './screen/ExploreScreen';
import SidebarMenu from './SideBarMenu';
import SettingScreen from './screen/SettingScreen';
import {drawerIconStyle} from './../../styles/CommonStyleSheet';
import {adsIcon,notificationIcon,profileIcon,messageIcon,membershipIcon,adsTabIcon,offerTabIcon,serviceTabIcon,friendTabIcon} from './../../util/ImageConstant'



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
 
             <TabIcon src ={offerTabIcon} focused = {focused}/>
           
           ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: 'Friends',
           tabBarIcon: ({ color, focused }) => (
            <TabIcon src ={friendTabIcon} focused = {focused}/>
            ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Services',
           tabBarIcon: ({ color, focused }) => (
        <TabIcon src ={serviceTabIcon} focused = {focused}/>
            ),
        }}
      />
      <Tab.Screen
        name="Ads"
        component={AdScreenStack}
        options={{
          tabBarLabel: 'Ads',
         tabBarIcon: ({ color, focused }) => (
          <TabIcon src ={adsTabIcon} focused = {focused}/>
          ),
          headerShown: false
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

const AdScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Ad Screen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: null,
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: null,
        headerShown: false,
      }}>
      <Stack.Screen
        name="AdsScreen"
        component={AdsScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="EnterPublisherDetail"
        component={EnterPublisherDetail}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AdDetail"
        component={AdDetail}
        options={{
          headerShown: false
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
          activeTintColor: '#0A878A',
          inactiveTintColor: '#9EA6BE',
          labelStyle:{marginHorizontal :1},
          iconStyle :{margin:3}
        }} 
        drawerContent={(props) => <SidebarMenu {...props} />}>
        <Drawer.Screen
          name="HomeScreenStack"
          options={{drawerLabel: 'Profile'
          ,drawerIcon: ((focused,color,size)=>
          <DrawerIcon src={profileIcon}/>
          )}}
          
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SettingScreenStack"
          options={{drawerLabel:  'My Ads',drawerIcon: ((focused,color,size)=>
          <DrawerIcon src={adsIcon}/>
          )}}
      
          component={SettingScreenStack}
        />
          <Drawer.Screen
          name="HomeScreenStack1"
          options={{drawerLabel: 'Messages' ,drawerIcon:((focused,color,size)=>
          <DrawerIcon src={messageIcon}/>
          )}}
          
          component={HomeScreenStack}
        />
        <Drawer.Screen
          name="SettingScreenStack1"
          options={{drawerLabel: 'Membership',drawerIcon: ((focused,color,size)=>
          <DrawerIcon src={membershipIcon}/>)}}
      
          component={SettingScreenStack}
        />
          <Drawer.Screen
          name="HomeScreenStack2"
          options={{drawerLabel: 'Notifications',drawerIcon: ((focused,color,size)=>
          <DrawerIcon src={notificationIcon}/>
          )}}
          
          component={HomeScreenStack}
        />
      
       
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}};

const DrawerIcon = ({src}) => {
  return (
    <View style={drawerIconStyle.menuIconBg}>
      <Image source={src} style={drawerIconStyle.menuIcon} />
    </View>
  );
};



const TabIcon = ({src,focused}) => {
  return (
      <Image source={src} style={{width:28,height:18,tintColor:focused? "#FFA733" :"#9EA6BE", resizeMode: "contain"}} />
  );
};


