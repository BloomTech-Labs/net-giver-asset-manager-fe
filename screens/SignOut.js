import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

const SignOut = ({ navigation }) => {
  const logOut = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Landing");
  };

  return (
    <View>
      <TouchableOpacity style={styles.touchMe} onPress={logOut}>
        <Text>OMG GET ME OUT OF THIS APP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchMe: {
    alignSelf: "center",
    marginTop: 225,
    fontSize: 33
  },
  btn: {
    width: 343,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#3366FF",
    paddingBottom: 8
  }
});

export default SignOut;
