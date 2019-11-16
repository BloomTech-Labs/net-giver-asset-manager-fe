import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import NavLink from "../navigation/NavLink";


const Landing = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        {/* <View styles={styles.bottomZ}>
          <Image source={require("../assets/images/real_cog.jpg")} />
        </View> */}

        <View style={styles.logo}>
          <Image
            style={styles.topImg}
            source={require("../assets/images/assetTracker.jpg")}
          />
        </View>

        <View style={styles.landingImage}>
          <Image
            style={styles.middleImg}
            source={require("../assets/images/landing.jpg")}
          />
        </View>

        <View>
          <View style={styles.purposeContainer}>
            <Text style={styles.purpose}>
              <Text style={styles.blueTitle}>Asset Tracker</Text> makes it easy to keep track of all items.
            </Text>
          </View>

          {/* <View style={styles.mainPointsContainer}>
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
          </View> */}
        </View>

        <View style={styles.buttons}>
          <Button
            buttonStyle={styles.registerBtn}
            title="Free Sign Up"
            onPress={() => navigation.navigate("SMS")}
            // onPress={() => navigation.navigate("OneAsset")}
          />
  
          <Button
            buttonStyle={styles.loginBtn}
            titleStyle={{ color: '#3366FF' }}
            type="outline"
            title="Log In Here"
            onPress={() => navigation.navigate("SMS")}
          />
        </View>

        {/* <View
          style={[
            {
              alignSelf: "center",
              padding: 2,
              width: "100%",
              position: "relative",
              top: "65%"
            }
          ]}
        >
          <View style={styles.buttonWrapper}>
            <Button
              buttonStyle={styles.btn}
              title="Free Sign Up"
              onPress={() => navigation.navigate("Ipick")}
            />
          </View>

          <View style={styles.navLink}>
            <NavLink
              text="Have an account already?  Login here."
              routeName="SMS"
            />
          </View>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center"
  },
  topImg: {
    marginTop: 5
  },
  logo: {
    marginTop: 0,
    marginLeft: 75,
    marginRight: 75,
    alignSelf: "center"
  },
  landingImage: {
    alignSelf: "center"
  },
  middleImg: {
    marginTop: 10,
    marginBottom: 5,
    width: 350,
    height: 355
  },
  blueTitle: {
    color: "#3366FF"
  },
  purposeContainer: {
    alignItems: "center",
    marginTop: -45,
    marginBottom: 25,
  },
  purpose: {
    fontSize: 23,
    width: "60%",
    textAlign: "center"
  },
  buttons: {
    marginLeft: 20,
    marginRight: 20
  },
  registerBtn: {
    backgroundColor: "#3366FF",
    borderRadius: 15,
    marginBottom: 20
  },
  loginBtn: {
    borderColor: "#3366FF",
    backgroundColor: "white",
    borderRadius: 15
  }
  // btnWrapper: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  // btn: {
  //   width: 343,
  //   height: 40,
  //   borderRadius: 15,
  //   backgroundColor: "#3366FF"
  // }
});

export default Landing;
