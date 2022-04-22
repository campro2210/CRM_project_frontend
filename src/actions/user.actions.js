import axios from "../helpers/axios";
import { authConstants, userConstants } from "./constants";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const res = await axios.post("/signup", {
      ...user,
    });
    if (res.status === 200) {
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: {},
      });
    }
    // else {
    //   if (res.status === 400) {
    //     dispatch({
    //       type: userConstants.USER_REGISTER_FAILURE,
    //       payload: { error: res.data.error },
    //     });
    //   }
    // }
  };
};
export const user_verify = (otp) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_VERIFY_OTP_REQUEST });
    const res = await axios.post("/verify", { ...otp });
    if (res.status === 200) {
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: {},
      });
    }
  };
};

export const user_signOut = () => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGOUT_REQUEST})
    window.localStorage.removeItem("customer")
    window.localStorage.removeItem("customer_token")
    dispatch({type: authConstants.LOGOUT_SUCCESS})
  }
}