import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";
import SingleAsset from "../components/SingleAsset";


const AssetHistory = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  // Fetch asset history
  const getAssetHistory = () => {
    axios
      .get("https://net-giver-asset-mngr.herokuapp.com/api/history")
      .then(response => {
        setHistory(response.data);
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error);
      })
  };

  useEffect(() => {
    getAssetHistory();
  }, []);

  if (isLoading) {
    return (
      <View style={ styles.loading } >
        <ActivityIndicator size="large" color="green" />
      </View>
    )
  } else {
    return (
      <View>
        <Text>Asset History</Text>
        <FlatList
          keyExtractor={item => item.id}
          data={history}
          renderItem={({ item }) => {
            return <SingleAsset data={item} />}}
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default AssetHistory;
