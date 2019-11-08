import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthyForm from "../components/AuthyForm";
import NavLink from "../navigation/NavLink";

const AuthyRegisterScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    console.log("STATE:", state);

    return (
        <View>
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
            <AuthyForm
                style={styles.phoneForm}
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
  logo: {
    alignSelf: "center",
    marginTop: 32,
    marginBottom: 32,
    height: 109,
    width: 225
  },
  newAcct: {
    marginLeft: 10,
  },   
  header: {
    marginTop: 10,
    width: "91%",
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "500"
  },
  description: {
    marginTop: 5,
    marginBottom: 32,
    width: "91%",
    paddingLeft: 10,
    fontSize: 18,
    color: "#7C7777"
  }
});

export default AuthyRegisterScreen;
