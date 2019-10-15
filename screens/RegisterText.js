import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const RegisterScreen = ({ navigation }) => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();

  return (
    <View>
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
