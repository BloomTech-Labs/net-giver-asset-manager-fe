import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from "react-navigation";

const SingleAsset = ({ data, navigation }) => {
  console.log("INDIVIDUAL ASSET DATA", data);
  
  // Handles clicking an individual asset in the Dashboard screen
  const showDetails = () => {
    const assetId = data.id;;
    console.log("ASSET ID:", assetId);
    navigation.navigate("SingleAssetCard", { assetId });
  };

  return (
    <TouchableOpacity onPress={showDetails}>
      <View style={styles.assetWrapper}>
        <View style={styles.imageWrapper} />
        <View style={styles.textWrapper}>
          <Text style={styles.assetName}>{ data.name }</Text>
          <Text style={styles.assetID}>QR ID: { data.barcode }</Text>
          <Text>{ data.description }</Text>
          <Text style={styles.assetLocation}>Returned: True</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  assetWrapper: {
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 25
  },
  imageWrapper: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "grey",
    width: 100,
    height: 100
  },
  textWrapper: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 30,
    fontSize: 15
  },
  assetName: {
    fontSize: 15,
    fontWeight: "500"
  },
  assetID: {
    fontSize: 14,
    color: "#7C7777",
    fontStyle: "italic"
  },
  assetDescription: {
    fontSize: 14,
    fontWeight: "normal",
  },
  assetLocation: {
    color: "#82A0FD"
  },
});

export default withNavigation(SingleAsset);