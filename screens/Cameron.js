import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  FlatList
} from "react-native";
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
    // console.log("cameron:", props);
    this.state = {
      image: null,
      userName: "",
      name: "",
      userId: 0,
      email: ""
    };
  }

  getUser = () => {
    axios
      .get("https://net-giver-asset-mngr.herokuapp.com/api/auth/users")
      .then(res => {
        console.log("usertest:", res.data);
        //  ( res.data === this.state.userId ? this.setState({ email: res.data.email}) : this.state.email)
        if (res.data.id === this.state.userId) {
          // console.log("logicTest:", this.state.userId);
          this.setState({ email: email });
          console.log("emailtest:", email);
        }
      })
      .catch(err => {
        console.log("failed to get user:", err);
      });
  };

  fetchUserId = () => {
    AsyncStorage.getItem("user_id")
      .then(response => {
        const user_id = JSON.parse(response);
        this.setState({ userId: user_id });
        console.log("User ID fetched! on cameron", user_id);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let { image } = this.state;
    let { email } = this.state;

    console.log("anotherStateTest:", email);

    return (
      <View
        style={{
          flex: 0,
          alignItems: "center",
          justifyContent: "center",
          top: 50
        }}
      >
        {/* <Text style={{ color: "#3366FF" }}>Monique Smith!</Text> */}
        <Text style={[{ fontSize: 33, textAlign: "center" }, styles.welcome]}>
          Welcome{" "}
        </Text>
        <FlatList
          data={email}
          keyExtractor={email => email.email}
          renderItem={({ item }) => {
            return item;
          }}
        />
        <Text style={{ color: "lightgrey", fontSize: 22, padding: 20 }}>
          You are almost there, the final step is to add your avatar picture
        </Text>
        <Text>{this.state.userId}</Text>
        {/* <Text>{this.state.email}</Text> */}

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

        <View
          style={{
            backgroundColor: "#3366FF",
            width: "80%",
            borderRadius: 20,
            overflow: "hidden",
            width: "80%",
            alignSelf: "center",
            top: "30%",
            padding: 5
          }}
        >
          <Button
            title="Next"
            color="red"
            onPress={() => this.props.navigation.navigate("Dashboard")}
          />
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    this.fetchUserId();
    this.getUser();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    // console.log("image test:", result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }

    const file = {
      uri: result.uri,
      name: "image.png",
      type: "image/png"
    };

    const options = {
      keyPrefix: `${this.state.userId}/`,
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
      const location = res.body.postResponse.location;
      console.log("local test:", location);
      const name = res.body.postResponse.key;
      // const user_id = JSON.stringify(name.replace(/\D/g, ""));
      const user_id = JSON.parse(name.replace(/\D/g, ""));
      console.log("rename", user_id);
      // const newerName = JSON.parse(newName);
      // console.log("herewegoagain", newerName);
      const data = {
        // user_id,
        user_id,
        location
      };
      console.log("dataTest:", data);

      // console.log("nametest:", name);
      if (res.status === 201) {
        axios
          .post(
            "https://net-giver-asset-mngr.herokuapp.com/api/user-images",
            data
          )
          .then(res => {
            console.log("post to backend test:", res);
          })
          .catch(err => {
            console.log("that didnt work", err.data);
          });
      }
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
  }
});

// ({
//   method: "post",
//   url: "https://net-giver-asset-mngr.herokuapp.com/api/user-images",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     Accept: "application/json"
//   },
//   data
// });
