import React, { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, ActivityIndicator, StyleSheet, AsyncStorage, TouchableOpacity, Text } from "react-native";
import _ from "lodash";
import axios from "axios";
import SingleAsset from "../components/SingleAsset";

const AssetHistory = ({ navigation }) => {
  const [history, setHistory] = useState([]);
  const [myHistory, setMyHistory] = useState([]);
  const [isMine, setIsMine] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    fetchAllAssets();
    // fetchUserId();
  }, []);

  // Toggles state to determine which assets to display
  const toggleAssetState = () => {
    setIsMine(!isMine)
    console.log("STATE CHANGED!")
  };

  // Fetches the logged in user's ID
  const fetchUserId = () => {
    AsyncStorage.getItem("user_id")
      .then(response => {
        const user_id = JSON.parse(response);
        setUserId(user_id);
        console.log("User ID fetched!")
      })
      .catch(error => {
        console.log(error)
      });
  };

  // Fetches all assets upon rendering regardless of user
  const fetchAllAssets = () => {
    axios
      .get("https://net-giver-asset-mngr.herokuapp.com/api/history")
      .then(response => {

        setHistory(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Fetches only the assets associated with the logged in user
  const fetchMyAssets = () => {
    history.map(asset => {
      if (asset.user_id == userId) {
        setMyHistory(asset)
        console.log("MY HISTORY", myHistory)
      } else {
        return asset
      }
    });
  };

  // Conditional rendering
  if (isLoading) {
    return (
      <SafeAreaView style={styles.loading} >
        <ActivityIndicator size="large" color="blue" />
      </SafeAreaView>
    )
  } else {
    return (
      <View>
        <View style={styles.assetSection}>
          <TouchableOpacity
            style={styles.allAssets}
            onPress={() => {
              setIsMine(false)
            }
            }
          >
            <Text style={styles.allMyAssets}>ALL ASSETS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.allAssets}
            onPress={() => {
              fetchMyAssets();
              setIsMine(true);
            }
            }
          >
            <Text style={styles.allMyAssets}>MY ASSETS</Text>
          </TouchableOpacity>
        </View>
        {!isMine
          ? <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={history}
            renderItem={({ item }) => {
              return <SingleAsset data={item} />
            }}
          />
          : <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={myHistory}
            renderItem={({ myItem }) => {
              return <SingleAsset data={myItem} />
            }}
          />
        }
      </View>
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
  headerWrapper: {
    flexDirection: "row",
    backgroundColor: "#3366FF",
    borderBottomColor: "black",
    height: 50
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    flex: 9,
    paddingLeft: 20,
    color: "white"
  },
  menuIcon: {
    flexDirection: "row",
    alignSelf: "center",
    flex: 1,
    paddingRight: 15
  },
  assetSection: {
    flexDirection: "row",
    color: "white",
    justifyContent: "space-around",
    backgroundColor: "#3366FF",
    height: 50,
    borderTopColor: "white",
  },
  allAssets: {
    flexDirection: "column",
    justifyContent: "center",
  },
  allMyAssets: {
    color: "white",
    fontSize: 18
  },
});

export default AssetHistory;
