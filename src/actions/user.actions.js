import axios from "../helpers/axios";
import { authConstants, userConstants } from "./constants";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const res = await axios.post("/signup", {
      ...user,
    });
    if (res.status === 200) {
      console.log(res.data);
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
