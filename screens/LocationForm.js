import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Picker,
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
  ScrollView
} from "react-native";
import { Tile, Button, Input, Text, Icon, Image } from "react-native-elements";
import Spacer from "../components/Spacer";
import HeadBar from "../components/HeaderBar";
import LocField from "../components/LocField";
import { Context } from "../context/LocationContext";
import KeyboardShift from "../constants/KeyboardShift";
import OrderUpc from "../components/OrderUpc";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const LocationForm = (props) => {
  const { state, addLocation, clearErrorMessage } = useContext(Context);

  return (
    <KeyboardShift>
      <ScrollView>
        {/* <HeadBar /> */}
        {/* <Text style={styles.header}>Choose Locations</Text> */}
        {/* <Picker style={styles.picker} itemStyle={styles.pickerItem}>
          <Picker.Item label="Office" value="office" />
          <Picker.Item label="Locker" value="locker" />
          <Picker.Item label="Garage" value="garage" />
          <Picker.Item label="House" value="house" />
        </Picker> */}
        {/* <Spacer> */}
        {/* <Tile */}
        {/* //   imageSrc={require("../assets/images/MapImg.jpg")}
            //   imageSrc={{ uri: "https://i.imgur.com/YQJKz2w.jpg" }}
            // imageSrc={{ uri: "https://i.imgur.com/tEM7UOQ.jpg" }}
            title="You can lose a lot of things don't forget to add the location"
            titleStyle={"black"}
            featured
            caption="Net Giver here to help"
            PlaceholderContent={<ActivityIndicator />} */}
        {/* /> */}
        {/* </Spacer> */}
        {/* <Text style={styles.inputLabels}>Location</Text>
      <TextInput
        style={styles.inputField}
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.inputLabels}>Description</Text>
      <TextInput
        style={styles.inputField}
        value={description}
        onChangeText={setDescription}
        autoCapitalize="none"
        autoCorrect={false}
      /> */}
        {/* <Spacer /> */}
        {/* <Button
        iconRight={false}
        title="Add New Location"
        type="solid"
        color="blue"
        //   onPress={handleSubmit}
        icon={<Icon name="check" color="white" />}
        // disabled={!isValid}
        //   onPress={handleSubmit}
        containerStyle={styles.button}
      /> */}
        {/* <LocField
          headerText=""
          errorMessage={state.errorMessage}
          onSubmit={addLocation}
          submitButtonText="Add New Storage Location"
        /> */}

        <View style={styles.assetSection}>
          <Text style={styles.activeText}>ADD LOCATION</Text>
          <View style={styles.activeTab} />
        </View>

        <View style={styles.locationBody}>
          <Text style={styles.locationStyle}>You can lose a lot of things.</Text>
          <Text style={styles.locationStyle}>Asset Tracker is here to help.</Text>
          <Text style={styles.locationStyle}>Don't forget to add the location!</Text>
        </View>

        <View style={styles.qrArrowContainer}>
          <Entypo style={styles.arrowDotFirst} name="dots-three-vertical" color="#3366FF" size={15} />
          <Entypo style={styles.arrowDot} name="dots-three-horizontal" color="#3366FF" size={15} />
          <Entypo style={styles.arrowDot} name="dots-three-horizontal" color="#3366FF" size={15} />
          <Entypo style={styles.arrowDot} name="dots-three-horizontal" color="#3366FF" size={15} />
          <Entypo style={styles.arrowDot} name="dots-three-horizontal" color="#3366FF" size={15} />
          <Entypo style={styles.arrowDot} name="dots-three-horizontal" color="#3366FF" size={15} />
          <Entypo style={styles.arrowDot} name="dots-three-horizontal" color="#3366FF" size={15} />
          <Entypo style={styles.arrowRight} name="chevron-small-right" color="#3366FF" size={30} />

          <TouchableOpacity
            onPress={() => props.navigation.navigate("BarcodeScanner")}
          >
            <MaterialCommunityIcons
              style={styles.upc}
              name="qrcode-scan"
              size={25}
            />

            {/* {!barkode
              ? <Text style={styles.noCode}>Scan QR Code</Text>
              : <Text style={styles.qrCode}>{barkode}</Text>
            } */}
          </TouchableOpacity>
        </View>

        <OrderUpc />
      </ScrollView>
    </KeyboardShift>
  );
};

const styles = StyleSheet.create({
  assetSection: {
    flexDirection: "row",
    color: "white",
    backgroundColor: "#EFEFF4",
    height: 50,
    width: "100%",
  },
  activeText: {
    color: "#3366FF",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
  },
  activeTab: {
    width: "50%",
    height: 1,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#3366FF",
  },
  locationBody: {
    marginLeft: 45,
    marginRight: 45,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center"
  },
  locationStyle: {
    fontSize: 17
  },
  qrArrowContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center"
  },  
  upc: {
    marginBottom: 20,
    marginRight: "32%"
  },
  arrowDotFirst: {
    marginTop: -0.3,
    marginLeft: 10,
    marginRight: -4.2,
    justifyContent: "center"
  },
  arrowDot: {
    marginTop: 5.1,
    justifyContent: "center"
  },
  arrowRight: {
    marginTop: -2.5,
    marginLeft: -13
  }

  // header: {
  //   alignSelf: "center",
  //   padding: 5
  // },
  // picker: {
  //   alignSelf: "center",
  //   width: 200,
  //   backgroundColor: "#155fd6",
  //   borderColor: "black",
  //   borderWidth: 5
  // },
  // pickerItem: {
  //   color: "blue"
  // },
  // button: {
  //   width: "80%",
  //   alignSelf: "center"
  // },
  // container: {
  //   backgroundColor: "#76e3d4",
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  // inputField: {
  //   height: 40,
  //   width: "91%",
  //   borderColor: "gray",
  //   borderRadius: 5,
  //   borderWidth: 1,
  //   alignSelf: "center",
  //   paddingLeft: 10,
  //   marginTop: 20
  // },
  // inputLabels: {
  //   width: "91%",
  //   alignSelf: "center",
  //   fontSize: 17
  // },
  // scrollView: {
  //   marginHorizontal: 20
  // }
});

export default LocationForm;

// imageSrc={require('../assets/images/MapImg.jpg')}
