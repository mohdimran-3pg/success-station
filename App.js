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
import ResetPassword from "./src/screens/ResetPassword";
import UserSignUpForm from "./src/screens/UserSignUpForm";
import DashBoard from "./src/screens/dashboard/DashBoard"
import ChooseLanguageScreen from "./src/screens/ChooseLanguageScreen";




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
    resetPassword : ResetPassword,
    dashBoard: DashBoard,
    userSignUpForm: UserSignUpForm,
    chooseLanguageScreen: ChooseLanguageScreen,
  }, 
  {
    initialRouteName: 'chooseLanguageScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#F2F2F2',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(navigator);
