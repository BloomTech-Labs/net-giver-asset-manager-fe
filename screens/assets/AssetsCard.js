import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AssetsCard = ({ data }) => {
    return (
        <View style={styles.assetWrapper}>
            {/* Needs to be replaced with an image primitive component */}
            <Image 
                style={styles.imageWrapper}
                source={require('../../assets/images/macbook100.jpg')}
            />
            <View style={styles.textWrapper}>
                <Text style={styles.assetName}>{data.name}</Text>
                <Text style={styles.assetID}>Barcode # {data.barcode}</Text>
                <Text>Category: {data.category}</Text>
                <Text>Description: {data.description}</Text>
                <Text>Status: {data.check_in_status}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    assetWrapper: {
        flexDirection: "row",
        // marginTop: 25,
        marginLeft: 25
    },
    imageWrapper: {
        alignItems: "center",
        alignSelf: "center",
        width: 100,
        height: 100,
        marginLeft: 10
    },
    textWrapper: {
        flex: 3,
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

export default AssetsCard;