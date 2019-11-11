import React from "react";
import { SafeAreaView, View, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Provider as AuthProvider } from "../context/AuthContext";
import { Provider as LocationProvider } from "../context/LocationContext";
import { setNavigator } from "../navigationRef";
import RegisterNameText from "../screens/Register";
import LoginText from "../screens/LoginText";
import AssetHistory from "../screens/AssetHistory";
import Landing from "../screens/Landing";
import BarcodeScanner from "../screens/BarcodeScanner";
import HomeScreen from "../screens/HomeScreen";
import AssetsAdd from "../screens/assets/AssetsAdd";
import LocationForm from "../screens/LocationForm";
import Camera from "../screens/Camera";
import Previewer from "../screens/PictureCapturePreview";
import AssetsList from "../screens/assets/AssetsList";
import getImage from "../screens/getImage";
import ImageUpload from "../screens/ImageUpload";
import Splash from "../screens/Splash";
import CustomDrawer from "../components/CustomDrawer";
import SingleAssetCard from "../screens/assets/singleAsset/SingleAssetCard";
import AssetsCard from "../screens/assets/AssetsCard";
import Cameron from "../screens/Cameron";
import Contact from "../screens/Contact";
import Legal from "../screens/Legal";
import About from "../screens/About";

import AuthyRegisterScreen from "../screens/AuthyRegister";
import AuthyLoginScreen from "../screens/AuthyLogin";

const DevStack = createStackNavigator(
  {
    Home: HomeScreen,
    AssetsAdd: AssetsAdd,
    BarcodeScanner: BarcodeScanner,
    Location: LocationForm,
    AssetHistory: AssetHistory,
    AssetList: AssetsList,
    Camera: Camera,
    Previewer: Previewer,
    Avatar: getImage,
    Upload: ImageUpload,
    SingleAssetCard: SingleAssetCard,
    AssetsCard: AssetsCard,
    Ipick: Cameron,
    Contact: Contact,
    Legal: Legal,
    About: About,
    AuthyRegister: AuthyRegisterScreen,
    AuthyLogin: AuthyLoginScreen,
    AuthyConfirm: AuthyConfirmScreen
  },
  {
    initialRouteName: "Home"
  }
);

const DashboardScreen = createStackNavigator({
  DashboardScreen: {
    screen: AssetHistory,
    navigationOptions: props => ({
      title: "Simple Asset Tracker",
      headerStyle: {
        backgroundColor: "#EFEFF4"
      },
      headerTitleStyle: {
        color: "black",
        fontSize: 20,
        fontWeight: "500"
      },
      headerRight: (
        <SafeAreaView>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Icon name="menu" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )
    })
  }
});

const ScannerScreen = createStackNavigator({
  DashboardScreen: {
    screen: BarcodeScanner,
    navigationOptions: props => ({
      title: "Scanner",
      headerTitleStyle: {
        color: "white"
      },
      headerTransparent: true,
      headerRight: (
        <SafeAreaView>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Icon name="menu" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ),
      headerLeft: (
        <SafeAreaView>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
              <Icon name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )
    })
  }
});

const AppStack = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardScreen
    },
    Scanner: {
      screen: ScannerScreen
    },
    Register: RegisterNameText,
    Login: LoginText
  },
  {
    contentComponent: CustomDrawer,
    drawerPosition: "right",
    contentOption: {
      activeTintColor: "grey"
    }
  }
);

const AuthStack = createStackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      headerTitle: "Landing"
    }
  },
  Login: {
    screen: LoginText,
    navigationOptions: {
      headerTitle: "Login"
    }
  },
  Register: {
    screen: RegisterNameText,
    navigationOptions: {
      headerTitle: "Register"
    }
  }
});

const RootNavigation = createSwitchNavigator(
  {
    Splash: {
      screen: Splash
    },
    Landing: {
      screen: Landing
    },
    Cameron: {
      screen: Cameron
    },
    App: {
      screen: AppStack
    },
    Auth: {
      screen: AuthStack
    },
    Dev: {
      screen: DevStack
    }
  },
  {
    initialRouteName: "Landing"
  }
);

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

const styles = StyleSheet.create({
  stackHeader: {
    backgroundColor: "#3366FF"
  }
});
