import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import AssetsCard from "../assets/AssetsCard";
import { ListItem } from "react-native-elements";

const AssetsList = props => {
  const [assets, setAssets] = useState([]);

  // Fetch assets
  const getAssetsList = () => {
    axios
      .get("https://net-giver-asset-mngr.herokuapp.com/api/assets")
      .then(response => {
        console.log(response.data);
        setAssets(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAssetsList();
  }, []);

  return (
    <View>
      <Text>List of Items</Text>
      {/* <FlatList
        keyExtractor={(item, index) => item.id}
        data={assets}
        renderItem={({ item }) => {
          <ListItem title={item.name} subtitle={item.category} />;
          // return <AssetsCard data={item} />
        }}
      /> */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={assets}
        renderItem={({ item }) => {
          return <AssetsCard data={item} />;
        }}
      />
    </View>
  );
};

export default AssetsList;
