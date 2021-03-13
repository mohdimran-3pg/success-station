import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  CheckBox,
  ScrollView,
  Dimensions,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-community/async-storage'
import {Card, Paragraph, Searchbar} from 'react-native-paper';
import ApiService from '../../../network/ApiService';
import Loader from '../../Loader';
import {
  cardFollower,
  cardLocation,
  filter,
} from '../../../util/ImageConstant';
import {translate} from '../../../util/TranslationUtils';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const CardItem = ({item,...props}) => {
  let imageurl = item.image.length > 0 ? item.image[0].url: ""
  var header_View = (
    <TouchableOpacity style={{flex: 1}} onPress= {()=>props.navigation.navigate('BookDetailScreen')}>
      <Card style={{margin: 7, elevation: 5}} >
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Image style={styles.cardImageItem} source={{uri: imageurl}} />
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
              SR {item.price}
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
                <Text
                  style={{
                    fontSize: 10,
                    color: 'rgba(0, 0, 0, 0.6)',
                    marginStart: 5,
                  }}>
                  {item.cities != null && item.cities.length > 0 ? item.cities[0].city : "N/A"}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={{width: 11, height: 12}} source={cardFollower} />
                <Text
                  style={{
                    fontSize: 10,
                    color: 'rgba(0, 0, 0, 0.6)',
                    marginStart: 5,
                  }}>
                  {item.contact_name}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return header_View;
};
export default class MyAdsListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books: []}
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    this.setState({isLoading : true})
    AsyncStorage.getItem('userdata').then((value)=> {
        
      if(!value || 0 != value.length){ 
        
        let userdata = JSON.parse(value)
        ApiService.get(`listings?user=${userdata.user_id}`)
        .then((response) => {
          this.setState({isLoading: false});
          this.setState({books: response.data})
        })
        .catch((error) => {
          this.setState({isLoading: false});
        });
      } else {
        this.setState({isLoading : false})
      }
      
       
    }).catch(()=> {
      this.setState({isLoading : false})
    })

    
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
       
       
        <FlatList
          style={{marginTop:10,marginBottom:10,backgroundColor:'white'}}
          data={this.state.books}
          renderItem={({item}) => <CardItem item = {item} {...this.props}/>} 
          numColumns={2}
        />
        
        {this.state.isLoading ?   <Loader
                loading={this.state.loading} /> :null}  
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
