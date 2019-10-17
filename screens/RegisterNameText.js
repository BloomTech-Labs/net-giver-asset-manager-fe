// import React, { useState } from "react";
// import { Text, View, StyleSheet, Button } from "react-native";
// import { TextInput } from "react-native-gesture-handler";

// const RegisterNameScreen = ({ navigation }) => {
//   const [fname, setFname] = useState();
//   const [lname, setLname] = useState();

//   return (
//     <View>
//       <Text style={styles.title}>Simple Asset Tracker</Text>
//       <Text style={styles.label}>First Name</Text>
//       <TextInput
//         style={styles.input}
//         value={fname}
//         onChangeText={text => setFname(text)}
//       />
//       <Text style={styles.label}>Last Name</Text>
//       <TextInput
//         style={styles.input}
//         value={lname}
//         onChangeText={text => setLname(text)}
//       />
//       <Button
//         title="Next"
//         onPress={() => navigation.navigate("Username")}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     textAlign: "center",
//     fontSize: 20
//   },
//   input: {
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: "black",
//     marginBottom: 15,
//     padding: 5,
//     margin: 5
//   },
//   label: {
//     fontSize: 20,
//     marginBottom: 5,
//     marginLeft: 5
//   }
// });

// export default RegisterNameScreen;

import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import NavLink from "../navigation/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  console.log("signup test:", state);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <LoginForm
        headerText="Sign Up for Net Giver Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Login"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  }
});

export default SignupScreen;
