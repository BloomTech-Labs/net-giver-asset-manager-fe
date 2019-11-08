import React, { useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthyForm = ({ errorMessage, onSubmit, submitButtonText }) => {
  
    const [phone, setPhone] = useState("");

    return (
        <>
            <Text style={styles.inputLabels}>Phone Number</Text>
            <TextInput
                placeholder="(111) 111-1111"
                value={phone}
                onChangeText={setPhone}
                // keyboardType="number-pad"
                style={styles.inputField}
            />
            <Spacer />
            {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button
                    style={styles.registerButton}
                    title={submitButtonText}
                    iconRight={true}
                    onPress={() => onSubmit({ phone })}
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
  registerButton: {
    height: 40,
    marginLeft: 16,
    marginRight: 16
  }
});

export default AuthyForm;
