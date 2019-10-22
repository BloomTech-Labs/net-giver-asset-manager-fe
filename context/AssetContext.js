import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import assetsApi from "../api/assets";
import { navigate } from "../navigationRef";

const assetReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const populateAssetForm = () => {};

export const { Provider, Context } = createDataContext(assetReducer, {});
