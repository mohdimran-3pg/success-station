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
import DynamicTabView from 'react-native-dynamic-tab-view';
import {Card, Paragraph, Searchbar} from 'react-native-paper';
import {
  cardFollower,
  cardLocation,
  filter,
} from './../../../util/ImageConstant';
import {translate} from '../../../util/TranslationUtils';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import ApiService from '../../../network/ApiService';
import Loader from '../../Loader';

const 
    multiSliderValue= [0, 100]


const CardItem = ({item,...props}) => {
  var city = item.city.city != null ? item.city.city+", ": ""
  var region = item.region.region != null ? item.region.region+", ": ""
  var country = item.country.name != null ? item.country.name: ""
  var fullAddress = `${city+region+country}`

  var header_View = (
    <TouchableOpacity style={{flex: 1}} onPress= {()=>{
    
    props.navigation.navigate('BookDetailScreen', { data: { bookId: item.id} }) 
  }
    }>
      <Card style={{margin: 7, elevation: 5}} >
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Image style={styles.cardImageItem} source={{uri: item.image[0].url}} />
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
                    marginEnd: 5,
                  }}>
                  {fullAddress}
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
          <View style={{right: 5, top: 5, position: "absolute", borderRadius: 11, width: 22, height: 22, backgroundColor: "#ffffff", justifyContent: 'center'}}>
              <Image 
                style={{width: 11, height: 11, alignSelf: "center"}}
                source={ require('../../../../assets/heart.png') }
              />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return header_View;
};
export default class StudentProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      index: 0,
      books: [],
      categories: [],
      isLoading: false,
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
  onChangeTab = (index) => {
    this.getBooksByCategory(this.state.categories[index].key)
  };

  getBookCategories = () => {
    this.setState({isLoading: true});
    ApiService.get('listing-categories')
      .then((response) => {
        var tempArray = []
        tempArray.push({
          key: 0,
          title : translate('all')
        })
        for (var key in response.data) {
         var temp = {
            key: response.data[key].id,
            title : response.data[key].category
          }
          tempArray.push(temp)
        }
        this.setState({categories: tempArray})
        this.getBooks();
      })
      .catch((error) => {
        this.setState({isLoading: false});
      });
  }

  getBooks = () => {
    ApiService.get('listings')
      .then((response) => {
        this.setState({isLoading: false});
        this.setState({books: response.data})
      })
      .catch((error) => {
        this.setState({isLoading: false});
      });
  }

  getBooksByCategory = (id) => {

    if (id > 0) {
      ApiService.get(`listings?category=${id}`)
      .then((response) => {
        this.setState({books: response.data})
      })
      .catch((error) => {
        console.log("Error of Book is :::", error)
      });
    } else {
      this.getBooks()
    }
  }

  componentDidMount() {
    this.getBookCategories();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
        <View
          style={{backgroundColor: 'rgba(10, 135, 138, 1)', paddingBottom: 28}}>
          <Searchbar
            style={{marginStart: 10, marginEnd: 10}}
            placeholder={translate('search_book')}
            icon={() => (
              <Image source={require('./../../../../assets/search.png')} />
            )}
          />
        </View>
        <View style={{flexDirection: 'row', margin: 7, height: 30}}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              textAlignVertical: 'center',
              height: 30,
              fontSize: 18,
            }}>
            {translate('book_list')}
          </Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F78A3A',
                flexDirection: 'row',
                borderRadius: 4,
                width: 84,
                justifyContent: 'center',
                height: 30,
              }}
              onPress={() => {
                this.Standard.open();
              }}>
              <Image
                style={{alignSelf: 'center', marginRight: 5}}
                source={filter}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  textAlignVertical: 'center',
                }}>
                {translate('filter')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: "100%", height: 60}}>
            <DynamicTabView
            data={this.state.categories}
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
          style={{marginTop:10,marginBottom:10}}
          data={this.state.books}
          renderItem={({item}) => <CardItem item = {item} {...this.props}/>} 
          numColumns={2}
        />
        <RBSheet
          ref={(ref) => {
            this.Standard = ref;
          }}
          height={500}
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }}
          >
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 16,
        
              }}>
              <Text style={{color: 'black'}}>Reset</Text>
              <Text>Filter</Text>
              <TouchableOpacity style={{padding: 0}}>
                <Text style={{color: '#F78A3A'}}>Done</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: '#EAECEF',
                width: '100%',
              }}></View>
            <Text style={{fontSize: 21, marginStart: 16, marginTop: 13}}>
              Sub Categories
            </Text>

            <View
              style={{
                flexDirection: 'row',
               
                margin: 8,
              }}>
              <CheckBox
               
              />
              <Text style={{textAlignVertical:'center'}}>Medical1 books</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
               
                margin: 8,
              }}>
              <CheckBox
               
              />
              <Text style={{textAlignVertical:'center'}}>Medical2 books</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
               
                margin: 8,
              }}>
              <CheckBox
               
              />
              <Text style={{textAlignVertical:'center'}}>Medical3 books</Text>
            </View>
            <Text style={{fontSize: 21, marginStart: 16, marginTop: 13}}>
              Condition
            </Text>

            <View
              style={{
                flexDirection: 'row',
               
                margin: 8,
              }}>
              <CheckBox
               
              />
              <Text style={{textAlignVertical:'center'}}>New</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
               
                margin: 8,
              }}>
              <CheckBox
               
              />
              <Text style={{textAlignVertical:'center'}}>Old</Text>
            </View>

            <Text style={{fontSize: 21, marginStart: 16, marginTop: 13}}>
              Price
            </Text>
            <View
              style={{
                marginStart:20,
              }}>
             <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={Dimensions.get('window').width-40}
          onValuesChange={(i)=>{console.log(i)}}
          min={0}
          max={10}
          step={.1}
          allowOverlap
          snapped
        
        />
            </View>
      
          </View>
        </RBSheet>
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
  container2: {

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
