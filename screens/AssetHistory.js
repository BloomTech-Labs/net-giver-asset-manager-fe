import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import SingleAsset from "../components/SingleAsset";

const AssetHistory = props => {
  const [history, setHistory] = useState([]);

  // Fetch asset history
  const getAssetHistory = () => {
    axios
      .get("https://net-giver-asset-mngr.herokuapp.com/api/history")
      .then(response => {
        console.log(response.data);
        setHistory(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  };

  useEffect(() => {
    getAssetHistory();
  }, []);

  return (
    <View>
      <Text>Asset History</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={history}
        renderItem={({ item }) => {
          return <SingleAsset data={history} />}}
      />
    </View>
  );
};

export default AssetHistory;
