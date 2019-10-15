import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from "./MainTabNavigator";
import RegisterScreen from "../screens/RegisterText";
import RegisterEmailScreen from "../screens/RegisterEmailText";
import RegisterUsernameScreen from "../screens/RegisterUsernameText";
import RegisterPasswordScreen from "../screens/RegisterPasswordText";
import LoginScreen from "../screens/LoginText";
import AssetHistory from "../screens/AssetHistory";
import BarcodeScanner from "../screens/BarcodeScanner";
import { Provider as AuthProvider } from "../context/AuthContext";

// export default createAppContainer(
//   createSwitchNavigator({
//     // You could add another route here for authentication.
//     // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//     Main: MainTabNavigator,
//   })
// );

// export default createAppContainer(
//   createStackNavigator(
//     {
//       // You could add another route here for authentication.
//       // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//       Main: MainTabNavigator,
//       Register: RegisterScreen,
//       Login: LoginScreen,
//       AssetHistory: AssetHistory,
//       BarcodeScanner: BarcodeScanner,
//     },
//     {
//       initialRouteName: "Main",
//       defaultNavigationOptions: {
//         title: "Net Giver"
//       }
//     }
//   )
// );

const stackNavigator = createStackNavigator(
  {
    Main: MainTabNavigator,
    Register: RegisterScreen,
    Email: RegisterEmailScreen,
    Username: RegisterUsernameScreen,
    Password: RegisterPasswordScreen,
    Login: LoginScreen,
    AssetHistory: AssetHistory,
    BarcodeScanner: BarcodeScanner
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      title: "Net Giver"
    }
  }
);

// const navigator = createStackNavigator(
//   {
//     Register: RegisterScreen,
//     Login: LoginScreen
//   },
//   {
//     initialRouteName: 'Main',
//     defaultNavigationOptions: {
//       title: "Net Giver"
//     }
//   }
// )

const App = createAppContainer(stackNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
