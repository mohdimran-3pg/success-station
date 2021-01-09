import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,SafeAreaView,
} from "react-native";
import ButtonView from "../../components/ButtonView";

const RecoveredPassword = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.containerView}>
      <View style={styles.cireleStyle}>
          <Image  style={{alignContent:"center"}}
        source={require('../../assets/tick.png')}/>
        </View>
        <View>
          <Text style={styles.recoveredPasswordTextStyle}>Password Recovered</Text>
        </View>
        <View>
          <Text style={styles.secondaryTextStyle}>
          Your password recovered successfully please login
          </Text>
        </View>
        <View style={{ height: 50,marginTop:20 }}>
          <ButtonView
            clickEvent={() => {
                props.navigation.navigate('login')
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    justifyContent: "center",
  },
  cireleStyle :{
    width: 110,
    height: 110,
    alignContent:"center",
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 110 / 2,
     borderColor: "#0A878A",
    borderWidth: 5
  },
  recoveredPasswordTextStyle: {
    textAlignVertical: "center",
    fontSize: 22,
    fontWeight: "400",
    fontStyle: "normal",
    marginTop:20,
    color: "#0B0B0B",
    alignSelf: "center",
  },
  secondaryTextStyle: {
    textAlignVertical: "center",
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#4A4A4A",
    alignSelf: "center",
    marginTop:14,
  },
});

export default RecoveredPassword;
