// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';

import WebView from 'react-native-webview'
const MyLoacationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={ {flex:1 ,justifyContent:'center', margin:16}} >
     <WebView source = {{uri: 'https://www.google.co.in/maps/place/Ghran+Saudi+Arabia/@22.0206093,39.3224688,12z/data=!3m1!4b1!4m13!1m7!3m6!1s0x15c3d01fb1137e59:0xe059579737b118db!2sJeddah+Saudi+Arabia!3b1!8m2!3d21.485811!4d39.1925048!3m4!1s0x15c1a151f20f3aad:0x7c8b0ea0da3b572f!8m2!3d22.0194532!4d39.3825531'}}/>
        </View>
    </SafeAreaView>
  );
};

export default MyLoacationScreen;
