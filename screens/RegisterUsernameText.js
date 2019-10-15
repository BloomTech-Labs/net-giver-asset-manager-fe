import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const RegisterUsernameScreen = ({ navigation }) => {
    const [username, setUsername] = useState();

    return (
        <View>
            <Text style={styles.title}>Simple Asset Tracker</Text>
            <Text style={styles.label}>Username:</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <Button
                title="Next"
                onPress={() => navigation.navigate("Email")}
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

export default RegisterUsernameScreen;
