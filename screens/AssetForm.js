import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AssetForm = ({ navigation }) => {
  //   console.log("form test:", props.navigation.state.params);
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [other, setOther] = (useState = useState(""));

  const asset = navigation.getParam("asset");
  //   const asset = JSON.stringify(navigation.getParam("asset"));
  console.log("asset test", asset);

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("BarcodeScanner")}>
        <MaterialCommunityIcons
          style={styles.upc}
          name="qrcode-scan"
          size={40}
        />
      </TouchableOpacity>

      <Spacer>
        <Input
          label="Scan goes here"
          value={asset}
          //   onChangeText={setDescription}
          //   autoCapitalize="none"
          //   autoCorrect={false}
        />
      </Spacer>

      <Input
        label="Name"
        // value={name}
        // onChangeText={setName}
        // autoCapitalize="none"
        // autoCorrect={false}
      />
      <Spacer>
        <Input
          label="Description"
          //   value={description}
          //   onChangeText={setDescription}
          //   autoCapitalize="none"
          //   autoCorrect={false}
        />
      </Spacer>
      <Input
        label="Other"
        // value={other}
        // onChangeText={setOther}
        // autoCapitalize="none"
        // autoCorrect={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  upc: {
    marginBottom: 30,
    marginLeft: 185,
    marginTop: 20
  }
});

export default AssetForm;
