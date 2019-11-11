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
      <Text style={styles.header}>Create an account</Text>
      <Text style={styles.description}>
        Anybody is welcome to use Asset Tracker for free once you sign up!
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
    backgroundColor: "#EFEFF4"
  },
  header: {
    marginTop: 10,
    width: "91%",
    paddingLeft: 10,
    fontSize: 25,
    fontWeight: "500"
  },
  description: {
    marginTop: 5,
    marginBottom: 50,
    width: "91%",
    paddingLeft: 10,
    fontSize: 18,
    color: "#7C7777"
  }
});

export default SignupScreen;
