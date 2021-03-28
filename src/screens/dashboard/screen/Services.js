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
  FlatList,
  TextInput,
} from 'react-native';
import {translate} from '../../../util/TranslationUtils';
import DynamicTabView from 'react-native-dynamic-tab-view';
import MapView, {Marker} from 'react-native-maps';
import ApiService from '../../../network/ApiService';
import Loader from '../../Loader';

const SearchBar = ({displayType, clickEvent}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        borderRadius: 4,
        backgroundColor: 'white',
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: 76,
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => clickEvent()}>
          <Image
            style={{width: 21, height: 21, marginLeft: 18}}
            source={
              displayType == '1'
                ? require('../../../../assets/book/map-view.png')
                : require('../../../../assets/book/list-view.png')
            }
          />
          <Image
            style={{width: 12, height: 5, marginLeft: 15}}
            source={require('../../../../assets/book/drop-down-arrow.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 34,
            width: 1,
            backgroundColor: '#00000020',
            marginLeft: 15,
          }}></View>
      </View>
      <View
        style={{
          width: 176,
          height: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 23, height: 23, marginLeft: 18}}
          source={require('../../../../assets/search.png')}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={{width: 100, height: 25, marginLeft: 18}}
          placeholder={translate('search_book')}
        />
      </View>
    </View>
  );
};

const RatingView = ({avgRating, totalStar}) => {
  return (
    <View
      style={{width: '100%', height: 15, flexDirection: 'row', marginTop: 15}}>
      <Image
        style={{width: 15, height: 15, justifyContent: 'center'}}
        source={
          avgRating >= 1
            ? require('../../../../assets/book/filled-star.png')
            : require('../../../../assets/book/unfilled-star.png')
        }
      />
      <Image
        style={{width: 15, height: 15, justifyContent: 'center', marginLeft: 5}}
        source={
          avgRating >= 2
            ? require('../../../../assets/book/filled-star.png')
            : require('../../../../assets/book/unfilled-star.png')
        }
      />
      <Image
        style={{width: 15, height: 15, justifyContent: 'center', marginLeft: 5}}
        source={
          avgRating >= 3
            ? require('../../../../assets/book/filled-star.png')
            : require('../../../../assets/book/unfilled-star.png')
        }
      />
      <Image
        style={{width: 15, height: 15, justifyContent: 'center', marginLeft: 5}}
        source={
          avgRating >= 4
            ? require('../../../../assets/book/filled-star.png')
            : require('../../../../assets/book/unfilled-star.png')
        }
      />
      <Image
        style={{width: 15, height: 15, justifyContent: 'center', marginLeft: 5}}
        source={
          avgRating >= 5
            ? require('../../../../assets/book/filled-star.png')
            : require('../../../../assets/book/unfilled-star.png')
        }
      />
      <Text
        style={{
          marginLeft: 15,
          fontSize: 12,
          fontStyle: 'normal',
          fontWeight: '500',
          color: '#9EA6BE',
        }}>
        ({totalStar})
      </Text>
    </View>
  );
};

const BookCard = ({book, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        width:'47%',margin:'1.5%', 
        
        borderColor: '#00000030',
        borderWidth: 1,
        borderRadius: 4,
        
      }}
      onPress={() => props.navigation.navigate('ServiceProfileScreen', {book})}>
      <View style={{}}>
        <View style={{width: '100%', height: 140}}>
          <Image
            source={{uri: book.image[0].url}}
            
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{width: '100%'}}>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: '500',
                color: '#000000',
                marginTop: 10,
              }}>
              {book.contact_name.trim()}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: '500',
                color: '#000000',
                marginTop: 5,
                marginBottom:5
              }}>
              {book.email.trim()}
            </Text>
           
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default class ServicesScreen extends React.Component {
  getCategories = () => {
    this.setState({isLoading: true});
    ApiService.get('location-categories')
      .then((response) => {

        var tempArray = [];
        tempArray.push({
          key: 0,
          title: translate('all'),
        });
        for (var key in response.data) {
          var temp = {
            key: response.data[key].id,
            title: response.data[key].location,
          };
          tempArray.push(temp);
        }
        this.categoryData = tempArray;
        this.getServiceList(0);
      })
      .catch((error) => {
        this.setState({isLoading: false});
        alert(error.data);
      });
  };

  getServiceList = (id) => {
    let path = 'locations';
    if (id != 0) {
      path = `locations?category=${id}`;
    }
    ApiService.get(path)
      .then((response) => {
        this.locationList = response.data;
        this.setState({isLoading: false});
      })
      .catch((error) => {
        this.setState({isLoading: false});
        alert(error.data);
      });
  };

  componentDidMount() {
    this.getCategories();
  }

  constructor(props) {
    super(props);
    this.state = {
      index: 0,

      isLoading: false,
      region: {
        latitude: 21.487301,
        longitude: 39.181339,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      },
      isMap: false,
      isList: '1',
    };
    this.categoryData = [];
    this.locationList = [];
  }
  _renderItem = (item, index) => {
    return (
      <View
        key={item['key']}
        style={{backgroundColor: item['color'], flex: 1}}
      />
    );
  };

  onChangeTab = (index) => {
    this.getServiceList(this.categoryData[index].key);
  };

  render() {
    let region = {latitude: 0.0, longitude: 0.0};
    if (this.locationList.length != 0) {
      region = {
        latitude: parseFloat(this.locationList[0].lat),
        longitude:
          this.locationList[0].long === 'undefined'
            ? 0.0
            : parseFloat(this.locationList[0].long),
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      };
    }
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: '#0A878A', height: 70}}>
            <View
              style={{
                width: '92%',
                height: 50,
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <SearchBar
                style={{}}
                displayType={this.state.isMap}
                clickEvent={() => {
                  this.setState({isMap: !this.state.isMap});
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 2,
              backgroundColor: '#F78A3A',
            }}></View>
          <View style={{width: '100%', height: 60}}>
            <DynamicTabView
              data={this.categoryData}
              renderTab={() => {
                <View style={{flex: 1, height: 1}} />;
              }}
              defaultIndex={this.state.defaultIndex}
              containerStyle={styles.container2}
              headerBackgroundColor={'white'}
              headerTextStyle={styles.headerText}
              onChangeTab={this.onChangeTab}
              headerUnderlayColor={'#F78A3A'}
            />
          </View>
          {this.state.isMap ? (
            <View style={{flex: 1}}>
              <MapView
                style={{flex: 1}}
                region={region}
                onRegionChangeComplete={(region) => region}>
                {this.locationList.map((item) => (
                  <Marker
                    key={item.id}
                    coordinate={{
                      latitude: parseFloat(item.lat),
                      longitude:
                        item.long === 'undefined' ? 0.0 : parseFloat(item.long),
                    }}
                    title={item.location}
                    description={item.description}></Marker>
                ))}
              </MapView>
            </View>
          ) : (
            <View style={{flex: 1}}>
              <FlatList
                
                keyExtractor={(item) => item.id}
                data={this.locationList}
                numColumns={2}
                renderItem={({item}) => (
                  <BookCard book={item} {...this.props} />
                )}
              />
            </View>
          )}
          {this.state.isLoading ? (
            <Loader loading={this.state.loading} />
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttonView: {
    width: 85,
    height: 25,
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderColor: '#F78A3A',
    borderWidth: 1,
  },
  buttonStyle: {
    color: '#F78A3A',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
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
