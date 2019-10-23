import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Text from "../components/CustomText";
import AssetForm from "../screens/AssetForm";
import Camera from "../screens/Camera";
import MainTabNavigator from "./MainTabNavigator";
import RegisterNameScreen from "../screens/RegisterNameText";
import RegisterEmailScreen from "../screens/RegisterEmailText";
import RegisterUsernameScreen from "../screens/RegisterUsernameText";
import RegisterPasswordScreen from "../screens/RegisterPasswordText";
import LoginScreen from "../screens/LoginText";
import AssetHistory from "../screens/AssetHistory";
import BarcodeScanner from "../screens/BarcodeScanner";
import { Provider as AuthProvider } from "../context/AuthContext";
import { Provider as AssetProvider } from "../context/AssetContext";
import { setNavigator } from "../navigationRef";
import AssetsList from "../screens/assets/AssetsList";
import LocationForm from "../screens/LocationForm";

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
    Register: RegisterNameScreen,
    Email: RegisterEmailScreen,
    Username: RegisterUsernameScreen,
    Password: RegisterPasswordScreen,
    Login: LoginScreen,
    AssetHistory: AssetHistory,
    BarcodeScanner: BarcodeScanner,
    Camera: Camera,
    AssetsList: AssetsList,
    AssetForm: AssetForm,
    Location: LocationForm
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
      <AssetProvider>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </AssetProvider>
    </AuthProvider>
  );
};
