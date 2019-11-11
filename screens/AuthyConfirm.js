import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthyCode from "./AuthyCode";
import NavLink from "../navigation/NavLink";

const AuthyConfirmScreen = ({ navigation }) => {
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
                <Text style={styles.header}>Enter your confirmation code.</Text>
                <Text style={styles.description}>
                    Please enter your authentication code.
                </Text>
                <Text style={styles.description2}>
                    If you need a new code, 
                    <Text 
                        style={styles.newCode}
                        // Send new auth code to phone when clicked
                        // onPress={() => }
                    > click here.
                    </Text>
                </Text>
            </View>
            <AuthyCode 
                style={styles.phoneForm}
                submitButtonText="Confirm"
                // onSubmit={}
            />

            {/* <NavLink
                routeName="AuthyRegister"
                text="Don't have an account? Register here."
            /> */}
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
    width: "91%",
    paddingLeft: 10,
    fontSize: 18,
    color: "#D9D9D9",
    textAlign: "center"
  },
  description2: {
    marginBottom: 32,
    width: "91%",
    paddingLeft: 10,
    fontSize: 18,
    color: "#D9D9D9",
    textAlign: "center"
  },
  newCode: {
    color: "#3366FF"
  }
});

export default AuthyConfirmScreen;
