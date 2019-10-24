import React from "react";
import { createAppContainer, createSwitchNavigator, createStackNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Provider as AuthProvider } from "../context/AuthContext";
import { Provider as LocationProvider } from "../context/LocationContext";
import { setNavigator } from "../navigationRef";
import HomeScreen from "../screens/HomeScreen";
import RegisterNameText from "../screens/RegisterNameText";
import LoginText from "../screens/LoginText";
import AssetHistory from "../screens/AssetHistory";
import Landing from "../screens/Landing";

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Register: RegisterNameText,
    Login: LoginText,
  }
);

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

const AppStack = createStackNavigator({
  Dashboard: DrawerNavigator,
    screen: AssetHistory
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
