import React from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Picker,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ModalDropdown from "react-native-modal-dropdown";
import { Tile, Button, Input, Text, Icon, Image } from "react-native-elements";
import Spacer from "../components/Spacer";
import HeadBar from "../components/HeaderBar";

const LocationForm = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <HeadBar />
      <Text style={styles.header}>Choose Locations</Text>
      <Picker style={styles.picker} itemStyle={styles.pickerItem}>
        <Picker.Item label="Office" value="office" />
        <Picker.Item label="Locker" value="locker" />
        <Picker.Item label="Garage" value="garage" />
        <Picker.Item label="House" value="house" />
      </Picker>
      <Spacer>
        {/* <Image
          source={{ uri: "https://i.imgur.com/YQJKz2w.jpg" }}
          style={{ width: 200, height: 200 }}
          PlaceholderContent={<ActivityIndicator />}
        /> */}
        <Tile
          //   imageSrc={require("../assets/images/MapImg.jpg")}
          imageSrc={{ uri: "https://i.imgur.com/YQJKz2w.jpg" }}
          title="you can lose a lot of things don't forget to add the location"
          featured
          caption="Net Giver here to help"
          PlaceholderContent={<ActivityIndicator />}
        />
      </Spacer>
      <Input
        placeholder="Location....."
        errorStyle={{ color: "red" }}
        errorMessage="ENTER A VALID LOCATION"
      />
      <Button
        iconRight={false}
        title="Add Location"
        type="solid"
        color="blue"
        //   onPress={handleSubmit}
        icon={<Icon name="check" color="white" />}
        // disabled={!isValid}
        //   onPress={handleSubmit}
        containerStyle={styles.button}
      />

      <Spacer />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    padding: 5
  },
  picker: {
    alignSelf: "center",
    width: 200,
    backgroundColor: "#155fd6",
    borderColor: "black",
    borderWidth: 5
  },
  pickerItem: {
    color: "blue"
  },
  button: {
    width: "80%",
    alignSelf: "center"
  }
});

export default LocationForm;

// imageSrc={require('../assets/images/MapImg.jpg')}
