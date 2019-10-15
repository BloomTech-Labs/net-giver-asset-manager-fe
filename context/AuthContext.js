import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import assetsApi from "../api/assets";
import { navigate } from "../navigation/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });

    navigate("BarcodeScanner");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up"
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("BarcodeScanner");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign in"
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup },
  { token: null, errorMessage: "" }
);
