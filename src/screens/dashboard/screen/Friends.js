// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import BorderButton from '../../../../components/BorderButton';
import SearchBar from 'react-native-search-bar';
//
const UserProfile =(user) => {
  console.log('THis is User:::', user)
  return (
    <View style={{width: 165, height: 200, justifyContent: "space-between", marginTop: 10, borderColor: "#00000030", borderWidth: 1, borderRadius: 4}}>
        <View style={{width: 60, height: 60, borderRadius: 30, alignSelf: "center", marginTop: 10}}>
            <Image style={{width: 60, height: 60, borderRadius: 30}} 
                  source={{uri: user.src}}
            />
        </View>
        <View style={{height: 40}}>
          <Text style={{fontSize: 15, fontWeight: "700", textAlign: "center", color: "#000000"}}>{user.name}</Text>
          <Text style={{fontSize: 15, fontWeight: "400", textAlign: "center", color: "#9EA6BE"}}>{user.role}</Text>
        </View>
        <View style={{width: "70%", alignSelf: "center", justifyContent: "space-between", flexDirection: "row", height: 30}}>
          <Image style={{width: 24, height:24}}
              source={require('../../../../assets/friends/graduation-icon.png')}
          />
          <Text style={{fontSize: 11, fontWeight: "400", textAlign: "center", color: "#9EA6BE", fontStyle: "normal"}}>{user.location}</Text>
        </View>
        <View style={{width: "80%", alignSelf: "center", height: 35, marginBottom: 10}}>
        <View style={styles.mainView}>
            <TouchableOpacity>
            <Text style={styles.buttonStyle}>
            Connect
            </Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const friendsData = [
  {
    id: 11,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Tabrez Ahmed',
    location: 'ABES Institute Of Technology',
  },
  {
    id: 12,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Mohammad Iman',
    location: 'ABES Institute Of Technology',
  },
  {
    id: 13,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Rahul Pandey',
    location: 'ABES Institute Of Technology',
  },
  {
    id: 14,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Pathak Ji',
    location: 'ABES Institute Of Technology',
  },
  {
    id: 15,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Amanat ali',
    location: 'ABES Institute Of Technology',
  },
  {
    id: 16,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Amanat ali',
    location: 'ABES Institute Of Technology',
  },
  {
    id: 17,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Amanat ali',
    location: 'ABES Institute Of Technology',
  },
  {
    id: 18,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Amanat ali',
    location: 'ABES Institute Of Technology',
  },

];

export default class FreindsScreen extends React.Component {

  static navigationOptions = {
    header: null,
    options: {
      
    }
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
            }}>
            <View style={{height: "10%", backgroundColor: '', width: "100%"}}>
            <SearchBar
              placeholder={'Search Book'}
            />
            </View>
            <View style={{width: "100%", backgroundColor: "white", height: "90%"}}>
                <View style={{width: "90%", alignSelf: "center", height: "100%"}}>
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    style = {{width: "100%"}}
                    keyExtractor = {(item) => item.id} 
                    data = {friendsData}
                    numColumns={2}
                    renderItem={({item}) => UserProfile(item)} 
                />
                </View>
            </View>
            </View>
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