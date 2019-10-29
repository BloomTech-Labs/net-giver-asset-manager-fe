import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";

class getImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFIle: null,
      selectedFiles: null
    };
  }

  singleFileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  singleFileUploadHandler = event => {
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append(
        "profileImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      axios
        .post("/api/profile/profile-img-upload", data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`
          }
        })
        .then(response => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ("LIMIT_FILE_SIZE" === response.data.error.code) {
                this.ocShowAlert("Max size: 2MB", "red");
              } else {
                console.log(response.data);
                // If not the given file type
                this.ocShowAlert(response.data.error, "red");
              }
            } else {
              // Success
              let fileName = response.data;
              console.log("fileData", fileName);
              this.ocShowAlert("File Uploaded", "#3089cf");
            }
          }
        })
        .catch(error => {
          // If another error
          this.ocShowAlert(error, "red");
        });
    } else {
      // if file not selected throw error
      this.ocShowAlert("Please upload file", "red");
    }
  };

  // ShowAlert Function
  ocShowAlert = (message, background = "#3089cf") => {
    let alertContainer = document.querySelector("#oc-alert-container"),
      alertEl = document.createElement("div"),
      textNode = document.createTextNode(message);
    alertEl.setAttribute("class", "oc-alert-pop-up");
    $(alertEl).css("background", background);
    alertEl.appendChild(textNode);
    alertContainer.appendChild(alertEl);
    setTimeout(function() {
      $(alertEl).fadeOut("slow");
      $(alertEl).remove();
    }, 3000);
  };

  render() {
    return (
      <View>
        <Text>OMG Mr. Bezos here we come</Text>
        {/* Single File Upload*/}

        <View>
          <Text>Single Image Upload</Text>
          <Text>Upload Size: 250px x 250px ( Max 2MB )</Text>
        </View>
        <View>
          <Text>Please upload an image for your profile</Text>
          <TextInput
            style={styles.inputField}
            value={this.selectedFIle}
            onChangeText={this.selectedFIle}
          />
          <View>
            <Button title="upload image" onPress={""} />
          </View>
        </View>
      </View>
    );
  }
}

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
  }
});

export default getImage;

// style={{ color: "#555", marginLeft: "12px" }}
// style={{ color: "#555", marginLeft: "12px" }}
// style={{ marginLeft: "12px" }}

// this.singleFileChangedHandler
// this.singleFileUploadHandler
