// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/
import * as React from 'react';
import {Button, View, Text, Dimensions,SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar ,DefaultTheme, Card} from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import {translate} from '../../../util/TranslationUtils';

const SLIDER_WIDTH = Dimensions.get('window').width 
const ITEM_WIDTH = Dimensions.get('window').width

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={[styles.container]} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <View style ={{position:'absolute',bottom:20,window:ITEM_WIDTH}}>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body} numberOfLines ={2}>{item.body}</Text>
      </View>
    </View>
  )
}
const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View>
          <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
                activeSlideAlignment='center'
              />
               <Pagination
              containerStyle={{marginTop:-20}}
              dotsLength={data.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: '#FFA733',
            
              }}
              inactiveDotOpacity={0.2}
              inactiveDotScale={0.6}
              tappableDots={true}
              
            />
              
    </View>
  )
}

const CategoryCard =({user,...props}) => {
  console.log('THis is User:::', props)
  return (
    <TouchableOpacity style={{width:"31%",margin:'1%'}} onPress = {()=> {  props.navigation.navigate('Category');}}>
        <View style={{width: "100%", height: 90, borderRadius: 30, marginTop: 21,  borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(158, 166, 190, 0.12)',
    borderBottomWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 3, backgroundColor:"#FFFFFF", justifyContent: "center"}}>
            <Image style={{width: 39, height: 33, alignSelf: "center"}} 
                  source={user.image}
                  resizeMode="contain"
            />
        </View>
        <View style={{height: 40, marginTop:7}}>
          <Text style={{fontSize: 16, fontWeight: "500", textAlign: "center", color: "#000000"}}>{user.name}</Text>
        </View>
    </TouchableOpacity>
  )
}

const data = [
  {
    imgUrl: "https://picsum.photos/id/11/200/300"
  },
  {
    imgUrl: "https://picsum.photos/id/10/200/300"
  },
  {
    imgUrl: "https://picsum.photos/id/12/200/300"
  }
]

const cardData = [
  {
    id: 1,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    name: 'Wrote',
    image: require('../../../../assets/categories/wrote-category.png')
  },{
    id: 12,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    name: 'Medical supplies',
    image: require('../../../../assets/categories/medical.png')
  },{
    id: 3,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    name: 'Engineering Supplies',
    image: require('../../../../assets/categories/engineering.png')
  },{
    id: 4,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    name: 'Wrote',
    image: require('../../../../assets/categories/wrote-category.png')
  },{
    id: 5,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    name: 'Medical supplies',
    image: require('../../../../assets/categories/medical.png')
  },{
    id: 6,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    name: 'Engineering Supplies',
    image: require('../../../../assets/categories/engineering.png')
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
      <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
        <View style={{flex: 1}}>
          <View
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            <View style={{height: "10%", width: "100%" ,backgroundColor:"rgba(10, 135, 138, 1)"}}>
            <Searchbar style ={{marginStart:10,marginEnd:10}} 
              placeholder={translate('search_book')}
              icon={()=><Image source = {require('./../../../../assets/search.png')} />}
            />
            </View>
            <ScrollView style={{marginBottom:50}}>
            <View >
              <CarouselCards/>
            </View>
            <View>
             <Text style={{fontSize: 20, fontWeight: "700", fontStyle: "normal",marginStart:20}}>{translate('categories')}</Text>

                <View style={{width: "90%",height:'100%', alignSelf: "center"}}>
                <FlatList
                 contentContainerStyle={{ flexDirection: 'row',
                 flexWrap: 'wrap'}}
                    keyExtractor = {(item) => item.id} 
                    data = {cardData}
                    numColumns={3}
                    renderItem={({item}) => <CategoryCard {...this.props} user = {item}/>} 
                />
                </View>
            </View>
            </ScrollView>
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
  buttonStyle: {color: "#F78A3A", fontSize: 17, fontWeight: "700", textAlign: "center"},
  container: {
    backgroundColor: 'white',
    
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: 150,
    paddingBottom: 40,
    shadowColor: "#000",
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
    padding:8,
    aspectRatio: 16/9 ,
  },
  header: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 20,
    shadowColor:'black'
  },
  body: {
    color: "white",
    fontSize: 15,
    
    padding:10,
    marginEnd:10
    
  }
});