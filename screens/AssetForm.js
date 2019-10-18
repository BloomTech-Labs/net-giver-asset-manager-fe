import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

const AssetForm = () => {
  //   const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [other, setOther] = (useState = useState(""));

  return (
    <>
      <Spacer>
        <Input
          label="Scan goes here"
          //   value={description}
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

const styles = StyleSheet.create({});

export default AssetForm;
