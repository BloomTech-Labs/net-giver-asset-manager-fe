import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import assetsApi from "../api/assets";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await assetsApi.post("/auth/register", {
      email,
      password
    });
    await AsyncStorage.setItem("token", response.data.token);
    console.log("context test:", response.data);
    dispatch({ type: "signin", payload: response.data.token });

    navigate("BarcodeScanner");
  } catch (err) {
    console.log("test context", err);
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up!"
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await assetsApi.post("/auth/login", {
      email,
      password
    });
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

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("Login");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage },
  { token: null, errorMessage: "" }
);
