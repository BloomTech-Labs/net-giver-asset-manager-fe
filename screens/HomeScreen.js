import React from "react";
import { Platform, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "galio-framework";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* <Text h2>Hey, Welcome to Net Giver Asset Manager</Text> */}
      </View>
      <Spacer>
        <Button
          title="Asset Entry"
          onPress={() => navigation.navigate("AssetForm")}
        />
      </Spacer>
      <Spacer>
        <Button
          title="navigation test to Register"
          onPress={() => navigation.navigate("Register")}
        />
      </Spacer>
      <Spacer>
        <Button
          title="navigation test to Login"
          onPress={() => navigation.navigate("Login")}
        />
      </Spacer>
      <Spacer>
        <Button
          title="Asset History"
          onPress={() => navigation.navigate("AssetHistory")}
        />
      </Spacer>
      <Spacer>
        {/* <Button
          title="SCAN NOW!"
          onPress={() => navigation.navigate("BarcodeScanner")}
        /> */}
      </Spacer>
      {/* <Button
        title="Say Cheese"
        onPress={() => navigation.navigate("Camera")}
      /> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate("BarcodeScanner")}>
        <MaterialCommunityIcons
          style={styles.upc}
          name="qrcode-scan"
          size={40}
        />
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <FontAwesome style={styles.camera} name="camera-retro" size={40} />
      </TouchableOpacity>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30,
    paddingLeft: 30,
    textAlign: "center"
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  camera: {
    marginLeft: 185,
    marginTop: 15
  },
  upc: {
    marginBottom: 30,
    marginLeft: 185
  }
});
