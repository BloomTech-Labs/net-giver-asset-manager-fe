import React, { useEffect } from "react";
import { View, Text } from "react-native";

const Landing = ({ navigation }) => {
  // Use useEffect or ComponentDidMount to check sign-in status of user
  // If the user isn't signed in, direct to auth.  If user is, direct to app.

  // If you want to work on a particular screen, type "Dev" into the navigate
  // prop on line 13.  This will take you to the HomeScreen screen after leaving
  // the splash screen.  When you're done, change back to "Auth".
  useEffect(() => {
    setTimeout(() => {
      console.log("Take to login in 2 seconds")
      navigation.navigate("Auth")
    }, 1000);
  })
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Loading...</Text>
    </View>
  );
};

export default Landing;