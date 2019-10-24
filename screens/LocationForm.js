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

const LocationForm = () => {
  const { state, addLocation, clearErrorMessage } = useContext(Context);

  return (
    <KeyboardShift>
      <ScrollView>
        <HeadBar />
        <Text style={styles.header}>Choose Locations</Text>
        <Picker style={styles.picker} itemStyle={styles.pickerItem}>
          <Picker.Item label="Office" value="office" />
          <Picker.Item label="Locker" value="locker" />
          <Picker.Item label="Garage" value="garage" />
          <Picker.Item label="House" value="house" />
        </Picker>
        <Spacer>
          <Tile
            //   imageSrc={require("../assets/images/MapImg.jpg")}
            //   imageSrc={{ uri: "https://i.imgur.com/YQJKz2w.jpg" }}
            imageSrc={{ uri: "https://i.imgur.com/tEM7UOQ.jpg" }}
            title="you can lose a lot of things don't forget to add the location"
            titleStyle={"black"}
            featured
            caption="Net Giver here to help"
            PlaceholderContent={<ActivityIndicator />}
          />
        </Spacer>
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
        <Spacer />
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
        <LocField
          headerText=""
          errorMessage={state.errorMessage}
          onSubmit={addLocation}
          submitButtonText="Add New Storage Location"
        />
        <Spacer />
        <OrderUpc />

        <Spacer />
      </ScrollView>
    </KeyboardShift>
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
  },
  container: {
    backgroundColor: "#76e3d4",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
  inputLabels: {
    width: "91%",
    alignSelf: "center",
    fontSize: 17
  },
  scrollView: {
    marginHorizontal: 20
  }
});

export default LocationForm;

// imageSrc={require('../assets/images/MapImg.jpg')}
