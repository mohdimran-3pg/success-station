// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Searchbar ,DefaultTheme} from 'react-native-paper';

//
const UserProfile =({user,...props}) => {
  console.log('THis is User:::', user)
  return (
    <TouchableOpacity style={{width:'49%', marginEnd:'2%', marginTop: 10, borderColor: "#00000030", borderWidth: 1, borderRadius: 4}} onPress = {()=> props.navigation.navigate('ProfileDetail',{  
      user: user
     })} >
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
    </TouchableOpacity>
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
    ads: 100,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
      contact:'https://www.google.com/maps/place/Delhi/@28.6466773,76.813073,10z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902',
      adsmsg :'message and products. For Google, text ads appear on search results pages and throughout the “Google Network,” including search partners, Search Network and Display Network. ...',
      study:'Designed to complement your own learning style, whether that’s gaining a thorough understanding of the business organisational structure or simply concentrating on the key examinable topics.',
      about:'SMS was developed in the United Kingdom in the late 1980s, and the first text message was sent on December 3, 1992. An SMS commercial service was launched in the United Kingdom in 1995. Text messaging did not take off, however, until it became possible to send messages between the four main British cell phone networks in 1998.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts century who is thought to have scrambled partscentury who is thought to have scrambled parts'
   
  },
  {
    id: 12,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Mohammad Iman',
    location: 'ABES Institute Of Technology',
    ads: 100,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
      contact:'https://www.google.com/maps/place/Delhi/@28.6466773,76.813073,10z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902',
      adsmsg :'message and products. For Google, text ads appear on search results pages and throughout the “Google Network,” including search partners, Search Network and Display Network. ...',
      study:'Designed to complement your own learning style, whether that’s gaining a thorough understanding of the business organisational structure or simply concentrating on the key examinable topics.',
      about:'SMS was developed in the United Kingdom in the late 1980s, and the first text message was sent on December 3, 1992. An SMS commercial service was launched in the United Kingdom in 1995. Text messaging did not take off, however, until it became possible to send messages between the four main British cell phone networks in 1998.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts century who is thought to have scrambled partscentury who is thought to have scrambled parts'
  
  },
  {
    id: 13,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Rahul Pandey',
    location: 'ABES Institute Of Technology',
    ads: 100,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
      contact:'https://www.google.com/maps/place/Delhi/@28.6466773,76.813073,10z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902',
      adsmsg :'message and products. For Google, text ads appear on search results pages and throughout the “Google Network,” including search partners, Search Network and Display Network. ...',
      study:'Designed to complement your own learning style, whether that’s gaining a thorough understanding of the business organisational structure or simply concentrating on the key examinable topics.',
      about:'SMS was developed in the United Kingdom in the late 1980s, and the first text message was sent on December 3, 1992. An SMS commercial service was launched in the United Kingdom in 1995. Text messaging did not take off, however, until it became possible to send messages between the four main British cell phone networks in 1998.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts century who is thought to have scrambled partscentury who is thought to have scrambled parts'
   
  },
  {
    id: 14,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Pathak Ji',
    location: 'ABES Institute Of Technology',
    ads: 100,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
      contact:'https://www.google.com/maps/place/Delhi/@28.6466773,76.813073,10z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902',
      adsmsg :'message and products. For Google, text ads appear on search results pages and throughout the “Google Network,” including search partners, Search Network and Display Network. ...',
      study:'Designed to complement your own learning style, whether that’s gaining a thorough understanding of the business organisational structure or simply concentrating on the key examinable topics.',
      about:'SMS was developed in the United Kingdom in the late 1980s, and the first text message was sent on December 3, 1992. An SMS commercial service was launched in the United Kingdom in 1995. Text messaging did not take off, however, until it became possible to send messages between the four main British cell phone networks in 1998.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts century who is thought to have scrambled partscentury who is thought to have scrambled parts'

  },
  {
    id: 15,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Amanat ali',
    location: 'ABES Institute Of Technology',
    ads: 100,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
      contact:'https://www.google.com/maps/place/Delhi/@28.6466773,76.813073,10z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902',
      adsmsg :'message and products. For Google, text ads appear on search results pages and throughout the “Google Network,” including search partners, Search Network and Display Network. ...',
      study:'Designed to complement your own learning style, whether that’s gaining a thorough understanding of the business organisational structure or simply concentrating on the key examinable topics.',
      about:'SMS was developed in the United Kingdom in the late 1980s, and the first text message was sent on December 3, 1992. An SMS commercial service was launched in the United Kingdom in 1995. Text messaging did not take off, however, until it became possible to send messages between the four main British cell phone networks in 1998.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts century who is thought to have scrambled partscentury who is thought to have scrambled parts'
   
  },
  {
    id: 16,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Amanat ali',
    location: 'ABES Institute Of Technology',
    ads: 100,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
    contact:'https://www.google.com/maps/place/Delhi/@28.6466773,76.813073,10z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902',
    adsmsg :'message and products. For Google, text ads appear on search results pages and throughout the “Google Network,” including search partners, Search Network and Display Network. ...',
    study:'Designed to complement your own learning style, whether that’s gaining a thorough understanding of the business organisational structure or simply concentrating on the key examinable topics.',
    about:'SMS was developed in the United Kingdom in the late 1980s, and the first text message was sent on December 3, 1992. An SMS commercial service was launched in the United Kingdom in 1995. Text messaging did not take off, however, until it became possible to send messages between the four main British cell phone networks in 1998.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts century who is thought to have scrambled partscentury who is thought to have scrambled parts'
  },
  {
    id: 17,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Amanat ali',
    location: 'ABES Institute Of Technology',
    ads: 100,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
      contact:'https://www.google.com/maps/place/Delhi/@28.6466773,76.813073,10z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902',
      adsmsg :'message and products. For Google, text ads appear on search results pages and throughout the “Google Network,” including search partners, Search Network and Display Network. ...',
      study:'Designed to complement your own learning style, whether that’s gaining a thorough understanding of the business organisational structure or simply concentrating on the key examinable topics.',
      about:'SMS was developed in the United Kingdom in the late 1980s, and the first text message was sent on December 3, 1992. An SMS commercial service was launched in the United Kingdom in 1995. Text messaging did not take off, however, until it became possible to send messages between the four main British cell phone networks in 1998.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts century who is thought to have scrambled partscentury who is thought to have scrambled parts'
   
  },
  {
    id: 18,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'Amanat ali',
    location: 'ABES Institute Of Technology',
     ads: 100,
  follower: 40,
  following: 100,
  profileMsg:
    'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
    contact:'https://www.google.com/maps/place/Delhi/@28.6466773,76.813073,10z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902',
    adsmsg :'message and products. For Google, text ads appear on search results pages and throughout the “Google Network,” including search partners, Search Network and Display Network. ...',
    study:'Designed to complement your own learning style, whether that’s gaining a thorough understanding of the business organisational structure or simply concentrating on the key examinable topics.',
    about:'SMS was developed in the United Kingdom in the late 1980s, and the first text message was sent on December 3, 1992. An SMS commercial service was launched in the United Kingdom in 1995. Text messaging did not take off, however, until it became possible to send messages between the four main British cell phone networks in 1998.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts century who is thought to have scrambled partscentury who is thought to have scrambled parts'
 
  },

];
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
            <View style={{height: "10%", width: "100%" ,backgroundColor:"rgba(10, 135, 138, 1)"}}>
            <Searchbar style ={{marginStart:10,marginEnd:10}} 
              placeholder={'Search Book'}
              theme = {theme}
              icon={()=><Image source = {require('./../../../../assets/search.png')} />}
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
                    renderItem={({item}) => <UserProfile user = {item} {...this.props}/>} 
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