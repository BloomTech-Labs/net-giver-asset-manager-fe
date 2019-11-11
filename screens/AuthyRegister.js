import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthyForm from "../components/AuthyForm";
import NavLink from "../navigation/NavLink";

import AuthyCode from "../components/AuthyCode";
import { TextInput } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthyRegisterScreen = ({ navigation }) => {
    
    const { state, clearErrorMessage } = useContext(AuthContext);
    console.log("STATE:", state);
    console.log("nav test", navigation);
    const [phone, setPhone] = useState("");

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
            {/* <AuthyForm
                style={styles.phoneForm}
                submitButtonText="Register"
                onSubmit={() => navigation.navigate("AuthyConfirm")}
                // onSubmit={authyregister}
                // onPress={() => navigate("AuthyConfirm")}
            /> */}
{/*  */}
            <Text style={styles.inputLabels}>Phone Number</Text>
              <TextInput
                  placeholder="(111) 111-1111"
                  value={phone}
                  onChangeText={setPhone}
                  // keyboardType="number-pad"
                  style={styles.inputField}
              />

              <Spacer />

              <AuthyForm
                onPress={() => navigation.navigate("AuthyConfirm")}
              />

              {/* {errorMessage ? (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
              ) : null} */}

              {/* <Spacer>
                  <Button
                      style={styles.registerButton}
                      title={submitButtonText}
                      iconRight={true}
                      // onPress={() => onSubmit({ phone })}
                      onPress={() => navigation.navigate("AuthyConfirm")}
                  />
              </Spacer> */}
{/*  */}

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
  // errorMessage: {
  //   fontSize: 16,
  //   color: "red",
  //   marginLeft: 15,
  //   marginTop: 15
  // },
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
  },
  // registerButton: {
  //   height: 40,
  //   marginLeft: 16,
  //   marginRight: 16
  // }
});

export default AuthyRegisterScreen;
