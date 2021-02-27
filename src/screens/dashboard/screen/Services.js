// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import  React, {useState} from 'react';
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

const tabData = [
  { title: 'ALL', key: '1' },
  { title: 'CLOTHES', key: '2' },
  { title: 'ELECTRONICS', key: '3' },
]

const serviceData = [
  {
    id: 11,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'The Complete SQL Bootcamp 2020:',
    avgStar: 1,
    totalStar: 103,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
  },
  {
    id: 12,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'The Complete SQL Bootcamp 2020:',
    avgStar: 2,
    totalStar: 113,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
  
  },
  {
    id: 13,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'The Complete SQL Bootcamp 2020:',
    avgStar: 3,
    totalStar: 193,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
   
  },
  {
    id: 14,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'The Complete SQL Bootcamp 2020:',
    avgStar: 4,
    totalStar: 23,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',

  },
  {
    id: 15,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'The Complete SQL Bootcamp 2020:',
    avgStar: 5,
    totalStar: 183,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
   
  },
  {
    id: 16,
    src:
      'https://phlearn.com/wp-content/uploads/2019/04/Top-20-Photog-Books-no-text.jpg?fit=1400%2C628&quality=99&strip=all',
    role: 'Student',
    name: 'The Complete SQL Bootcamp 2020:',
    avgStar: 4,
    totalStar: 193,
    follower: 40,
    following: 100,
    profileMsg:
      'Must go faster. Must go faster... go, go, go, go, go! I was part of something special.',
  },
  

];

_renderItem = (item, index) => {
  console.log("renderItem", index);
  return (
    <View
      key={item["key"]}
      style={{ backgroundColor: item["color"], flex: 1 }}
    />
  );
};

onChangeTab = index => {};

const SearchBar = () => {
  return (
    <View style={{width: "100%", height: 50, borderRadius: 4, backgroundColor: "white", flexDirection: "row"}}>
      <View style={{width: 76, height: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <TouchableOpacity style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <Image
              style={{width: 21, height: 21, marginLeft: 18}}
              source={require('../../../../assets/book/list-view.png')} 
            />
            <Image
              style={{width: 12, height: 5, marginLeft: 15}}
              source={require('../../../../assets/book/drop-down-arrow.png')} 
            />
          </TouchableOpacity>
          <View style ={{height: 34, width: 1, backgroundColor: "#00000020", marginLeft: 15}}></View>
      </View>
      <View style={{width: 176, height: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
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
  )
}

const RatingView = ({avgRating, totalStar}) => {
  console.log("this is", avgRating, totalStar)
  return (
    <View style={{width: "100%", height: 15, flexDirection: "row", marginTop: 15}}>
      <Image style={{width: 15, height: 15, justifyContent: "center"}}
          source={ avgRating >= 1 ? require('../../../../assets/book/filled-star.png'): require('../../../../assets/book/unfilled-star.png')} 
      />
      <Image style={{width: 15, height: 15, justifyContent: "center", marginLeft: 5}}
          source={avgRating >= 2 ? require('../../../../assets/book/filled-star.png'): require('../../../../assets/book/unfilled-star.png')} 
      />
      <Image style={{width: 15, height: 15, justifyContent: "center", marginLeft: 5}}
          source={avgRating >= 3 ? require('../../../../assets/book/filled-star.png'): require('../../../../assets/book/unfilled-star.png')} 
      />
      <Image style={{width: 15, height: 15, justifyContent: "center", marginLeft: 5}}
          source={avgRating >= 4 ? require('../../../../assets/book/filled-star.png'): require('../../../../assets/book/unfilled-star.png')} 
      />
      <Image style={{width: 15, height: 15, justifyContent: "center", marginLeft: 5}}
          source={avgRating >= 5 ? require('../../../../assets/book/filled-star.png'): require('../../../../assets/book/unfilled-star.png')} 
      />
      <Text style={{marginLeft: 15, fontSize: 12, fontStyle: "normal", fontWeight: "500", color: "#9EA6BE"}}>({totalStar})</Text>
    </View>
  )
}

const BookCard =({book,...props}) => {
  console.log('THis is User:::', book)
  return (
    <TouchableOpacity style={{width:'46%', marginTop: 10, borderColor: "#00000030", borderWidth: 1, borderRadius: 4, height: 234}} onPress = {()=> props.navigation.navigate('ServiceProfileScreen',{book})}>
    <View style={{}} >
        <View style={{width: "100%", height: "50%"}}>
            <Image
                  source={require('../../../../assets/book/book-pencil.png')}
                  resizeMode="contain"
                  style={{borderRadius: 4}}
            />
        </View>
        <View style={{width: "100%", height:"50%"}}>
          <View style={{marginLeft: 10}}>
            <RatingView style={{}} avgRating = {book.avgStar} totalStar = {book.totalStar} />
            <Text style={{fontSize: 15, fontStyle: "normal", fontWeight: "500", color: "#000000", marginTop: 10}}>The Complete SQL Bootcamp 2020:</Text>
            <View style={{width: 85, height: 12, marginTop: 10}}>
                <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress = { () => {

                    }}
                >
                <Text style={styles.buttonStyle}>
                    {translate('read_more')}
                </Text>
                </TouchableOpacity>
            </View>
            </View>
            
          </View>
        </View>
    </View>
    </TouchableOpacity>
  )
}

const initialLayout = { width: Dimensions.get('window').width };
export default class ServicesScreen extends React.Component {

    
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'all', title: 'ALL'  },
        { key: 'clothes', title: 'CLOTHES'},
        { key: 'electronics', title: 'ELECTRONICS' },
        { key: 'stationary', title: 'STATIONARY'},
      ],
    };
    this.data = [
      { title: 'ALL', key: '1' },
  { title: 'CLOTHES', key: '2' },
  { title: 'ELECTRONICS', key: '3' },
  { title: 'ALL', key: '1' },
  { title: 'CLOTHES', key: '2' },
  { title: 'ELECTRONICS', key: '3' },
    ];
    }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex:1}}>
            <View style={{backgroundColor:"#0A878A", height: 70}}>
              <View style={{width: '92%', height: 50, alignSelf: "center", justifyContent: "center", marginTop: 10}}>
                  <SearchBar style={{}} />
              </View>
            </View>
            <View style={{width:"100%", height: 2, backgroundColor: "#F78A3A"}}></View>
            <View style={{width: "100%", height: 60}}>
            <DynamicTabView
            data={this.data}
            renderTab={() => <View
            style={{flex: 1 , height: 1}}
          />}
            defaultIndex={this.state.defaultIndex}
            containerStyle={styles.container}
            headerBackgroundColor={'white'}
            headerTextStyle={styles.headerText}
            onChangeTab={this.onChangeTab}
            headerUnderlayColor={'#F78A3A'}
          />
            </View>
            <FlatList 
                    columnWrapperStyle={{justifyContent: 'space-around'}}
                    style = {{width: "100%"}}
                    keyExtractor = {(item) => item.id} 
                    data = {serviceData}
                    numColumns={2}
                    renderItem={({item}) => <BookCard book = {item} {...this.props} />}
             />
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
    backgroundColor: "#F2F2F2",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "stretch",
    borderColor: "#F78A3A",
    borderWidth: 1
},
buttonStyle: {color: "#F78A3A", fontSize: 11, fontWeight: "700", textAlign: "center"},
container: {
  flex: 1
},
headerContainer: {
  marginTop: 16
},
headerText: {
  color:'black',
  fontSize: 15, fontWeight:"400", fontStyle: "normal"
},
tabItemContainer: {
  backgroundColor: "#cf6bab"
}
});


