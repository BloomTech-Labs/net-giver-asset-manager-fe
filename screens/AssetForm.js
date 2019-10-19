import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import Spacer from "../components/Spacer";

const AssetForm = ({navigation}) => {
  const [name, setName] = useState("");
  const [userID, setUserID] = useState("");
  const [checkedIn, setCheckedIn] = useState(false);

  // This function can make our POST request to the backend
  const handleSubmit = () => {
    console.log("You have successfully added this asset to the database.");
  };

  const asset = navigation.getParam(("asset"));

  return (
    <>
      <Spacer>
        <Input
          label="Barcode"
          value={asset}
          autoCapitalize={false}
          blurOnSubmit={true}
        />
      </Spacer>

      <Spacer>
        <Input
          label="Name"
          value={name}
          onChange={setName}
          autoCapitalize="word"
          autoCorrect={false}
          blurOnSubmit={true}
        />
      </Spacer>

      <Spacer>
        <Input
          label="Checked in"
          value={checkedIn}
          onChangeText={setCheckedIn}
          defaultValue="false"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>

      <Spacer>
        <Input
          label="User ID"
          value={userID}
          onChangeText={setUserID}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>

      <Button 
        title="Submit"
        iconRight={false}
        type="solid"
        color="blue"
        onPress={handleSubmit}
        icon={
          <Icon 
            name="check"
            color="white"
          />
        }
        containerStyle={styles.button}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    alignSelf: "center",
  }
});

export default AssetForm;
