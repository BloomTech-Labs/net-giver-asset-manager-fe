import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import NavLink from "../navigation/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  console.log("STATE:", state);

  return (
    <View style={styles.container}>
      <Text style={styles.step1}>Step 1 of 2</Text>
      <Text style={styles.slogan}>
        Asset Tracker is free and easy to use!
      </Text>
      <Text style={styles.description}>
        Simply fill out this registration form and you're on your way.
      </Text>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <LoginForm
        headerText="Sign Up for Net Giver Tracker"
        errorMessage={clearErrorMessage}
        submitButtonText="Register"
        onSubmit={signup}
      />
      <NavLink
        routeName="Login"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFEFE"
  },
  step1: {
    position: "absolute",
    top: 8,
    left: 8,
    fontSize: 13,
  },
  slogan: {
    marginTop: 5,
    marginBottom: 32,
    width: "91%",
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "500",
    color: "black"
  },
  description: {
    fontSize: 17,
    color: "#BFBFBF",
    width: "90%",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default SignupScreen;
