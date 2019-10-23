import React, { useState, Component, Fragment } from "react";
import { Button, Input, Icon } from "react-native-elements";
import axios from 'axios';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as yup from 'yup';
import { Formik, withFormik } from 'formik';



export default class AssetForm extends Component {

  render() {
    const asset = this.props.navigation.getParam(("assets"));

    return (

      <Formik

        initialValues={{
          barcode: '',
          name: '',
          category: '',
          description: '',
          check_in_status: null,
          user_id: 1,
          location_id: null
        }}
        onSubmit={values => axios
          .post("https://net-giver-asset-mngr.herokuapp.com/api/assets", values)
          .then(res => {
            resetForm();
            setAssets(res.data)

          })
          .catch(err => {
            "Can not add"
          })
        }


      >

        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (

          <>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("BarcodeScanner")}
            >
              <MaterialCommunityIcons
                style={styles.upc}
                name="qrcode-scan"
                size={40}
              />
            </TouchableOpacity>


            <Input
              placeholder="Asset Name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              clearButtonMode="always"
              inputStyle={styles.inputField}
            />
            {touched.name && errors.name &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
            }
            <Input
              placeholder="Barcode ID"
              name="barcode"
              value={values.barcode}
              onChangeText={handleChange('barcode')}
              onBlur={() => setFieldTouched('barcode')}
              autoCapitalize="none"
              inputStyle={styles.inputField}

            />
            {touched.barcode && errors.barcode &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.barcode}</Text>
            }

            <Input
              placeholder="description"
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              inputStyle={styles.inputField}
            />
            {touched.description && errors.description &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.description}</Text>
            }

            <Input
              placeholder="Category"
              value={values.category}
              onChangeText={handleChange('category')}
              onBlur={() => setFieldTouched('category')}
              inputStyle={styles.inputField}
            />
            {touched.category && errors.category &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.category}</Text>
            }

            <Input
              placeholder="Checkin Status"
              value={values.check_in_status}
              onChangeText={handleChange('check_in_status')}
              onBlur={() => setFieldTouched('check_in_status')}
              inputStyle={styles.inputField}
            />
            {touched.check_in_status && errors.check_in_status &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.check_in_status}</Text>
            }

            <Input
              placeholder="Choose A Location"
              value={values.location_id}
              onChangeText={handleChange('location_id')}
              onBlur={() => setFieldTouched('location_id')}
              inputStyle={styles.inputField}
            />
            {touched.location_id && errors.location_id &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.location_id}</Text>
            }

            <Button
              iconRight={false}
              title='Add New Asset'
              type="solid"
              color="blue"
              onPress={handleSubmit}
              disabled={!isValid}
              onPress={handleSubmit}
              buttonStyle={styles.button}
            />

          </>
        )}
      </Formik >
    );
  }
}




const styles = StyleSheet.create({
  button: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 20
  },
  upc: {
    marginBottom: 30,
    marginLeft: 185,
    marginTop: 20
  },
  inputField: {

    height: 40,
    width: "91%",
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    alignSelf: "center",
    paddingLeft: 10,
    marginTop: 20,
    borderBottomWidth: 0
  }

});

