import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthyForm from "./AuthyForm";
import NavLink from "../navigation/NavLink";

const AuthyRegisterScreen = ({ props, navigation }) => {
    
    const { authyregister, state, clearErrorMessage } = useContext(AuthContext);
    console.log("STATE:", state);
    // console.log("nav test", navigation);
    const [phone, setPhone] = useState("");
    console.log(phone);

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

            <Text style={styles.inputLabels}>Phone Number</Text>
            <TextInput
                placeholder="(111) 111-1111"
                value={phone}
                onChangeText={setPhone}
                // keyboardType="number-pad"
                style={styles.inputField}
            />

            <AuthyForm
                style={styles.phoneForm}
                submitButtonText="Register"
                onSubmit={authyregister}
            />
            <NavLink
                routeName="AuthyLogin"
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
    color: "#D9D9D9"
  },
  inputField: {
    height: 40,
    width: "91%",
    borderColor: "#D9D9D9",
    borderRadius: 8,
    borderWidth: 1,
    alignSelf: "center",
    paddingLeft: 10,
    marginTop: 20,
    fontSize: 17
  },
  inputLabels: {
    width: "91%",
    alignSelf: "center",
    fontSize: 17,
  }
});

export default AuthyRegisterScreen;
