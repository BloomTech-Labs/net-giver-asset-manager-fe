import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { Button, Icon } from "react-native-elements";
import NavLink from "../navigation/NavLink";

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View styles={styles.bottomZ}>
          <Image
            source={require("../assets/images/real_cog.jpg")}
          />
        </View>
        <View style={styles.topZ}>
          <View style={styles.logo}>
            <Image style={styles.topImg}
              source={require("../assets/images/assetTracker.jpg")}
            />
          </View>

          <Text style={styles.purpose}>Asset Tracker makes it simple to keep track of all assets.</Text>

          <View style={styles.mainPointsContainer}>
            <View style={styles.mainPoints}>
              <Icon
                name="check"
                color="blue"
              />
              <Text style={styles.text}>No trials.</Text>
            </View>
            <View style={styles.mainPoints}>
              <Icon
                name="check"
                color="blue"
              />
              <Text style={styles.text}>No more losing valuable items.</Text>
            </View>
            <View style={styles.mainPoints}>
              <Icon
                name="check"
                color="blue"
              />
              <Text style={styles.text}>No more time wasted looking for an asset.</Text>
            </View>
          </View>

          <View style={styles.button}>

            <Button
              title="Free Sign Up"
              onPress={() => navigation.navigate("Register")}
            />

          </View>

          <View style={styles.navLink}>
            <NavLink
              text="Have an account already?  Login here."
              routeName="Login"

            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    marginTop: 72,
  },
  purpose: {
    paddingTop: 40,
    paddingLeft: 50,
    marginTop: 56,
    marginBottom: 46,
    fontSize: 23,
    width: "50%",
  },
  mainPoints: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  mainPointsContainer: {
    flex: 0.2,
    paddingLeft: 15,
    width: "50%",
  },
  text: {
    fontSize: 18,
  },
  button: {
    backgroundColor: "#3366FF",
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    width: '50%'
  },
  navLink: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  bottomZ: {
    position: "absolute",
    zIndex: -1,
  },
  topZ: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  topImg: {
    top: "50%",
    left: 60,
    right: 60
  }
})

export default Landing;
