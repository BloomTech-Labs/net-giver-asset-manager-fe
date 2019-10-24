import React, { useEffect } from "react";
import { View, Text } from "react-native";

const Landing = ({ navigation }) => {
  // Use useEffect or ComponentDidMount to check sign-in status of user
  // If the user isn't signed in, direct to auth.  If user is, direct to app.

  useEffect(() => {
    const timer = setTimeout(() => {
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