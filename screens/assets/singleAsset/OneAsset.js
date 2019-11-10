import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class OneAsset extends React.Component {


    render() {
        console.log('currectID in oneasset', this.props.data.id)
        return (
            <View style={styles.assetWrapper}>
                {/* Needs to be replaced with an image primitive component */}
                <Image
                    style={styles.imageWrapper}
                    source={require('../../../assets/images/macbook100.jpg')}
                />
                <View style={styles.textWrapper}>
                    <Text style={styles.assetName}>{this.props.data.id}</Text>
                    <Text style={styles.assetName}>{this.props.data.name}</Text>
                    <Text style={styles.assetID}>Barcode # {this.props.data.barcode}</Text>
                    <Text>Category: {this.props.data.category}</Text>
                    <Text>Description: {this.props.data.description}</Text>
                    <View>
                        {this.props.data.check_in_status == true ?
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
    }
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