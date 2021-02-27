// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/
import React, { useState } from "react";
import {Button, View, Text, SafeAreaView,StyleSheet} from 'react-native';

import MapView, { Marker } from "react-native-maps";

const MyLoacationScreen = (navigation) => {
  const [region, setRegion] = useState({
    latitude: 21.487301,
    longitude: 39.181339,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker coordinate={{ latitude: 21.487301, longitude:39.181339 }} />
    </MapView>
  );
};

export default MyLoacationScreen;