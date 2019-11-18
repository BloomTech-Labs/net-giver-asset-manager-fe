import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from "axios";

const OneAsset = ({ data, navigation }) => {
    const [assetImage, setAssetImage] = useState()

    var currentAssetID = data.pic_img_id;
    const getAssetImage = () => {
        console.log('inside getAssetImage Function', currentAssetID)
        axios
            .get(
                `http://localhost:8000/api/assets/img/${currentAssetID}`
            )
            .then(response => {
                setAssetImage(response.data)
                console.log('location', response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAssetImage();
    }, []);

    console.log('currectID in oneasset', currentAssetID)
    return (
        <View style={styles.assetWrapper}>
            {/* Needs to be replaced with an image primitive component */}
            <Image
                style={styles.imageWrapper}
                source={require('../../../assets/images/macbook100.jpg')}
            />
            <View style={styles.textWrapper}>
                <Text style={styles.assetName}>{data.id}</Text>
                <Text style={styles.assetName}>{data.name}</Text>
                <Text style={styles.assetID}>Barcode # {data.barcode}</Text>
                <Text>Category: {data.category}</Text>
                <Text>Description: {data.description}</Text>
                <View>
                    {data.check_in_status == true ?
                        (<View>
                            <Text>Status: Check-In</Text>
                        </View>)
                        :
                        (<View>
                            <Text>Status: Check-Out</Text>
                        </View>)
                    }
                </View>

            </View>
        </View>
    );

};



const styles = StyleSheet.create({
    assetWrapper: {
        flexDirection: "column",
        // marginTop: 25,

    },
    imageWrapper: {
        alignItems: "center",
        alignSelf: "center",
        width: 100,
        height: 100,
        marginLeft: 10
    },
    textWrapper: {
        flex: 2,
        marginLeft: 30,
        padding: 15,
    },
    assetName: {
        fontWeight: "bold"
    },
    assetID: {
        color: "#7C7777",
        fontStyle: "italic"
    },
    assetLocation: {
        color: "#82A0FD"
    }
});

export default OneAsset;