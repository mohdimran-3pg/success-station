// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {
 
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,

  FlatList,
} from 'react-native';

import {Card, Paragraph} from 'react-native-paper';
import {cardFollower, cardLocation} from './../../../../util/ImageConstant';

const profileData = {
  name: 'Rahul Pandey',
  src:
    'https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg',
  ads: 100,
  follower: 40,
  following: 100,
  profileMsg:
    'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
};

const FlatListItems = [
  {
    id: 1,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    price: 'AED 100',
    title: 'Medicine book on Internal Medicine ',
    location: 'Dubai UAE',
    follower: 'Imran',
  },
  {
    id: 2,
    src:
      'https://cbsnews2.cbsistatic.com/hub/i/r/2015/12/11/7f3c9843-adb1-4022-be13-82515641a9fc/thumbnail/1200x630/5af2e16fd2ecd02f06637db5ca110a43/open-book.jpg',
    price: 'AED 100',
    title: 'Medicine book on Internal Medicine ',
    location: '3/4 Block 3 Dubai UAE',
    follower: 'Ramesh',
  },
  {
    id: 3,
    src:
    'https://cbsnews2.cbsistatic.com/hub/i/r/2015/12/11/7f3c9843-adb1-4022-be13-82515641a9fc/thumbnail/1200x630/5af2e16fd2ecd02f06637db5ca110a43/open-book.jpg',

        price: 'AED 100',
    title: 'Medicine book on Internal Medicine ',
    location: '2 lane Dubai UAE',
    follower: 'Imran',
  },
  {
    id: 4,
    src:
    'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    title: 'Medicine book on Internal Medicine ',
    location: 'Dubai 9 /3 street UAE',
    follower: 'Rahul',
    price: 'AED 1100',
  },
  {
    id: 5,
    src:
    'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
   price: 'AED 100',
    title: 'Medicine book on Internal Medicine ',
    location: 'Dubai 4 block UAE',
    follower: 'Mohd',
  },
  {
    id: 6,
    src:
     'https://cbsnews2.cbsistatic.com/hub/i/r/2015/12/11/7f3c9843-adb1-4022-be13-82515641a9fc/thumbnail/1200x630/5af2e16fd2ecd02f06637db5ca110a43/open-book.jpg',    price: 'AED 100',
    title: 'Medicine book on Internal Medicine ',
    price: 'AED 20',
    location: 'Dubai 4 street UAE',
    follower: 'Raman',
  },
  {
    id: 7,
    src:
    'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    price: 'AED 100',
    title: 'Medicine book on Internal Medicine ',
    location: 'Dubai 2 street UAE',
    follower: 'Imran',
  },
  {
    id: 8,
    src:
    'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    price: 'AED 130',
    title: 'Medicine book on Internal Medicine  Test book',
    location: 'Dubai UAE',
    follower: 'Rahul',
  },

];
const UserCardHeader = ({profile,...props}) => {
  return (
    <View style={{flex: 1}}>
      <View style={[styles.parent, {position: 'absolute'}]} />

      <Card style={{margin: 14, elevation: 10}}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => {
              props.navigation.navigate('EditProfile');

            }}>
          <Image
            source={require('./../../../../../assets/drawer/edit.png')}
            style={{
              tintColor: '#F78A3A',
              width: 15,
              height: 15,
              alignSelf: 'flex-end',
              marginEnd: 25,
              marginTop: 15,
            }}
          />
          </TouchableOpacity>
          <Image
            style={[
              {backgroundColor: 'yellow', alignSelf: 'center', marginTop: 5},
              styles.image,
            ]}
            source={{uri: profile.src}}
          />
          <Text
            style={{
              color: '#151522',
              fontSize: 20,
              alignSelf: 'center',
              marginTop: 25,
              fontWeight: 'bold',
            }}>
            {profile.name}
          </Text>
          <Card.Content>
            <Paragraph
              style={{
                fontSize: 13,
                color: '#666666',
                lineHeight: 18,
                textAlign: 'center',
              }}>
              {profile.profileMsg}
            </Paragraph>
          </Card.Content>
          <View
            style={{
              marginTop: 20,
              height: 1,
              marginEnd: 28,
              marginStart: 28,
              borderBottomColor: '#E2E2E2',
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              justifyContent: 'space-evenly',
              marginTop: 10,
              marginBottom: 24,
            }}>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
              <Text style={styles.countTextStye}>{profile.ads}</Text>
              <Text style={styles.titleCountTextStye}>Ads</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
              <Text style={styles.countTextStye}>{profile.follower}</Text>
              <Text style={styles.titleCountTextStye}>Follower</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
              <Text style={styles.countTextStye}>{profile.following}</Text>
              <Text style={styles.titleCountTextStye}>Following</Text>
            </View>
          </View>
        </View>
      </Card>

      <Text style={{fontSize:15,marginStart:14,marginTop:28}}>MY ADS</Text>
    </View>
  );

};

const CardItem = (item) => {
  var header_View = (
    <View style={{flex: 1}}>
      <Card style={{margin: 7, elevation: 10}}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Image
            style={styles.cardImageItem}
            source={{uri : item.src}}          />
          <View style={{flexDirection: 'column', marginStart: 10}}>
            <Text
              style={{
                fontSize: 15,
                color: 'rgba(0, 0, 0, 1)',
                lineHeight: 20,
              }}>
              {item.title}
            </Text>

            <Text style={{color: '#0A878A', fontSize: 15, marginTop: 11}}>
              {item.price}
            </Text>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                justifyContent: 'space-evenly',
                marginTop: 12,
                marginBottom: 11,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image style={{width: 11, height: 12}} source={cardLocation} />
                <Text style={{fontSize: 10, color: 'rgba(0, 0, 0, 0.6)',marginStart:5}}>
                  {item.location}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={{width: 11, height: 12}} source={cardFollower} />
                <Text style={{fontSize: 10, color: 'rgba(0, 0, 0, 0.6)' ,marginStart:5}}>
                  {item.follower}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );

  return header_View;
};
export default class StudentProfile extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          style={{}}
          data={FlatListItems}
          renderItem={({item}) => CardItem(item)}
          numColumns={2}
          ListHeaderComponent={<UserCardHeader profile = {profileData} {...this.props}/>}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    overflow: 'hidden',
  },
  parent: {
    height: '65%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    backgroundColor: '#0A878A',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],

    backgroundColor: '#0A878A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: Platform.OS === 'iOS' ? 20 : 0,
  },

  FlatList_Item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  header_footer_style: {
    width: '100%',
    height: 44,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 21,
  },
  countTextStye: {
    color: '#151522',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleCountTextStye: {
    color: '#666666',
    fontSize: 13,
    textAlign: 'center',
  },
  cardImageItem: {
    width: 'auto',
    height: 'auto',
    aspectRatio: 16 / 9,
  },
});