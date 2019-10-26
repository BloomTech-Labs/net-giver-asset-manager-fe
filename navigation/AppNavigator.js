import React from "react";
import { createAppContainer, createSwitchNavigator, createStackNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Provider as AuthProvider } from "../context/AuthContext";
import { Provider as LocationProvider } from "../context/LocationContext";
import { setNavigator } from "../navigationRef";
import RegisterNameText from "../screens/RegisterNameText";
import LoginText from "../screens/LoginText";
import AssetHistory from "../screens/AssetHistory";
import Landing from "../screens/Landing";
import BarcodeScanner from "../screens/BarcodeScanner";
import HomeScreen from "../screens/HomeScreen";
import AssetForm from "../screens/AssetForm";
import LocationForm from "../screens/LocationForm";
import CustomDrawer from "../components/CustomDrawer";

const DevStack = createStackNavigator({
  Home: HomeScreen,
  AssetForm: AssetForm,
  BarcodeScanner: BarcodeScanner,
  Location: LocationForm,
},
{
  initialRouteName: "Home"
});

const AppStack = createDrawerNavigator({
  History: AssetHistory,
  Scanner: BarcodeScanner,
  Register: RegisterNameText,
  Login: LoginText,
},
{
  initialRouteName: "History",
  contentComponent: CustomDrawer,
  contentOption: {
    activeTintColor: "grey",
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginText,
    navigationOptions: {
      headerTitle: "Login"
    },
  },
  Landing: {
    screen: Landing,
    navigationOptions: {
      headerTitle: "Landing"
    },
  },
  Register: {
    screen: RegisterNameText,
    navigationOptions: {
      headerTitle: "Register"
    },
  },
});

const RootNavigation = createSwitchNavigator({
  Landing: {
    screen: Landing,
  },
  App: {
    screen: AppStack,
  },
  Auth: {
    screen: AuthStack,
  },
  Dev: {
    screen: DevStack,
  },
},
{
  initialRouteName: "Landing",
});

const AppContainer = createAppContainer(RootNavigation);

export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <AppContainer
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </LocationProvider>
    </AuthProvider>   
  );
};
