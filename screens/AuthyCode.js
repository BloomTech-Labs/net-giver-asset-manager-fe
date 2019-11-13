import React, { useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";

import AuthyRegusterScreen from "./AuthyRegister";

const AuthyCode = ({ phone, errorMessage, onSubmit, submitButtonText }) => {
  
    const [verifyCode, setVerifyCode] = useState("");
    console.log(phone);

    return (
        <>
            <Text style={styles.inputLabels}>
                {/* Phone Number: */}
                Phone Number: {phone}
                <Text style={styles.changeNum}> change</Text>
            </Text>

            <TextInput
                placeholder="1234"
                value={verifyCode}
                onChangeText={setVerifyCode}
                // keyboardType="number-pad"
                style={styles.inputField}
            />
            
            <Spacer />

            {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}

            <Spacer>
                <Button
                    style={styles.confirmButton}
                    title={submitButtonText}
                    iconRight={true}
                    onPress={() => onSubmit({ verifyCode })}
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
  confirmButton: {
    height: 40,
    marginLeft: 16,
    marginRight: 16
  },
  changeNum: {
    color: "#3366FF"
  }
});

export default AuthyCode;
