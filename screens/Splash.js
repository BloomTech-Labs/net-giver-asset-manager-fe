import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Splash = ({ navigation }) => {
  // Use useEffect or ComponentDidMount to check sign-in status of user
  // If the user isn't signed in, direct to auth.  If user is, direct to app.

  // If you want to work on a particular screen, type "Dev" into the navigate
  // prop on line 13.  This will take you to the HomeScreen screen after leaving
  // the splash screen.  When you're done, change back to "Auth".

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Dev");
    }, 2000);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Net Giver's Asset Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3366FF",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
});

export default Splash;