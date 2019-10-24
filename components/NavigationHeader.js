import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Icon } from "react-native-elements";

const NavigationHeader = props => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => Alert.alert("You have clicked the hamburger menu icon!")}>
        <Icon
          name="menu"
          color="black"
          size={40}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>The Simple Asset Manager</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomColor: "black",
  },
  headerTitle: {
    fontWeight: "bold",
    alignSelf: "center",
    flex: 9,
    paddingRight: 10,
    marginLeft: 55,
  },
  menuIcon: {
    flexDirection: "row",
    alignSelf: "center",
    flex: 1,
    paddingLeft: 5,
  },
});

export default NavigationHeader;