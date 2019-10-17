import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleAsset = ({data}) => {

  return (
    <View style={styles.assetWrapper}>
      <View style={styles.imageWrapper}>
        {/* Needs to be replaced with an image primitive component */}
        <Text>Images goes here</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text>Asset ID: { data.asset_id }</Text>
        <Text>Checked out: { data.time_out }</Text>
        <Text>Checked in: { data.time_in }</Text>
        <Text>User: { data.user_id }</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  assetWrapper: {
    flexDirection: "row",
  },
  imageWrapper: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textWrapper: {
    flex: 3,
    marginLeft: 50,
    padding: 20,
  }
});

export default SingleAsset;