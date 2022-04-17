import axios from "../helpers/axios";
import { userConstants } from "./constants";

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
export const VerifyOtp = (otp) => {
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

// export createFeedback =() => {

// }
