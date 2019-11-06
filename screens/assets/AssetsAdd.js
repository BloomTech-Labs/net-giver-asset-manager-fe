import React from "react";
import { Button, Input, Icon } from "react-native-elements";
import axios from "axios";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import KeyboardShift from "../../constants/KeyboardShift";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import OrderUpc from "../../components/OrderUpc";

import { Formik } from 'formik';


export default class AssetsAdd extends React.Component {

    render() {

        if (this.props.navigation.state.params) {
            var barkode = this.props.navigation.state.params.data
        }

        console.log('test', barkode)


        return (
            <Formik
                initialValues={{


                    name: '',
                    category: '',
                    description: '',
                    barcode: '',
                    check_in_status: 0,

                    user_id: 1,
                    location_id: 1
                }}


                onSubmit={(values) => axios
                    .post("https://net-giver-asset-mngr.herokuapp.com/api/assets", values)
                    .then(res => {
                        resetForm();
                        setAssets(res.data)
                        console.log(initialValues)

                    })
                    .catch(err => {
                        "Can not add"
                    })

                }
            >


                {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (

                    <View style={styles.container}>
                        <KeyboardShift>


                            <TouchableOpacity

                                onPress={() => this.props.navigation.navigate("BarcodeScanner")}
                            >

                                <MaterialCommunityIcons

                                    style={styles.upc}
                                    name="qrcode-scan"
                                    size={80}
                                />
                            </TouchableOpacity>

                            <Input
                                placeholder="Asset Name"
                                value={values.name}
                                onChangeText={handleChange("name")}
                                onBlur={() => setFieldTouched("name")}
                                clearButtonMode="always"
                                inputStyle={styles.inputField}
                            />
                            {touched.name && errors.name && (
                                <Text style={{ fontSize: 10, color: "red" }}>{errors.name}</Text>
                            )}
                            <Input
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
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.barcode}
                                </Text>
                            )}

                            <Input
                                placeholder="Add Description"
                                value={values.description}
                                onChangeText={handleChange("description")}
                                onBlur={() => setFieldTouched("description")}
                                inputStyle={styles.inputField}
                            />
                            {touched.description && errors.description && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.description}
                                </Text>
                            )}

                            <Input
                                placeholder="Choose A Category"
                                value={values.category}
                                onChangeText={handleChange("category")}
                                onBlur={() => setFieldTouched("category")}
                                inputStyle={styles.inputField}
                            />
                            {touched.category && errors.category && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.category}
                                </Text>
                            )}



                            <Input
                                placeholder="Choose A Location"
                                value={values.location_id}
                                onChangeText={handleChange("location_id")}
                                onBlur={() => setFieldTouched("location_id")}
                                inputStyle={styles.inputField}
                            />
                            {touched.location_id && errors.location_id && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                    {errors.location_id}
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
        );
    }
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
        marginBottom: 15,
        marginLeft: '40%',
        marginTop: 20
    },
    inputField: {
        height: 40,
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
        alignSelf: "center",
        paddingLeft: 10,
        marginTop: 20,
        borderBottomWidth: 0
    }
});
