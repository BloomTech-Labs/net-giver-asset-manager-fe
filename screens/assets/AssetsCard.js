import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AssetsCard = ({ data }) => {
    return (
        <View style={styles.assetWrapper}>
            <View style={styles.imageWrapper}>
                {/* Needs to be replaced with an image primitive component */}
                <Text>Image: {data.photo}</Text>
            </View>
            <View style={styles.textWrapper}>
                <Text>Name: {data.name}</Text>
                <Text>Category: {data.category}</Text>
                <Text>Description: {data.description}</Text>
                <Text>Check_In_Status: {data.check_in_status}</Text>
                <Text>Barcode ID: {data.barcode}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    assetWrapper: {
        flexDirection: "row",
        margin: 20,
    },
    imageWrapper: {
        flex: 1,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    textWrapper: {
        flex: 3,
        marginLeft: 50,
        padding: 20,
    }
});

export default AssetsCard;