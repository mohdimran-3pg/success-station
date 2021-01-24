

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,TouchableOpacity,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {adsIcon,userAgreementIcon,profileIcon,privacyIcon,contactIcon} from './../../util/ImageConstant'
import {drawerIconStyle} from './../../styles/CommonStyleSheet'

const BASE_PATH =
'https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg';


const user ={name:"Rahul",email:"rahul@gmal.com",src:BASE_PATH}
const DrawerProfile = (data) => {
    return (
        <View style = {{flexDirection:'column',height : 142 ,marginTop : 24}}>
            <Image source={require('./../../../assets/drawer/edit.png')} style = {{width:15,height:15, alignSelf: 'flex-end',marginEnd: 25,marginTop:15}}/>
        <View style = {{flexDirection:'row',  marginTop: 20,marginStart: 20}}>
            <Image source={{uri : user.src}}  style = {styles.image}/>
            <View style = {{flexDirection:'column',marginStart:20,justifyContent: 'center'}}>
                <Text style ={styles.name} >{user.name}</Text>
                <Text style ={styles.email}>{user.email}</Text>
            </View>
        </View>

        <View style = {{marginTop:30, height:1, borderBottomColor: '#E2E2E2',borderBottomWidth: 1,}}/>

        </View>
    )
}

const LinkMenuItem = ({title, src,link,}) => {
  return (
    <TouchableOpacity
      style={styles.customItem}
      onPress={() => {
        Linking.openURL(link);
      }}>
      <View style={drawerIconStyle.menuIconBg}>
        <Image
          source={src}
          style={drawerIconStyle.menuIcon}
        />
      </View>
      <Text style={{marginStart: 35, color: '#9EA6BE'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const SidebarMenu = (props) => {

  return (
    <View style={{flex: 1}}>
      {/*Top Large Image */}
     <DrawerProfile  data={user} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style = {{marginTop:10, height:1, borderBottomColor: '#E2E2E2',borderBottomWidth: 1,}}/>
        <Text style = {{marginTop:10, marginStart:25 ,color: '#181725',fontSize:18}}>Success Station</Text>
       
        <LinkMenuItem title="About us" src = {profileIcon} link = 'https://www.google.com' {...props} ></LinkMenuItem>

        <LinkMenuItem title="Advertise with us" src = {adsIcon} link = 'https://www.google.com' ></LinkMenuItem>

        <LinkMenuItem title="Privacy" src = {privacyIcon} link = 'https://www.google.com' ></LinkMenuItem>

        <LinkMenuItem title="Usage Agreement" src = {userAgreementIcon} link = 'https://www.google.com' ></LinkMenuItem>

        <LinkMenuItem title="Contact us" src = {contactIcon} link = 'https://www.google.com' ></LinkMenuItem>

      </DrawerContentScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    overflow: "hidden",
  
  },
  name:{
    fontSize: 20,
    color: '#181725'
  },
  email:{
    fontSize: 16,
    color: '#7C7C7C'
  },

});

export default SidebarMenu;