import React, { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, ActivityIndicator, StyleSheet, AsyncStorage, Icon, Alert } from "react-native";
import _ from "lodash";
import axios from "axios";
import NavigationHeader from "../components/NavigationHeader";
import SingleAsset from "../components/SingleAsset";

const AssetHistory = ({ navigation }) => {
  const [history, setHistory] = useState([]);
  const [query, setQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch complete asset history
  const getAssetHistory = () => {
    axios
      .get("https://net-giver-asset-mngr.herokuapp.com/api/history")
      .then(response => {
        console.log(response.data);
        setHistory(response.data);
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error);
      })
  };

  // Fetch asset history individual user
  const getAssetHistorybyUser = () => {
    AsyncStorage.getItem("token")
      .then(response => {
        console.log("token", response)
      })
      .catch(error => {
        console.log(error)
      });
    
    axios
      .get("https://net-giver-asset-mngr.herokuapp.com/api/history")
      .then(response => {
        console.log("RESPONSE", response)
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
        <ActivityIndicator size="large" color="blue" />
      </View>
    )
  } else {
    return (
      <SafeAreaView>
        <NavigationHeader 
          all={getAssetHistory}
          mine={getAssetHistorybyUser}
        />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={history}
          renderItem={({ item }) => {
            return <SingleAsset data={item} />}}
        />
      </SafeAreaView>
    );
  };
}

AssetHistory.navigationOptions = {
  title: "Dashboard",
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default AssetHistory;
