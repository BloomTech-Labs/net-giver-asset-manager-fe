import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SingleAsset = props => {
  return (
    <View style={styles.assetWrapper}>
      <View style={styles.imageWrapper}>
        <Text>Images goes here</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text>Asset #1</Text>
        <Text>Category: </Text>
        <Text>Serial #: 129833</Text>
        <Text>Description: </Text>
        <Text>Status: </Text>
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
  }
});

export default SingleAsset;