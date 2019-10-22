import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const HeaderBar = props => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerTitle}>The Simple Asset Manager</Text>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => Alert.alert("You clicked the menu hamburger!")}
      >
        <Icon name="menu" color="black" size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomColor: "black"
  },
  headerTitle: {
    fontWeight: "bold",
    alignSelf: "center",
    flex: 9,
    paddingLeft: 10
  },
  menuIcon: {
    flexDirection: "row",
    alignSelf: "center",
    flex: 1,
    paddingRight: 10
  }
});

export default HeaderBar;
