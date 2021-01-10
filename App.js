import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import MyListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/ConterScreen';
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreenByReducer from "./src/screens/SquareScreenByReducer";
import CounterScreenByReducer from "./src/screens/CounterScreenByReducer";
import TextScreen from "./src/screens/TextScreen";
import CountrySelectScreen from "./src/screens/CountrySelectScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ForgetPassword from "./src/screens/ForgetPassword";
import OtpScreen from "./src/screens/OtpScreen";
import RecoveredPassword from "./src/screens/RecoveredPassword";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    MyList: MyListScreen,
    ImageSc: ImageScreen,
    counterScreen: CounterScreen,
    colorScreen: ColorScreen,
    squareScreen: SquareScreen,
    squareScreenByReducer: SquareScreenByReducer,
    counterScreenByReducer: CounterScreenByReducer,
    textScreen: TextScreen,
    countrySelectScreen: CountrySelectScreen,
    login: LoginScreen,
    forgetPassword: ForgetPassword,
    otpScreen: OtpScreen,
    recoveredPassword : RecoveredPassword,
  },
  {
    initialRouteName: 'countrySelectScreen',
    defaultNavigationOptions: {
      title: null,
      headerStyle: null,
      header: null,
    },
  }
);

export default createAppContainer(navigator);
