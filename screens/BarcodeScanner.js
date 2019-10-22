import * as React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";

export default class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    asset: null,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { navigate } = this.props.navigation;
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
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned2}
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
  };

  // handleBarCodeScanned = ({ type, data }) => {
  //   this.setState({ scanned: true });
  //   Alert.alert(
  //     `Bar code with type ${type} and data ${data} has been scanned!`,
  //     "time to leave",
  //     [
  //       {
  //         text: "Check in",
  //         onPress: () => this.props.navigation.navigate("AssetForm", {
  //           asset: data,
  //         })
  //       }
  //     ]
  //   );
  // };

  handleBarCodeScanned2 = ({ type, data }) => {
    this.setState({ scanned: true });
    Alert.alert(`Barcode with type ${type} and data ${data} has been scanned!`);

    // Axios call to fetch assets
    axios
      .get("https://net-giver-asset-mngr.herokuapp.com/api/assets")
      .then(response => {
        storedAssets = response.data;
         storedAssets.map(asset => (
          this.setState({ asset: asset.barcode })
        ))

        // Conditional logic handling the routing -- pages aren't correct, just wanted
        // an example
        if (this.state.asset === data) {
          this.props.navigation.navigate("AssetForm")
        } else {
          this.props.navigation.navigate("AssetHistory")
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

// const { width } = Dimensions.get("window");
// const qrSize = width * 0.7;

const styles = StyleSheet.create({});
