import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const RegisterScreen = ({ navigation }) => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();

  return (
    <View>
      {/* <Text style={styles.label}>Enter FirstName:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={text => setfirstName(text)}
      />
      <Text style={styles.label}>Enter lastName:</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={text => setlastName(text)}
      />
      <Text style={styles.label}>Enter Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.label}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" /> */}

      <Text>Simple Asset Tracker</Text>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={fname}
        onChangeText={text => setFname(text)}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={lname}
        onChangeText={text => setLname(text)}
      />
      <Button 
        title="Next" 
        onPress={() => navigation.navigate("Username")}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default RegisterScreen;
