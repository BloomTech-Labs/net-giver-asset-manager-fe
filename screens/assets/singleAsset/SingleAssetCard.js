import React, { useState, useEffect, useCallback } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Button,
    AsyncStorage
} from "react-native";
import axios from "axios";
import OneAsset from "./OneAsset";
import { withNavigation } from "react-navigation";

const SingleAssetCard = (props) => {


    const [userId, setUserId] = useState(0);

    useEffect(() => {
        console.log("useeffect run");
        AsyncStorage.getItem("user_id")
            .then(response => {
                var userId = JSON.parse(response);
                setUserId(userId);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    if (props.navigation.state.params) {
        var currentAssetId = props.navigation.state.params.id;
    }


    const [singleAsset, setSingleAsset] = useState({
        id: currentAssetId,
        check_in_status: false
    });

    useEffect(() => {
        setSingleAsset({ check_in_status: false });
    }, []);


    const assetHistory = { asset_id: currentAssetId, user_id: userId };
    const [assetStatus, setAssetStatus] = useState({});


    const checkInStatus = () => {
        var statusAsset = singleAsset.map(function (e) {
            if (e.check_in_status == true) {
                return (e.check_in_status = { check_in_status: false });
            } else {
                return (e.check_in_status = { check_in_status: true });
            }
        });

        var AssetID = singleAsset.map(function (ids) {
            return ids.id;
        });

        var newObj = Object.assign({}, ...statusAsset);

        axios
            .put(
                `https://net-giver-asset-mngr.herokuapp.com/api/assets/${AssetID}`,
                newObj
            )
            .then(response => {
                console.log("Updated Check In Status", newObj);
            })
            .catch(error => {
                console.log(error);
            });

        axios
            .post(
                "https://net-giver-asset-mngr.herokuapp.com/api/history/",
                assetHistory
            )
            .then(response => {
                console.log("New Asset History Added!");
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Fetch assets
    const getAssetsList = () => {
        console.log('the id in Axios function', currentAssetId)
        axios
            .get(
                `https://net-giver-asset-mngr.herokuapp.com/api/assets/${currentAssetId}`
            )
            .then(response => {
                setSingleAsset(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAssetsList();
    }, [currentAssetId]);

    console.log("Checkin Status in SinglePage", singleAsset.check_in_status);

    return (
        <View>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerTitle}>Single Asset Overview</Text>
            </View>

            <FlatList
                keyExtractor={(item, index) => item.id}
                data={singleAsset}
                renderItem={({ item }) => {
                    return <OneAsset data={item} />;
                }}
            />

            <FlatList
                keyExtractor={(item, index) => item.id}
                data={singleAsset}
                renderItem={({ item }) => {
                    {
                        return item.check_in_status == false ? (
                            <View>
                                <Button title="RETURN" onPress={checkInStatus} />
                            </View>
                        ) : (
                                <View>
                                    <Button title="CHECK-OUT" onPress={checkInStatus} />
                                </View>
                            );
                    }
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

export default withNavigation(SingleAssetCard);
