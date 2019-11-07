import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
// import LoginForm from "../components/LoginForm";
import AuthyForm from "../components/AuthyForm";
import NavLink from "../navigation/NavLink";

const AuthyRegisterScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  console.log("STATE:", state);

  return (
    <View style={styles.container}>
        <View style={{ display: "flex" }}>
            <Image
                source={require("../assets/images/assetTracker.jpg")}
                style={styles.logo}
            />
        </View>
        <View style={styles.newAcct}>
            <Text style={styles.header}>Create an account</Text>
            <Text style={styles.description}>
                Anybody is welcome to use Asset Tracker for free once you sign up!
            </Text>
        </View>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        {/* <LoginForm
            headerText="Sign Up for Net Giver Tracker"
            errorMessage={clearErrorMessage}
            submitButtonText="Register"
            onSubmit={signup}
        /> */}

        <AuthyForm 
            submitButtonText="Register"
            onSubmit={signup}
        />

        <NavLink
            style={styles.loginLink}
            routeName="Login"
            text="Already have an account? Sign in instead!"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
    height: 109,
    width: 225
  },
  newAcct: {
    marginLeft: 10
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
  },
  loginLink: {
    alignSelf: "center",
    alignContent: "center"
  }
});

export default AuthyRegisterScreen;
