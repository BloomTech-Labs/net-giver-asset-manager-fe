import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const HeaderBar = props => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerTitle}>Simple Asset Tracker</Text>
      <TouchableOpacity 
        style={styles.menuIcon}
        onPress={() => Alert.alert("You clicked the menu hamburger!")}>
        <Icon
          name="menu"
          color="white"
          size="40"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    backgroundColor: "#3366FF",
    borderBottomColor: "black",
    height: 111
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    flex: 9,
    paddingLeft: 20,
    color: "white"
  },
  menuIcon: {
    flexDirection: "row",
    alignSelf: "center",
    flex: 1,
    paddingRight: 15
  },
});

export default HeaderBar;