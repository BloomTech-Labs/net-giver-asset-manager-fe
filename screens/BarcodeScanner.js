import * as React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";

export default class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    // const { navigate } = this.props.navigation;
    // console.log("props test:", this.props.navigation);

    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {/* <BarCodeScanner
          onBarCodeRead={this.handleBarCodeScanned}
          style={[StyleSheet.absoluteFill, styles.container]}
        >
          <Text style={styles.description}>Scan your QR code</Text>
          <Image style={styles.qr} source={require("../assets/img/QR.png")} />
          <Text
            onPress={() => this.props.navigation.pop()}
            style={styles.cancel}
          >
            Cancel
          </Text>
        </BarCodeScanner> */}

        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    console.log("barcode start:", type, data);
    this.setState({ scanned: true });
    Alert.alert(
      `Bar code with type ${type} and data ${data} has been scanned!`,
      "time to leave",
      [
        {
          text: "Check in",
          onPress: () => {
            this.props.navigation.navigate("AssetForm", { data });
            // console.log("press test:", data);
          }
        }
      ]
    );
  };
}

// const { width } = Dimensions.get("window");
// const qrSize = width * 0.7;

const styles = StyleSheet.create({});
