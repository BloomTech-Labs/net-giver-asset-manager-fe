import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from "./MainTabNavigator";
import RegisterScreen from "../screens/RegisterText";
import LoginScreen from "../screens/LoginText";
import AssetHistory from "../screens/AssetHistory";

// export default createAppContainer(
//   createSwitchNavigator({
//     // You could add another route here for authentication.
//     // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//     Main: MainTabNavigator,
//   })
// );

export default createAppContainer(
  createStackNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
      Register: RegisterScreen,
      Login: LoginScreen,
      AssetHistory: AssetHistory,
    },
    {
      initialRouteName: "Main",
      defaultNavigationOptions: {
        title: "Net Giver"
      }
    }
  )
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

// const App = createAppContainer(navigator);

// export default () => {
//   return (
//     <App />
//   )
// }
