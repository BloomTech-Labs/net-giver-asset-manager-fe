import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { Button, Icon } from "react-native-elements";
import NavLink from "../navigation/NavLink";

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.bottomZ}>
        <Image source={require("../assets/images/real_cog.jpg")} />
      </View>
      <View style={styles.topZ}>
        <View style={styles.logo}>
          <Image source={require("../assets/images/assetTracker.jpg")} />
        </View>

        <Text style={styles.purpose}>
          Asset Tracker makes it simple to keep track of all assets.
        </Text>

        <View style={styles.mainPointsContainer}>
          <View style={styles.mainPoints}>
            <Icon name="check" color="blue" />
            <Text style={styles.text}>No trials.</Text>
          </View>
          <View style={styles.mainPoints}>
            <Icon name="check" color="blue" />
            <Text style={styles.text}>No more losing valuable items.</Text>
          </View>
          <View style={styles.mainPoints}>
            <Icon name="check" color="blue" />
            <Text style={styles.text}>
              No more time wasted looking for an asset.
            </Text>
          </View>
        </View>

        <Button
          title="Free Sign Up"
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        />

        <NavLink
          text="Have an account already?  Login here."
          routeName="Login"
          style={styles.navLink}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignSelf: "center"
    // justifyContent: "center",
    // alignItems: "center"
  },
  logo: {
    marginTop: 72
  },
  purpose: {
    marginTop: 46,
    marginBottom: 46,
    fontSize: 23,
    width: "50%"
  },
  mainPoints: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5
  },
  mainPointsContainer: {
    flex: 1
  },
  text: {
    fontSize: 18
  },
  button: {
    backgroundColor: "#3366FF",
    marginTop: 32,
    borderRadius: 5
  },
  navLink: {
    margin: "auto"
  },
  bottomZ: {
    position: "absolute",
    zIndex: -1
  },
  topZ: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0
  }
});

export default Landing;
