import { AsyncStorage, Alert } from "react-native";
import createDataContext from "./createDataContext";
import assetsApi from "../api/assets";
import { navigate } from "../navigationRef";

const assetReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// const handleScan = dispatch => async ({ type, data }) => {
//   try {
//     const response = await assetsApi.get("/auth/assets", { type, data });
//     if (response.data === req.body)
//     dispatch({ type: handleScan, payload: response.data.data });
//   } catch (err) {
//     if (!response.data.data && checkin = true) {
//       Alert.alert( `Bar code with type ${type} and data ${data} has been scanned!`,
//       "time to work",
//       [
//         {
//           text: "Create New Item",
//           onPress: () =>
//             this.props.navigation.navigate("AssetForm", {
//               asset: data
//             })
//     }
//   } else if {

//   }
// };

const populateAssetForm = () => {};

export const { Provider, Context } = createDataContext(assetReducer, {});

// dispatch({
//   type: "handle_error",
//   payload: "please scan again"
// });
