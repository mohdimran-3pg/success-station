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
import _ from 'lodash';

const 
    multiSliderValue= [0, 5000]


const CardItem = ({item,refreshCallBack,...props}) => {
  var city = item.city.city != null ? item.city.city+", ": ""
  var region = item.region.region != null ? item.region.region+", ": ""
  var country = item.country.name != null ? item.country.name: ""
  var fullAddress = `${city+region+country}`
  var imageURL = item.image != null && item.image.length > 0 ? item.image[0].url: "";
  var header_View = (
    <TouchableOpacity style={{flex: 1}} onPress= {()=>{
    
    props.navigation.navigate('BookDetailScreen', { data: { bookId: item.id, callBack: ()=> {
      refreshCallBack()
    }} }) 
  }
    }>
      <Card style={{margin: 7, elevation: 5}} >
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Image style={styles.cardImageItem} source={{uri: imageURL}} />
          <View style={{flexDirection: 'column', marginStart: 10}}>
            <Text
              style={{
                fontSize: 15,
                color: 'rgba(0, 0, 0, 1)',
                lineHeight: 20,
              }}>
              {item.title}
            </Text>

            <Text style={{color: '#0A878A', fontSize: 15, marginTop: 11, fontFamily: "DMSans-Regular"}}>
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
                    fontFamily: "DMSans-Regular"
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
                    fontFamily: "DMSans-Regular"
                  }}>
                  {item.contact_name}
                </Text>
              </View>
            </View>
          </View>
          {item.if_favorite == true? (
          <View style={{right: 5, top: 5, position: "absolute", borderRadius: 11, width: 22, height: 22, backgroundColor: "#ffffff", justifyContent: 'center'}}>
              <Image 
                style={{width: 11, height: 11, alignSelf: "center"}}
                source={ require('../../../../assets/heart.png') }
              />
          </View>
          ): null}
        </View>
      </Card>
    </TouchableOpacity>
  );

  return header_View;
};
export default class StudentProfile extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeTextDelayed = _.debounce(this.onChangeText, 1000);
    this.state = {
     
      index: 0,
      books: [],
      categories: [],
      isLoading: false,
      types: [],
      searchText:props.route != null && props.route.params != null && props.route.params.searchText != null ? props.route.params.searchText: "",
      
    };
   
  
  }
  onChangeTab = (index) => {
    this.getBooksByCategory(this.state.categories[index].key)
  };

  onChangeText = (text) => {
    this.setState({searchText:text})
    setTimeout( () => {
      this.getBooks(`?search=${text}`)
   },1000);
    
  }

  getAddType= () =>{
    ApiService.get('listing-types')
      .then((response) => {
        this.setState({types: response.data}) 
      })
      .catch((error) => {
      });
  }

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
        var searchString = ""
        if (this.searchText != null && this.searchText != "") {
          searchString = "?search="+ this.searchText
        }
        this.getBooks(searchString);
      })
      .catch((error) => {
        this.setState({isLoading: false});
      });
  }

  getBooks = (searchData = "") => {
    var path = 'listings'
    if (searchData != "") {
      path += searchData
    }
    ApiService.get(path)
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
      });
    } else {
      var searchString = ""
      if (this.searchText != null && this.searchText != "") {
        searchString = "?search="+ this.searchText
      }
      this.getBooks(searchString)
    }
  }
 
  componentDidMount() {
    this.getAddType()
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
            onChangeText={(value)=>{
        
              this.onChangeText(value)

            }}
            icon={() => (
              <Image source={require('./../../../../assets/search.png')} />
            )}
            style={{fontStyle: "DMSans-Regular", fontSize:15}}
            value={this.state.searchText}
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
          renderItem={({item}) => <CardItem 
                                  item = {item}
                                  refreshCallBack = { () =>{
                                      console.log("Refresh Page CallBack")
                                      this.getBooks()
                                  }

                                  }
                                  {...this.props}/>} 
          numColumns={2}
        />
        <RBSheet
          ref={(ref) => {
            this.Standard = ref;
          }}
          height={400}
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }}
          >
          <View style={{flex: 1, margin: 16,}}>
            <View
              style={{
                flexDirection: 'row',
           
               
        
              }}>
              <View  style={{
                flex:1,
                flexDirection: 'row',
                justifyContent:'space-between'
               
        
              }}>
              <Text style={{color: 'black'}}>{translate('reset')}</Text>
              <Text >Filter</Text>
              <TouchableOpacity style={{padding: 0}}>
                <Text style={{color: '#F78A3A'}}>{translate('done')}</Text>
              </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: 1,
                marginTop: 16,
                backgroundColor: '#EAECEF',
                width: '100%',

              }}></View>
            <Text style={{fontSize: 21, marginTop: 13}}>
              Sub Categories
            </Text>
            <FlatList style={{}}
              data={this.state.types}
              renderItem={({item}) => <View
              style={{ flexDirection:'row'
              }}>
              <CheckBox    
                />
                
              <Text style={{textAlignVertical:'center'}}>{item.type}</Text>
            </View>} 
              numColumns={1}
            />
            
            <Text style={{fontSize: 21}}>
              Condition
            </Text>

            <View
              style={{
                flexDirection: 'row',
               
              }}>
              <CheckBox
               
              />
              <Text style={{textAlignVertical:'center'}}>New</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              
              }}>
              <CheckBox
               
              />
              <Text style={{textAlignVertical:'center'}}>Old</Text>
            </View>

            <Text style={{fontSize: 21, marginTop: 13}}>
              Price
            </Text>
            <View
              style={{
               
              }}>
             <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={Dimensions.get('window').width-40}
          onValuesChange={(i)=>{console.log(i)}}
          min={0}
          max={5000}
          step={1}
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
