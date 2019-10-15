import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const RegisterPasswordScreen = ({ navigation }) => {
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();

    return (
        <View>
            <Text style={styles.title}>Simple Asset Tracker</Text>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
                style={styles.input}
                value={confPassword}
                onChangeText={text => setConfPassword(text)}
            />
            <Button
                title="Register"
            // onPress={() => navigation.navigate("Register")}
            />

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

export default RegisterPasswordScreen;
