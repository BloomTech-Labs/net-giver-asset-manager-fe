import React, { useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "./Spacer";
import { UserNameContext } from "../context/UsernameContext";

const LoginForm = ({ errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  return (
    <>
      <UserNameContext.Provider value={{ username }}>
        <Text style={styles.inputLabels}>UserName</Text>
        <TextInput
          placeholder="UserName"
          value={username}
          onChangeText={setUserName}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputField}
        />
        <Spacer />

        <Text style={styles.inputLabels}>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputField}
        />
        <Spacer />

        <Text style={styles.inputLabels}>Password</Text>
        <TextInput
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputField}
        />
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <Spacer>
          <Button
            title={submitButtonText}
            iconRight={true}
            onPress={() => onSubmit({ email, password })}
            style={{ marginTop: 80 }}
          />
        </Spacer>
      </UserNameContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15
  },
  inputField: {
    height: 40,
    width: "91%",
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: "center",
    paddingLeft: 10,
    marginTop: 20
  },
  inputLabels: {
    width: "91%",
    alignSelf: "center",
    fontSize: 17
  }
});

export default LoginForm;
