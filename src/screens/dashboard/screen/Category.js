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

import {Card, Paragraph, Searchbar} from 'react-native-paper';
import {
  cardFollower,
  cardLocation,
  filter,
} from './../../../util/ImageConstant';
import {translate} from '../../../util/TranslationUtils';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
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

const 
    multiSliderValue= [0, 100]
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
      'https://cbsnews2.cbsistatic.com/hub/i/r/2015/12/11/7f3c9843-adb1-4022-be13-82515641a9fc/thumbnail/1200x630/5af2e16fd2ecd02f06637db5ca110a43/open-book.jpg',
    price: 'AED 100',
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

const CardItem = (item) => {
  var header_View = (
    <View style={{flex: 1}}>
      <Card style={{margin: 7, elevation: 10}}>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Image style={styles.cardImageItem} source={{uri: item.src}} />
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
                <Text
                  style={{
                    fontSize: 10,
                    color: 'rgba(0, 0, 0, 0.6)',
                    marginStart: 5,
                  }}>
                  {item.location}
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
            Book List
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
                Filter
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={{}}
          data={FlatListItems}
          renderItem={({item}) => CardItem(item)}
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
