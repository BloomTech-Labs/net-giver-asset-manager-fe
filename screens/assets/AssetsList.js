import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
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
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>All Assets</Text>
      </View>
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

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    backgroundColor: "#3366FF",
    borderBottomColor: "black",
    height: 95
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    flex: 9,
    paddingLeft: 20,
    color: "white"
  }
});

export default AssetsList;
