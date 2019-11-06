// import React from "react";
// import { View, Text, Image } from "react-native";
// import { Button } from "react-native-elements";
// import * as ImagePicker from "expo-image-picker";

// export default class Cameron extends React.Component {
//   state = {
//     photo: null
//   };
//   handleChoosePhoto = () => {
//     const options = {
//       noData: true
//     };

//     ImagePicker.launchImageLibraryAsync(options, res => {
//       console.log("response", res);
//       if (res.uri) {
//         this.setState({ photo: res });
//       }
//     });
//   };

//   render() {
//     const { photo } = this.state;
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         {photo && (
//           <Image
//             source={{ uri: photo.uri }}
//             style={{ width: 300, height: 300 }}
//           />
//         )}
//         <Button
//           title="choose photo para avatar"
//           onPress={this.handleChoosePhoto}
//         />
//       </View>
//     );
//   }
// }

import * as React from "react";
import { View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { RNS3 } from "react-native-aws3";
import { ActivityIndicator } from "react-native";
import { Button, Image, Avatar } from "react-native-elements";
import { AWS_SECRET_ACCESS_KEY, AWS_ACCESS_KEY } from "react-native-dotenv";

export default class Cameron extends React.Component {
  state = {
    image: null
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this.chooseImage}
        />

        {/* <Avatar
          PlaceholderContent={<ActivityIndicator />}
          source={
            image ? result.uri : { uri: "https://i.imgur.com/ltNMlnA.png" }
          }
          rounded
          showEditButton
          size="xlarge"
        /> */}
        {image && (
          <Image
            style={styles.image}
            source={{ uri: image }}
            style={{ width: 300, height: 300 }}
          />
        )}
      </View>
    );
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
      keyPrefix: "uploads/",
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
  }
});

// import * as React from "react";
// import { Button, Image, View } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import Constants from "expo-constants";
// import * as Permissions from "expo-permissions";
// import { RNS3 } from "react-native-aws3";

// export default class Cameron extends React.Component {
//   state = {
//     image: null
//   };

//   render() {
//     let { image } = this.state;

//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Button
//           title="Pick an image from camera roll"
//           onPress={this.chooseImage}
//         />
//         {image && (
//           <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
//         )}
//       </View>
//     );
//   }

//   chooseImage() {
//     ImagePicker.launchImageLibraryAsync({}, response => {
//       console.log("expo test", response);
//     });

//     // let result = await ImagePicker.launchImageLibraryAsync({
//     //   mediaTypes: ImagePicker.MediaTypeOptions.All,
//     //   allowsEditing: true,
//     //   aspect: [4, 3]
//     // });

//     //   console.log("image test:", result);

//     //   if (!result.cancelled) {
//     //     this.setState({ image: result.uri });
//     //   }
//     //   const file = {
//     //     uri:
//     //   }
//   }
// }
