// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {Card, Paragraph} from 'react-native-paper';
import DynamicTabView from 'react-native-dynamic-tab-view';

const UserCardHeader = ({profile, ...props}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'white',
        }}>
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
            flexDirection: 'row',
            justifyContent: 'center',
            justifyContent: 'space-evenly',
            marginTop: 10,
            marginBottom: 24,
          }}>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={styles.countTextStye}>{profile.follower}</Text>
            <Text style={styles.titleCountTextStye}>Follower</Text>
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={styles.countTextStye}>{profile.following}</Text>
            <Text style={styles.titleCountTextStye}>Following</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            justifyContent: 'space-evenly',
            marginTop: 6,
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: '35%',
              backgroundColor: '#F78A3A',
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Follow
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ADDRESS = ({data}) => (
  <View style={{flex: 1, background: 'white', margin: 16}}>
    <Text style={{fontSize: 15, lineHeight: 19}}>
      {' '}
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
      laying out print, graphic or web designs. The passage is attributed to an
      unknown typesetter in the 15th century who is thought to have scrambled
      parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
      in laying out print, graphic or web designs. The passage is attributed to
      an unknown typesetter in the 15th century who is thought to have scrambled
      parts century who is thought to have scrambled partscentury who is thought
      to have scrambled parts
    </Text>
  </View>
);

const OFFERS = ({data}) => (
  <View style={{flex: 1, background: 'white', margin: 16}}>
    <Text style={{fontSize: 15, lineHeight: 19}}>
      {' '}
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
      laying out print, graphic or web designs. The passage is attributed to an
      unknown typesetter in the 15th century who is thought to have scrambled
      parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
      in laying out print, graphic or web designs. The passage is attributed to
      an unknown typesetter in the 15th century who is thought to have scrambled
      parts century who is thought to have scrambled partscentury who is thought
      to have scrambled parts
    </Text>
  </View>
);
const SERVICES = ({data}) => (
  <View style={{flex: 1, background: 'white', margin: 16}}>
    <Text style={{fontSize: 15, lineHeight: 19}}>
      {' '}
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
      laying out print, graphic or web designs. The passage is attributed to an
      unknown typesetter in the 15th century who is thought to have scrambled
      parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
      in laying out print, graphic or web designs. The passage is attributed to
      an unknown typesetter in the 15th century who is thought to have scrambled
      parts century who is thought to have scrambled partscentury who is thought
      to have scrambled parts
    </Text>
  </View>
);
const PRODUCTS = ({data}) => (
  <View style={{flex: 1, background: 'white', margin: 16}}>
    <Text style={{fontSize: 15, lineHeight: 19}}>
      {' '}
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
      laying out print, graphic or web designs. The passage is attributed to an
      unknown typesetter in the 15th century who is thought to have scrambled
      parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
      in laying out print, graphic or web designs. The passage is attributed to
      an unknown typesetter in the 15th century who is thought to have scrambled
      parts century who is thought to have scrambled partscentury who is thought
      to have scrambled parts
    </Text>
  </View>
);

const ABOUT = ({data}) => (
  <View style={{flex: 1, background: 'white', margin: 16}}>
    <Text style={{fontSize: 15, lineHeight: 19}}>
      {' '}
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
      laying out print, graphic or web designs. The passage is attributed to an
      unknown typesetter in the 15th century who is thought to have scrambled
      parts Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
      in laying out print, graphic or web designs. The passage is attributed to
      an unknown typesetter in the 15th century who is thought to have scrambled
      parts century who is thought to have scrambled partscentury who is thought
      to have scrambled parts
    </Text>
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};
export default class ServiceDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };

    this.data = [
      {key: '1', title: 'ADDRESS'},
      {key: '2', title: 'OFFERS'},
      {key: '3', title: 'SERVICES'},
      {key: '4', title: 'PRODUCTS'},
      {key: '5', title: 'ABOUT US'},
    ];
  }

  onChangeTab = (index) => {};
  _renderScene = (item, index) => {
    switch (item['key']) {
      case '1':
        return <ADDRESS data={this.props.route.params.book.avgStar} />;
      case '2':
        return <OFFERS data={this.props.route.params.book.avgStar} />;
      case '3':
        return <SERVICES data={this.props.route.params.book.avgStar} />;
      case '4':
        return <OFFERS data={this.props.route.params.book.avgStar} />;
      case '5':
        return <ABOUT data={this.props.route.params.book.avgStar} />;
      default:
        return null;
    }
  };

  render() {
    const data = this.props.route.params.book;
    return (
      <SafeAreaView
        style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
        <View style={[styles.parent]}>
          <Image
            style={[styles.parent, {}]}
            source={require('../../../../../assets/service-bg.png')}
          />
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Image
            style={[
              {backgroundColor: 'yellow', alignSelf: 'center', marginTop: -40},
              styles.image,
            ]}
            source={{uri: data.src}}
          />
          <UserCardHeader profile={data} {...this.props} />
          <DynamicTabView
            data={this.data}
            renderTab={this._renderScene}
            defaultIndex={this.state.index}
            containerStyle={styles.container}
            headerBackgroundColor={'white'}
            headerTextStyle={styles.headerText}
            onChangeTab={this.onChangeTab}
            headerUnderlayColor={'#F78A3A'}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            left: 15,
            justifyContent: 'center',
            top: 45,
            flex: 1,
            flexDirection: 'row',
            alignItems:'center'
          }}>
          <TouchableOpacity
            style={{
              width: 28,
              height: 28,
              flex:.6
            }}
            onPress={() => {
              this.props.navigation.pop();
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../../../assets/book/back-icon.png')}
            />
          </TouchableOpacity>
          <View style={{flex:1,}}>
          <Text
            style={{
              color: 'white',
             
              fontSize: 26,
            }}>
            Profile
          </Text>
          </View>
        </View>
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
    width: '100%',
    height: 200,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    borderBottomLeftRadius: 10,
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
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 16,
  },
  headerText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  tabItemContainer: {
    backgroundColor: '#cf6bab',
  },
});
