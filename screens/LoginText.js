// import React, { useState, useContext } from "react";
// import { Text, View, StyleSheet, Button, TextInput } from "react-native";
// import { Context } from "../context/AuthContext";

// const LoginScreen = ({ navigation }) => {
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();

//   const { state, signin } = useContext(Context);

//   return (
//     <View>
//       <Text style={styles.title}>Simple Asset Tracker</Text>
//       <Text style={styles.label}>Username:</Text>
//       <TextInput
//         label="UserName"
//         style={styles.input}
//         value={username}
//         autoCapitalize="none"
//         autoCorrect={false}
//         onChangeText={text => setUsername(text)}
//       />
//       <Text style={styles.label}>Password:</Text>
//       <TextInput
//         style={styles.input}
//         value={password}
//         onChangeText={text => setPassword(text)}
//       />

//       {/* TODO: add reset pw/username */}
//       <Text>Forgot password or username? Click here.</Text>

//       <Button title="Login" />

//       <Text>
//         Don't have an account? Register
//         <Text
//           style={{ color: "blue" }}
//           onPress={() => navigation.navigate("Register")}
//         >
//           {" "}
//           here
//         </Text>
//       </Text>
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

// export default LoginScreen;

import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationEvents } from "react-navigation";
import LoginForm from "../components/LoginForm";
import NavLink from "../navigation/NavLink";
import { Context } from "../context/AuthContext";

const LoginText = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <LoginForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Register"
      />
    </View>
  );
};
LoginText.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  }
});

export default LoginText;
