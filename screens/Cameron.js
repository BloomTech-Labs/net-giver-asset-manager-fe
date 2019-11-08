import * as React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { RNS3 } from "react-native-aws3";
import { ActivityIndicator } from "react-native";
import { Button, Image, Avatar, Text } from "react-native-elements";
import { AWS_SECRET_ACCESS_KEY, AWS_ACCESS_KEY } from "react-native-dotenv";
import Spacer from "../components/Spacer";
import { Entypo } from "@expo/vector-icons";

export default class Cameron extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null,
      userName: "",
      name: ""
    };
  }

  // handleinput = event => {
  //   event && event.preventDefault && event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  //   console.log(":", this.state.userName);
  // };
  handleinput = (name, value) => {
    this.setState(() => ({ [name]: value }));
  };

  render() {
    let { image } = this.state;
    let { userName } = this.state;

    console.log("state test:", userName);
    console.log(":", this.state.userName);
    console.log("name test:", this.state.name);

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Button
          title="Pick an image from camera roll"
          onPress={this.chooseImage}
        /> */}

        <Spacer>
          <Avatar
            PlaceholderContent={<ActivityIndicator />}
            source={
              image
                ? { uri: image }
                : { uri: "https://i.imgur.com/ltNMlnA.png" }
            }
            rounded
            size="xlarge"
          />
        </Spacer>
        <TouchableOpacity onPress={this.chooseImage}>
          <Entypo name="camera" size={30} />
        </TouchableOpacity>
        <Text>Change Photo</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          type="text"
          style={styles.inputField}
          placeholder="UserName"
          value={this.state.userName}
          onChangeText={val => this.handleinput("userName", val)}
          // onChangeText={this.handleinput}
          name="userName"
        />
        <Text style={styles.label}>AnotherField</Text>
        <TextInput style={styles.inputField} placeholder="anotherfield" />
        {/* <Button onPress={this.handleinput} /> */}

        {/* {image && (
          <Image
            style={styles.image}
            source={{ uri: image }}
            style={{ width: 300, height: 300 }}
          />
        )} */}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log("image test:", result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }

    const file = {
      uri: result.uri,
      name: "image.png",
      type: "image/png"
    };

    const options = {
      keyPrefix: `${this.state.userName}/`,
      bucket: "netgiver",
      region: "us-east-2",
      accessKey: AWS_ACCESS_KEY,
      secretKey: AWS_SECRET_ACCESS_KEY,
      successActionStatus: 201
    };
    console.log("options test", options);

    RNS3.put(file, options).then(res => {
      if (res.status !== 201) throw new Error("Failed to upload image to S3");
      console.log("upload to aws test", res.body);
    });
  };
}

const styles = StyleSheet.create({
  image: {
    borderColor: "red",
    borderWidth: 10
  },
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
  avatar: {
    marginBottom: 10
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5
  }
});
