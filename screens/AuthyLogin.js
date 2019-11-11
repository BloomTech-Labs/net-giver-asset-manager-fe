import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthyForm from "./AuthyForm";
import NavLink from "../navigation/NavLink";

const AuthyLoginScreen = ({ navigation }) => {
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
            <View style={styles.loginAcct}>
                <Text style={styles.header}>Welcome back!</Text>
                <Text style={styles.description}>
                    Please enter your 10-digit phone number to receive your authentication code.
                </Text>
            </View>
            <AuthyForm
                style={styles.phoneForm}
                submitButtonText="Continue"
                onSubmit={signup}
            />
            <NavLink
                routeName="AuthyRegister"
                text="Don't have an account? Register here."
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
  loginAcct: {
    marginLeft: 10
  },   
  header: {
    marginTop: 10,
    width: "91%",
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center"
  },
  description: {
    marginTop: 5,
    marginBottom: 32,
    width: "91%",
    paddingLeft: 10,
    fontSize: 18,
    color: "#D9D9D9",
    textAlign: "center"
  }
});

export default AuthyLoginScreen;
