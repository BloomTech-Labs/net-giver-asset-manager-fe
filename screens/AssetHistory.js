import React from "react";
import axios from 'axios';
import { View, Text, StyleSheet } from "react-native";
import SingleAsset from '../components/SingleAsset';

const AssetHistory = props => {
  console.log(props);

  return (
    <View>
      <Text>Asset History</Text>
      <SingleAsset />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AssetHistory;