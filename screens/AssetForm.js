import React, { useState, Component, Fragment } from "react";
import { Button, Input, Icon } from "react-native-elements";
import axios from "axios";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Alert
} from "react-native";

// import Spacer from "../components/Spacer";
// import axios from 'axios';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as yup from "yup";
import { Formik, withFormik } from "formik";

export default class AssetForm extends Component {
  render() {
    const asset = this.props.navigation.getParam("assets");

    return (
      <Formik
        initialValues={{
          barcode: "",
          name: "",
          check_in_status: "1",
          user_id: "1",
          location_id: "1"
        }}
        onSubmit={values =>
          axios
            .post(
              "https://net-giver-asset-mngr.herokuapp.com/api/assets",
              values
            )
            .then(res => {
              resetForm();
              setAssets(res.data);
            })
            .catch(err => {
              "Can not add";
            })
        }

        // validationSchema={yup.object().shape({
        //   barcode: yup
        //     .string()
        //     .required(),
        //   password: yup
        //     .string()
        //     .min(6)
        //     .required(),
        // })}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit
        }) => (
          <Fragment>
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
              label="Barcode"
              name="barcode"
              value={values.barcode}
              onChangeText={handleChange("barcode")}
              onBlur={() => setFieldTouched("barcode")}
              autoCapitalize="none"
            />
            {touched.barcode && errors.barcode && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.barcode}
              </Text>
            )}
            <Input
              label="Name"
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={() => setFieldTouched("name")}
            />
            {touched.name && errors.name && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.name}</Text>
            )}

            <Input
              label="Check Status"
              value={values.check_in_status}
              onChangeText={handleChange("check_in_status")}
              onBlur={() => setFieldTouched("check_in_status")}
            />
            {touched.check_in_status && errors.check_in_status && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.check_in_status}
              </Text>
            )}

            <Input
              label="User ID"
              value={values.user_id}
              onChangeText={handleChange("user_id")}
              onBlur={() => setFieldTouched("user_id")}
            />
            {touched.user_id && errors.user_id && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.user_id}
              </Text>
            )}

            <Input
              label="Location ID"
              value={values.location_id}
              onChangeText={handleChange("location_id")}
              onBlur={() => setFieldTouched("location_id")}
            />
            {touched.location_id && errors.location_id && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.location_id}
              </Text>
            )}
            <Button
              iconRight={false}
              title="Add Asset"
              type="solid"
              color="blue"
              onPress={handleSubmit}
              icon={<Icon name="check" color="white" />}
              disabled={!isValid}
              onPress={handleSubmit}
              containerStyle={styles.button}
            />
          </Fragment>
        )}
      </Formik>
    );
  }
}

// const asset = navigation.getParam(("assets"));

// const AssetForm = ({ navigation, values,
//   errors,
//   status,
//   touched,
//   handleBlur,
//   handleChange,
//   handleSubmit,
//   isSubmitting, }) => {
//   const [assets, setAssets] = useState({
//     name: '',
//     barcode: '',
//     check_in_status: '',
//     location_id: '',
//     user_id: ''
//   })

// Post assets
// const getAssetsList = () => {
//   axios
//     .post("https://net-giver-asset-mngr.herokuapp.com/api/assets")
//     .then(response => {
//       console.log(response.data);
//       setAssets(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     })
// };

// This function can make our POST request to the backend
// const handleSubmit = () => {

//   axios
//     .post("https://net-giver-asset-mngr.herokuapp.com/api/assets")
//     .then(response => {
//       console.log(response.data);
//       setAssets({
//         name: '',
//         barcode: '',
//         check_in_status: '',
//         location_id: '',
//         user_id: ''
//       });
//     })
//     .catch(error => {
//       console.log(error);
//     })

// };

// const onChangeText = ev => {
//   let name = ev.target.name;

//   setAssets({
//     ...assets,
//     [ev.target.name]: name
//   });

//   console.log('assets', name)
// };

// function onChangeText(text, field) {
//   if (field == 'name') {
//     setAssets({ name: text })
//   }
//   console.log(text);
// }

// const asset = navigation.getParam(("assets"));
// console.log("asset nav-->", asset)
//   const data = props.state.params.data;
//   console.log("data test:", props.state.params.data);

//   return (
//     <>

//       <TouchableOpacity
//         onPress={() => navigation.navigate("BarcodeScanner")}
//       >
//         <MaterialCommunityIcons
//           style={styles.upc}
//           name="qrcode-scan"
//           size={40}
//         />
//       </TouchableOpacity>

//       <Spacer>
//         <TextInput
//           value={assets.barcode}
//           onChangeText={handleChange('barcode')}
//           onBlur={() => setFieldTouched('barcode')}
//           placeholder="barcode"
//         />
//         {touched.barcode && errors.barcode &&
//           <Text style={{ fontSize: 10, color: 'red' }}>{errors.barcode}</Text>
//         }
//         {/* <Input
//           label="Barcode"
//           name="barcode"
//           value={assets.barcode}

//           autoCapitalize="none"
//           blurOnSubmit={true}
//         /> */}
//       </Spacer>

//       <Spacer>
//         <Input
//           label="Name"
//           name="name"
//           value={assets.name}

//           autoCapitalize="none"
//           autoCorrect={false}
//           blurOnSubmit={true}
//         />
//       </Spacer>

//       <Spacer>
//         <Input
//           label="Checked in"
//           name="check_in_status"
//           value={assets.check_in_status}

//           autoCapitalize="none"
//           autoCorrect={false}
//         />
//       </Spacer>

//       <Spacer>
//         <Input

//           label="User ID"
//           name="user_id"
//           value={assets.user_id}

//           autoCapitalize="none"
//           autoCorrect={false}
//         />
//       </Spacer>

//       <Spacer>
//         <Input

//           label="Location ID"
//           name="location_id"

//           autoCapitalize="none"
//           autoCorrect={false}
//         />
//       </Spacer>

//       <Button

//         iconRight={false}
//         type="solid"
//         color="blue"
//         onPress={handleSubmit}
//         icon={
//           <Icon
//             name="check"
//             color="white"
//           />
//         }
//         containerStyle={styles.button}
//       />
//     </>
//   );
// };

const styles = StyleSheet.create({
  button: {
    width: "80%",
    alignSelf: "center"
  },
  upc: {
    marginBottom: 30,
    marginLeft: 185,
    marginTop: 20
  }
});

// export default AssetForm;
