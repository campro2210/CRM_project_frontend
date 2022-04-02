import axios from "../helpers/axios";
import { authConstants } from "./constants";

export const login = (Employee) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post("/admin/signin", {
      ...Employee,
    });
    if (res.status === 200) {
      const { token, Employee } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(Employee));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          Employee,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILTURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILTURE,
        payload: { error: "Failed to Lognin " },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    // dispatch({ type: authConstants.LOGIN_REQUEST });
    // const res = await axios.post(`/admin/signout`);
    // if (res.status === 200) {
    //   localStorage.clear();
    //   dispatch({
    //     type: authConstants.LOGOUT_SUCCESS,
    //   });
    // } else {
    //   dispatch({
    //     type: authConstants.LOGOUT_FAILURE,
    //     payload: { error: res.data.error },
    //   });
    // }
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    localStorage.clear();
    dispatch({
      type: authConstants.LOGOUT_SUCCESS,
    });
  };
};