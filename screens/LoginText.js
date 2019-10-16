import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <View>
      <Text style={styles.title}>Simple Asset Tracker</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {/* TODO: add reset pw/username */}
      <Text>Forgot password or username? Click here.</Text>

      <Button title="Login" />
      
      <Text>Don't have an account? Register  
        <Text style={{ color: 'blue'}}
          onPress={() => navigation.navigate("Register")}> here</Text>
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
  },
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

export default LoginScreen;
