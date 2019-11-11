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
import axios from "axios";
// import { UsernameContext } from "../context/UsernameContext";
// import { useContext } from "react";
// import { username } from "../context/AuthContext";
// import AuthContext from "../context/AuthContext";

export default class Cameron extends React.Component {
  constructor(props) {
    super(props);
    console.log("cameron:", props);
    this.state = {
      image: null,
      userName: "",
      name: ""
    };
  }

  handleinput = (name, value) => {
    this.setState(() => ({ [name]: value }));
  };

  render() {
    // const { updateUserName } = useContext(AuthContext);
    let { image } = this.state;
    let { userName } = this.state;
    // let username = this.context;

    // console.log("state test with context:", username);
    console.log(":", this.state.userName);
    console.log("name test:", this.state.name);
    // const { signup } = useContext(AuthContext);
    // console.log("testContextdata", signup);

    return (
      <View style={{ flex: 0, alignItems: "center", justifyContent: "center", top: 50 }}>
        {/* <Button
          title="Pick an image from camera roll"
          onPress={this.chooseImage}
        /> */}
        <Text style={[{ fontSize: 33, textAlign: 'center' }, styles.welcome]}>
          Welcome <Text style={{ color: '#3366FF' }}>Monique Smith!</Text>

        </Text>
        <Text style={{ color: 'lightgrey', fontSize: 22, padding: 20 }}>
          You are almost there, the final step is to add your avatar picture
        </Text>

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
          <Entypo name="camera" size={30} color="#3366FF" />
        </TouchableOpacity>
        <Text>Add Photo</Text>

        {/* <TouchableOpacity style={{ backgroundColor: 'pink' }}> */}

        <View style={{
          backgroundColor: '#3366FF', width: '80%',
          borderRadius: 20,
          overflow: "hidden",
          width: "80%",
          alignSelf: "center",
          top: '30%',
          padding: 5,

        }}>
          <Button title="Next" color="red" />
        </View>
        {/* </TouchableOpacity> */}



        {/* <Text style={styles.label}>Name</Text> */}
        {/* <TextInput
          type="text"
          style={styles.inputField}
          placeholder="UserName"
          value={this.state.userName}
          onChangeText={val => this.handleinput("userName", val)}
          // onChangeText={this.handleinput}
          name="userName"
        /> */}
        {/* <Text style={styles.label}>AnotherField</Text>
        <TextInput style={styles.inputField} placeholder="anotherfield" /> */}
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
      const imageUrl = res.data.postResponse.location;
      const Id = res.data.postResponse.key;
      // if (res.status === 201) {
      //   axios.post("http://localhost:8000/api/location").then(res => {
      //     console;
      //   });
      // }
    });
  };
}
//

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
  },
  welcome: {
    // alignSelf: "center",
    // color: 'pink',
    // fontSize: 1

  }
});

// res.data.postResponse.location && res.data.postResponse.key
