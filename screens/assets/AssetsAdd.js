import React, { useState, useEffect } from "react";
import { Button, Input, Icon } from "react-native-elements";
import axios from "axios";
import { StyleSheet, TouchableOpacity, Text, TextInput, View, AsyncStorage, Alert } from "react-native";
import KeyboardShift from "../../constants/KeyboardShift";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrderUpc from "../../components/OrderUpc";
import { withNavigation } from 'react-navigation';

import * as yup from 'yup'
import { Formik } from 'formik';

import { Entypo } from "@expo/vector-icons";

const AssetsAdd = (props, { navigation }) => {
    const [userId, setUserId] = useState(0)
    const fetchUserId = () => {
        AsyncStorage.getItem("user_id")
            .then(response => {
                const user_id = JSON.parse(response);
                setUserId(user_id);

            })
            .catch(error => {
                console.log(error)
            });
    };
    useEffect(() => {
        fetchUserId();
    }, []);

    if (props.navigation.state.params) {
        var barkode = props.navigation.state.params.dataString
    }

    // const redirect = () => {
    //     props.navigation.navigate("AssetsList");
    // }

    return (
        <>
            <View style={styles.assetSection}>
                <Text style={styles.activeText}>ASSET ENTRY</Text>
                <View style={styles.activeTab} />
            </View>

            <View style={styles.photoContainer}>
                <View style={styles.photoIcon}>
                    <TouchableOpacity>
                        <Entypo name="camera" size={30} color="#3366FF" />
                    </TouchableOpacity>
                    <Text>Add Photo</Text>
                </View>
            </View>

            <Formik
                enableReinitialize
                initialValues={{
                    name: '',
                    category: '',
                    description: '',
                    barcode: '',
                    check_in_status: 0,
                    user_id: userId,
                    location_id: 1
                }}

                onSubmit={(values) => axios
                    .post("https://net-giver-asset-mngr.herokuapp.com/api/assets", values)
                    .then(res => {
                        Alert.alert(
                            'Message',
                            'Successfuly Added Item!',
                            [
                                { text: 'Ok', onPress: () => props.navigation.navigate("AssetsList") }
                            ],
                            { cancelable: false }
                        );
                    })
                    .catch(err => {
                        "Can not add"
                    })
                }

                validationSchema={yup.object().shape({
                    name: yup
                        .string()
                        .required(),
                    barcode: yup
                        .string()
                        .required(),
                })}
            >

                {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                    <View style={styles.container}>
                        <KeyboardShift>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("BarcodeScanner")}
                            >
                                <MaterialCommunityIcons
                                    style={styles.upc}
                                    name="qrcode-scan"
                                    size={25}
                                />
                                <Text style={styles.qrCode}>{barkode}</Text>
                            </TouchableOpacity>

                            <Text style={styles.assetTitle}>Name</Text>
                            {/* <Input
                                // placeholder="Asset Name"
                                value={values.name}
                                onChangeText={handleChange("name")}
                                onBlur={() => setFieldTouched("name")}
                                clearButtonMode="always"
                                inputStyle={styles.inputField}
                            /> */}
                            <TextInput
                                // placeholder="Asset Name"
                                value={values.name}
                                onChangeText={handleChange("name")}
                                onBlur={() => setFieldTouched("name")}
                                clearButtonMode="always"
                                style={styles.textInputField}
                            />
                            {touched.name && errors.name && (
                                <Text style={{ fontSize: 10, color: "red", paddingLeft: 10 }}>{errors.name}</Text>
                            )}

                            {/* <Input
                                placeholder="Barcode ID"
                                name="barcode"

                                value={barkode}
                                value={values.barcode = barkode}
                                onBlur={() => setFieldTouched('barcode')}

                                autoCapitalize="none"
                                inputStyle={styles.inputField}

                                editable={false}
                            />
                            {touched.barcode && errors.barcode && (
                                <Text style={{ fontSize: 10, color: "red", paddingLeft: 10 }}>
                                    {errors.barcode}
                                </Text>
                            )} */}

                            <Text style={styles.assetTitle}>Description</Text>
                            <TextInput
                                // placeholder="Add Description"
                                value={values.description}
                                onChangeText={handleChange("description")}
                                onBlur={() => setFieldTouched("description")}
                                style={styles.textInputField}
                            />
                            {touched.description && errors.description && (
                                <Text style={{ fontSize: 10, color: "red", paddingLeft: 10 }}>
                                    {errors.description}
                                </Text>
                            )}

                            <Text style={styles.assetTitle}>Location</Text>
                            <TextInput
                                // placeholder="Choose A Location"
                                value={values.location_id}
                                onChangeText={handleChange("location_id")}
                                onBlur={() => setFieldTouched("location_id")}
                                style={styles.textInputField}
                            />
                            {touched.location_id && errors.location_id && (
                                <Text style={{ fontSize: 10, color: "red", paddingLeft: 10 }}>
                                    {errors.location_id}
                                </Text>
                            )}

                            <Text style={styles.assetTitle}>Price</Text>
                            <TextInput
                                // placeholder="Choose A Category"
                                value={values.category}
                                onChangeText={handleChange("category")}
                                onBlur={() => setFieldTouched("category")}
                                style={styles.textInputField}
                            />
                            {touched.category && errors.category && (
                                <Text style={{ fontSize: 10, color: "red", paddingLeft: 10 }}>
                                    {errors.category}
                                </Text>
                            )}

                            <Button
                                iconRight={false}
                                title="Add New Asset"
                                type="solid"
                                color="blue"
                                onPress={handleSubmit}
                                buttonStyle={styles.button}
                            />

                            <OrderUpc />
                        </KeyboardShift>
                    </View>
                )}
            </Formik>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        width: "90%",
        alignSelf: "center",
        marginVertical: 10
    },
    upc: {
        marginBottom: -20,
        marginLeft: 20,
        marginTop: 20
    },
    textInputField: {
        height: 40,
        width: "90%",
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 15,
        alignSelf: "center",
        paddingLeft: 10,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10
    },
    activeText: {
        color: "#3366FF",
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%",
    },
    activeTab: {
        width: "50%",
        height: 1,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#3366FF",
    },
    assetSection: {
        flexDirection: "row",
        color: "white",
        backgroundColor: "#EFEFF4",
        height: 50,
        width: "100%",
    },
    photoContainer: {
        backgroundColor: "#EFEFF4",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 130
    },
    photoIcon: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    qrCode: {
        marginLeft: 50
    },
    assetTitle: {
        marginLeft: 20,
        fontSize: 15,
        marginTop: 20
    }
});

export default withNavigation(AssetsAdd);