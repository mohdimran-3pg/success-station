// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/
import * as React from 'react';
import {
  Button,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import {Searchbar, DefaultTheme, Card} from 'react-native-paper';
import {translate} from '../../../util/TranslationUtils';
import DynamicTabView from 'react-native-dynamic-tab-view';

const ITEM_WIDTH = Dimensions.get('window').width;




const BookCard = ({book, ...props}) => {
  {console.log(book.src)}
  return (
    <TouchableOpacity>
      <View  >
        <Image
        
          source={{uri:book.src}}
          style={{
            
            marginLeft:10,
            marginTop:10,
            marginRight: 10,
            borderColor: '#00000030',
            borderWidth: 1,
            borderRadius: 4,
            height: 150,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const data = [
  {
    imgUrl: 'https://picsum.photos/id/11/200/300',
  },
  {
    imgUrl: 'https://picsum.photos/id/10/200/300',
  },
  {
    imgUrl: 'https://picsum.photos/id/12/200/300',
  },
];

const offerData = [
  {
    id: 11,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',

    name: 'The Complete SQL Bootcamp 2020:',
  },
  {
    id: 12,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',

    name: 'The Complete SQL Bootcamp 2020:',
  },
  {
    id: 13,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',

    name: 'The Complete SQL Bootcamp 2020:',
  },
  
 
];


export default class OffersScreen extends React.Component {
  static navigationOptions = {
    header: null,
    options: {},
  };

  constructor(props) {
    super(props);
    this.state = {
     
      index: 0,
      
    };

    this.data = [
      {title: 'ALL', key: '1'},
      {title: 'CLOTHES', key: '2'},
      {title: 'ELECTRONICS', key: '3'},
      {title: 'BOOKS', key: '4'},
      {title: 'COMPUTER', key: '5'},
      {title: 'MOBILE', key: '6'},
    ];
  }
  _renderItem = (item, index) => {
    console.log('renderItem', index);
    return (
      <View key={item['key']} style={{backgroundColor: item['color'],}} />
    );
  };
  
  onChangeTab = (index) => {};

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            <View
              style={{
                height: '10%',
                width: '100%',
                backgroundColor: 'rgba(10, 135, 138, 1)',
              }}>
              <Searchbar
                style={{marginStart: 10, marginEnd: 10}}
                placeholder={translate('search_book')}
                icon={() => (
                  <Image source={require('./../../../../assets/search.png')} />
                )}
              />
            </View>
            <View style={{width: "100%", height: 60}}>
            <DynamicTabView
            data={this.data}
            renderTab={() => <View
            style={{flex: 1, height: 1 }}
          />}
        
            defaultIndex={this.state.defaultIndex}
            containerStyle={styles.container2}
            headerBackgroundColor={'white'}
            headerTextStyle={styles.headerText}
            onChangeTab={this.onChangeTab}
            headerUnderlayColor={'#F78A3A'}
          
          />
            </View>
            <FlatList
              style={{width: '100%',marginBottom:120}}
              keyExtractor={(item) => item.id}
              data={offerData}
              renderItem={({item}) => <BookCard book={item} {...this.props} />}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: 35,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderColor: '#F78A3A',
    borderWidth: 1,
  },
  buttonStyle: {
    color: '#F78A3A',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'white',

    borderRadius: 8,
    width: ITEM_WIDTH,
    height: 150,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 0,
  },
  image: {
    width: ITEM_WIDTH,
    padding: 8,
    aspectRatio: 16 / 9,
  },
  container2: {

  },
  headerContainer: {
    marginTop: 16,
  },
  header: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 20,
    shadowColor: 'black',
  },
  body: {
    color: 'white',
    fontSize: 15,

    padding: 10,
    marginEnd: 10,
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
