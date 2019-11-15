import React from "react";
import { SafeAreaView, View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator, screenProps
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
import TextMsg from "../screens/TextMsg";
import SmsLogin from "../screens/SmsLogin";
import OneAsset from "../screens/assets/singleAsset/OneAsset";

console.disableYellowBox = true;

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
    AssetsCard: AssetsCard,
    Ipick: Cameron,
    Contact: Contact,
    Legal: Legal,
    About: About,
    Text: TextMsg,
    SmsLogin: SmsLogin,
    // SingleAssetCard: SingleAssetCard,
    // OneAsset: OneAsset,
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

const SingleAssetScreen = createStackNavigator({
  SingleAssetScreen: {
    screen: SingleAssetCard,
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
      ),
      headerLeft: (
        <SafeAreaView>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
              <Icon name="arrow-back" size={30} color="black" />
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

const AssetsScreen = createStackNavigator({
  DashboardScreen: {
    screen: AssetsList,
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
      ),
      headerLeft: (
        <SafeAreaView>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
              <Icon name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )
    })
  }
});

const AssetsAddScreen = createStackNavigator({
  DashboardScreen: {
    screen: AssetsAdd,
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
      ),
      headerLeft: (
        <SafeAreaView>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
              <Icon name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )
    })
  }
});

const LocationScreen = createStackNavigator({
  DashboardScreen: {
    screen: LocationForm,
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
      ),
      headerLeft: (
        <SafeAreaView>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
              <Icon name="arrow-back" size={30} color="black" />
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
    Assets: {
      screen: AssetsScreen
    },
    SingleAssetDrawer: {
      screen: SingleAssetScreen,
    },
    AssetsCardDrawer: {
      screen: AssetsCard
    },
    Add: {
      screen: AssetsAddScreen
    },
    Location: {
      screen: LocationScreen
    }
  },
  {
    contentComponent: CustomDrawer,
    drawerPosition: "right",
    contentOption: {
      activeTintColor: "grey"
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Landing: {
      screen: Landing,
      navigationOptions: props => ({
        headerMode: "none"
      })
    },
    SMS: {
      screen: SmsLogin,
      navigationOptions: props => ({
        title: "Sign In",
        headerStyle: {
          backgroundColor: "#FEFEFE"
        },
        headerTitleStyle: {
          color: "black",
          fontSize: 20,
          fontWeight: "500"
        },
        headerLeft: (
          <SafeAreaView>
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                <Icon name="arrow-back" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )
      })
    },
    Login: {
      screen: LoginText,
      navigationOptions: props => ({
        title: "Sign In",
        headerStyle: {
          backgroundColor: "#FEFEFE"
        },
        headerTitleStyle: {
          color: "black",
          fontSize: 20,
          fontWeight: "500"
        },
        headerLeft: (
          <SafeAreaView>
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                <Icon name="arrow-back" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )
      })
    },
    Register: {
      screen: RegisterNameText,
      navigationOptions: props => ({
        title: "Create Account",
        headerStyle: {
          backgroundColor: "#FEFEFE"
        },
        headerTitleStyle: {
          color: "black",
          fontSize: 20,
          fontWeight: "500"
        },
        headerLeft: (
          <SafeAreaView>
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                <Icon name="arrow-back" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )
      })
    },
    Cameron: {
      screen: Cameron,
      navigationOptions: props => ({
        title: "Create Account",
        headerStyle: {
          backgroundColor: "#FEFEFE"
        },
        headerTitleStyle: {
          color: "black",
          fontSize: 20,
          fontWeight: "500"
        },
        headerLeft: (
          <SafeAreaView>
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                <Icon name="arrow-back" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )
      })
    }
  },
  {
    initialRouteName: "Landing"
  }
);

const RootNavigation = createSwitchNavigator(
  {
    Splash: {
      screen: Splash
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
    initialRouteName: "Auth"
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