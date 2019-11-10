import * as React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from 'react-native-barcode-mask';
import axios from "axios";

export default class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    assetBarcode: null,
    assetID: null
  };


  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  handleBarCodeScanned2 = ({ type, data }) => {
    console.log("barcode start:", type, data);
    this.setState({ scanned: true });
    Alert.alert(
      `Bar code with type ${type} and data ${data} has been scanned!`,
      "time to leave",
      [
        {
          text: "Check in",
          onPress: () => {
            this.props.navigation.navigate("AssetsAdd", { data });
          }
        }
      ]
    );
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
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
          <View style={styles.layerTop} />
          <View style={styles.layerCenter}>
            <View style={styles.layerLeft} />
            {/* <View style={styles.focused}> */}

            <BarcodeMask width={300} height={120} backgroundColor="transparent" animatedLineColor="red" />
            <View style={styles.focused} />
            {/* <View style={styles.focused2} />
              <View style={styles.focused3} /> */}
            {/* <Text>Something Here</Text> */}

            {/* </View> */}
            <View style={styles.layerRight} />
          </View>
          <View style={styles.layerBottom} />
          {/* <Text>Something Here</Text> */}
        </BarCodeScanner>
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
    var dataArray = [data]

    this.setState({ scanned: true });
    // Alert.alert(
    //   `Your QR Code # is ${[data]}`);
    const { navigate } = this.props.navigation;
    // Axios call to fetch assets
    axios
      .get("https://net-giver-asset-mngr.herokuapp.com/api/assets")
      .then(response => {
        var storedAssets = response.data;


        var barcode = storedAssets.map(function (e) {
          return e.barcode
        });


        var allIDS = storedAssets.map(function (e) {
          return e.id
        });

        console.log("All Barcode", barcode)
        console.log("All ID", allIDS)
        let intersection = barcode.filter(x => dataArray.includes(x));

        var dataString = dataArray.toString()
        var intersectionString = intersection.toString()

        console.log("filtered: ", intersectionString)
        console.log("Scanned: ", dataString)


        if (intersectionString === dataString) {
          storedAssets.map(assetID => this.setState({ assetID: assetID.id }));
          var id = this.state.assetID

          this.props.navigation.navigate("SingleAssetCard", { id });

        } else {

          this.props.navigation.navigate("AssetsAdd", { dataString });


        }
      })
      .catch(error => {
        console.log(error);
      });
  };




}



const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: "row"
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    // flex: 10,
    // borderBottomColor: "red",
    flex: 10,
    // backgroundColor: 'orange',
    // borderRadius: 5,
    // padding: 15,
    // paddingHorizontal: 20,
    alignSelf: 'center',
    // margin: 20,
    // position: "relative",
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  }
});
