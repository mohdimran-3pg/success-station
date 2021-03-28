import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  adsIcon,
  userAgreementIcon,
  profileIcon,
  privacyIcon,
  contactIcon,
  notificationIcon,
  messageIcon,
  membershipIcon,
  cardLocation,
} from './../../util/ImageConstant';
import {drawerIconStyle} from './../../styles/CommonStyleSheet';
import {translate} from './../../util/TranslationUtils';
const BASE_PATH =
  'https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg';

const user = {name: 'Rahul', email: 'rahul@gmal.com', src: BASE_PATH};
const DrawerProfile = ({data, ...props}) => {


  return (
    <View style={{flexDirection: 'column', height: 142, marginTop: 24}}>
  
      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          alignSelf: 'flex-end',
          marginEnd: 25,
          marginTop: 20,
        }}
        onPress={() => {
          props.navigation.navigate('EditProfile',{data:data});
        }}>
        <Image
          source={require('./../../../assets/drawer/edit.png')}
          style={{width: 15, height: 15}}
        />
      </TouchableOpacity>

      <View style={{flexDirection: 'row', marginTop: 20, marginStart: 20}}>
        <Image source={{uri: BASE_PATH}} style={styles.image} />
        <View
          style={{
            flexDirection: 'column',
            marginStart: 20,
            justifyContent: 'center',
          }}>
          
          <Text style={styles.name} ellipsizeMode='tail' numberOfLines={1}>{data!=null ?data.name :""}</Text>
          <Text style={styles.email} ellipsizeMode='tail' numberOfLines={1}>{data!=null ?data.email:""}</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 16,
          height: 1,
          borderBottomColor: '#E2E2E2',
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

const LinkMenuItem = ({title, src, link}) => {
  return (
    <TouchableOpacity
      style={styles.customItem}
      onPress={() => {
        Linking.openURL(link);
      }}>
      <View style={drawerIconStyle.menuIconBg}>
        <Image source={src} style={drawerIconStyle.menuIcon} />
      </View>
      <Text style={{marginStart: 35, color: '#9EA6BE'}}>{title}</Text>
    </TouchableOpacity>
  );
};

 
const SidebarMenu = ({props,data,logout}) => {

  return (
    <View style={{flex: 1}}>
      {/*Top Large Image */}

      <DrawerProfile data={data} {...props} />
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={({color, size}) => <DrawerIcon src={profileIcon} />}
          label={translate('profile')}
          onPress={() => {
            props.navigation.navigate('StudentProfile');
          }}
        />
        <DrawerItem
          icon={({color, size}) => <DrawerIcon src={adsIcon} />}
          label={translate('my_ads')}
          onPress={() => {
            props.navigation.navigate('MyAdsList');
          }}
        />
        {(data!=null && data.user_type == 4) ?
        <DrawerItem 
          icon={({color, size}) => <DrawerIcon src={cardLocation} />}
          label={translate('my_location')}
          onPress={() => {
            props.navigation.navigate('MyLocation');
          }} 
        />: null}

        <DrawerItem 
          icon={({color, size}) => <DrawerIcon src={cardLocation} />}
          label={translate('friend_requests')}
          onPress={() => {
            props.navigation.navigate('FriendRequest');
          }} 
        />
        <DrawerItem
          icon={({color, size}) => <DrawerIcon src={messageIcon} />}
          label={translate('messeges')}
          onPress={() => {
            props.navigation.navigate('Messages');
          }}
        />
        <DrawerItem
          icon={({color, size}) => <DrawerIcon src={membershipIcon} />}
          label={translate('membership')}
          onPress={() => {
            props.navigation.navigate('Membership');
          }}
        />
        <DrawerItem
          icon={({color, size}) => <DrawerIcon src={notificationIcon} />}
          label={translate('notification')}
          onPress={() => {
            props.navigation.navigate('SupportScreen');
          }}
        />

        <View
          style={{
            marginTop: 10,
            height: 1,
            borderBottomColor: '#E2E2E2',
            borderBottomWidth: 1,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            marginStart: 25,
            color: '#181725',
            fontSize: 18,
          }}>
          Success Station
        </Text>

        <LinkMenuItem
          title={translate('about_us')}
          src={profileIcon}
          link="https://www.google.com"
          {...props}></LinkMenuItem>

        <LinkMenuItem
          title={translate('advertise_with_us')}
          src={adsIcon}
          link="https://www.google.com"></LinkMenuItem>

        <LinkMenuItem
          title={translate('privacy')}
          src={privacyIcon}
          link="https://www.google.com"></LinkMenuItem>

        <LinkMenuItem
          title={translate('user_agreement')}
          src={userAgreementIcon}
          link="https://www.google.com"></LinkMenuItem>

        <LinkMenuItem
          title={translate('cntact_us')}
          src={contactIcon}
          link="https://www.google.com"></LinkMenuItem>
           <DrawerItem
           
          icon={({color, size}) => <DrawerIcon src={notificationIcon} />}
          label={translate('logout')}
          onPress={() => logout()}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const DrawerIcon = ({src}) => {
  return (
    <View style={drawerIconStyle.menuIconBg}>
      <Image source={src} style={drawerIconStyle.menuIcon} />
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
    overflow: 'hidden',
  },
  name: {
    fontSize: 20,
    color: '#181725',
    width: 170
  },
  email: {
    fontSize: 16,
    color: '#7C7C7C',
    width: 170

  },

  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default SidebarMenu;
