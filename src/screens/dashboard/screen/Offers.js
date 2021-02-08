// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/
import * as React from 'react';
import {Button, View, Text, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Searchbar ,DefaultTheme} from 'react-native-paper';

const UserProfile =(user) => {
  console.log('THis is User:::', user)
  return (
    <View style={{width:'49%', marginEnd:'2%', marginTop: 10, borderColor: "#00000030", borderWidth: 1, borderRadius: 4}}>
        <View style={{width: 60, height: 60, borderRadius: 30, alignSelf: "center", marginTop: 21}}>
            <Image style={{width: 60, height: 60, borderRadius: 30}} 
                  source={{uri: user.src}}
            />
        </View>
        <View style={{height: 40, marginTop:7}}>
          <Text style={{fontSize: 15, fontWeight: "700", textAlign: "center", color: "#000000"}}>{user.name}</Text>
          <Text style={{fontSize: 15, fontWeight: "400", textAlign: "center", color: "#9EA6BE",marginTop:9}}>{user.role}</Text>
        </View>
        <View style={{width: "70%", alignSelf: "center",marginTop:15, justifyContent: "space-between", flexDirection: "row", height: 30}}>
          <Image style={{width: 24, height:24}}
              source={require('../../../../assets/friends/graduation-icon.png')}
          />
          <Text style={{fontSize: 11, fontWeight: "400",marginStart:4, color: "#9EA6BE", fontStyle: "normal"}}>{user.location}</Text>
        </View>
        <View style={{width: "80%", alignSelf: "center", height: 35, marginBottom: 10,marginTop:13}}>
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

export default class OffersScreen extends React.Component {

  static navigationOptions = {
    header: null,
    options: {
      
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
      ]
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Offer Screen
          </Text>
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