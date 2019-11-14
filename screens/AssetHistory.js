import React, { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, ActivityIndicator, StyleSheet, AsyncStorage, TouchableOpacity, Text, StatusBar, TextInput } from "react-native";
import { Button, Icon } from "react-native-elements";
import _ from "lodash";
import axios from "axios";
import SingleAsset from "../components/SingleAsset";
import { REACT_APP_MIXPANEL_SECRET_API_KEY } from 'react-native-dotenv';
import ExpoMixpanelAnalytics from '@benawad/expo-mixpanel-analytics';
const analytics = new ExpoMixpanelAnalytics(REACT_APP_MIXPANEL_SECRET_API_KEY); //planning on putting token it in an env file if it passes
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AssetHistory = ({ navigation }) => {
  const [history, setHistory] = useState([]);
  const [myHistory, setMyHistory] = useState([]);
  const [isMine, setIsMine] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState();
  const [searchedHistory, setSearchedHistory] = useState();
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchAllAssets();
    fetchUserId();
  }, []);

  // Fetches the logged in user's ID
  const fetchUserId = () => {
    AsyncStorage.getItem("user_id")
      .then(response => {
        const user_id = JSON.parse(response);
        setUserId(user_id);
        console.log("User ID fetched!", user_id)
      })
      .catch(error => {
        console.log(error)
      });
  };


  // Fetches all assets upon rendering regardless of user
  const fetchAllAssets = () => {
    axios
      .get("https://net-giver-asset-mngr.herokuapp.com/api/assets")
      .then(response => {
        console.log("history axios response: ", response);
        setHistory(response.data);
        setIsLoading(false);
        analytics.track("Asset History Tracking");
        const myAssets = response.data.filter(asset => {
          return asset.user_id === userId
        })
        setMyHistory(myAssets);
        setSearchedHistory(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Fetches only the assets associated with the logged in user
  // const fetchMyAssets = () => {
  //   const myAssets = history.filter(asset => {
  //     return asset.user_id === userId
  //   })
  //   setMyHistory(myAssets);
  // };
  console.log("myHistory", myHistory);
  console.log("history", history);

  const search = (items, query) => {

    let filteredItems = items;

    if (query.length) {
      filteredItems = items.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      })
      setSearchedHistory(filteredItems)
    }

    setSearchedHistory(filteredItems);
  }

  // Conditional rendering
  if (isLoading) {
    return (
      <SafeAreaView style={styles.loading} >
        <ActivityIndicator size="large" color="blue" />
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={styles.mainWrapper}>
        <StatusBar backgroundColor="#EEFF66" barStyle="dark-content" />
        <View style={styles.assetSection}>
          <TouchableOpacity
            style={styles.allAssets}
            onPress={() => {
              setIsMine(false);
              setSearchedHistory(history);
              setQuery('');
            }
            }
          >
            {!isMine
              ? <Text style={styles.activeText}>ALL ASSETS</Text>
              : <Text style={styles.inactiveText}>ALL ASSETS</Text>
            }
            {!isMine
              ? <View style={styles.activeTab} />
              : <View style={styles.inactiveTab} />
            }
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.allAssets}
            onPress={() => {
              setIsMine(true);
              setSearchedHistory(myHistory);
              setQuery('');
            }
            }
          >
            {!isMine
              ? <Text style={styles.inactiveText}>MY ASSETS</Text>
              : <Text style={styles.activeText}>MY ASSETS</Text>
            }
            {!isMine
              ? <View style={styles.inactiveTab} />
              : <View style={styles.activeTab} />
            }
          </TouchableOpacity>
        </View>

        <View style={styles.qrSearchContainer}>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={text => !isMine ? (
              setQuery(text),
              search(history, text)
            ) : (
                setQuery(text),
                search(myHistory, text)
              )}
            value={query}
          />
        </View>

        <TouchableOpacity
            style={styles.qrSection}
            onPress={() => navigation.navigate("BarcodeScanner")}
          >
            <MaterialCommunityIcons
              style={styles.upc}
              name="qrcode-scan"
              size={25}
            />
          </TouchableOpacity>
      </View>

        <View style={styles.flatList}>
          {!isMine
            ? <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={searchedHistory}
              renderItem={({ item }) => {
                return <SingleAsset data={item} />
              }}
            />
            : <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={searchedHistory}
              renderItem={({ item }) => {
                return <SingleAsset data={item} />
              }}
            />
          }
        </View>

        <Button
          buttonStyle={styles.addBtn}
          containerStyle={styles.addBtnWrapper}
          title="Add Asset"
          icon={
            <Icon
              name="add"
              color="white"
            />
          }
          titleStyle={styles.titleStyle}
          onPress={() => navigation.navigate("Scanner")}
        />
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: "column",
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  assetSection: {
    flexDirection: "row",
    color: "white",
    backgroundColor: "#EFEFF4",
    height: 50,
    width: "100%",
  },
  allAssets: {
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
  },
  flatList: {
    zIndex: 0,
  },
  // Floating action button styling at bottom of page
  addBtn: {
    borderRadius: 10,
    width: 148,
    height: 48,
  },
  addBtnWrapper: {
    bottom: 50,
    zIndex: 1,
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 32,
    right: 22,
  },
  titleStyle: {
    paddingLeft: 5,
  },
  // Active/inactive styling <Views> at the buttom of each button
  activeTab: {
    width: "100%",
    height: 1,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#3366FF",
  },
  inactiveTab: {
    width: "100%",
    height: 1,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#EFEFF4",
  },
  // Active/inactive styling for the text font inside the buttons
  activeText: {
    color: "#3366FF",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  inactiveText: {
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  searchContainer: {
    height: 60,
    borderColor: '#7c7777',
    borderBottomWidth: 1,
    marginLeft: 25,
    marginRight: 12,
    width: '79%'
  },
  searchBar: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 12,
    height: '100%',
    fontSize: 17,
  },
  qrSearchContainer: {
    flexDirection: "row"
  },
  upc: {
    marginTop: 35
  }
});

// analytics.track("Asset History Tracking");

export default AssetHistory;
