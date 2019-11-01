import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button, Image } from "react-native-elements";
import axios from "axios";
import { ActivityIndicator } from "react-native";
import Spacer from "../components/Spacer";

const avatarPicture = () => {
  const [photo, setPhoto] = useState("");

  // const photo = "https://i.imgur.com/kbBQbe7.jpg";

  const postImage = () => {
    // const data =
    axios
      .post("http://localhost:8080/api/files/001-1572473450899.JPG ", {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; `
        }
      })
      .then(res => {
        console.log("submite test:", res.data);
        setPhoto(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // useEffect(() => {
  //   setPhoto();
  // }, []);

  return (
    <View style={styles.container}>
      <Spacer />
      <Text>I'm a user profile form</Text>
      <Spacer />
      <Image
        source={{ uri: "https://i.imgur.com/ltNMlnA.png" }}
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Spacer />
      <Text>Please Take or add an Avatar Photo</Text>

      <TextInput
        style={styles.inputField}
        value={photo}
        placeholder="pic address"
        // onChangeText={e => setPhoto(e.target.value)}
      />
      {/* <TextInput style={styles.inputField} placeholder="username" /> */}
      <Spacer />
      <Button title="Submit Profile" onPress={postImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    height: 40,
    width: "91%",
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: "center",
    paddingLeft: 10,
    marginTop: 20
  },
  imageLoc: {
    alignSelf: "center"
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default avatarPicture;
