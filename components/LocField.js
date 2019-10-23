import React, { useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "./Spacer";

const LocField = ({ errorMessage, onSubmit, submitButtonText }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Text style={styles.inputLabels}>Location Name</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputField}
      />
      <Spacer />

      <Text style={styles.inputLabels}>Description</Text>
      <TextInput
        placeholder="Describe Location"
        value={description}
        onChangeText={setDescription}
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
          onPress={() => onSubmit({ name, description })}
          style={{ marginTop: 80 }}
        />
      </Spacer>
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

export default LocField;
