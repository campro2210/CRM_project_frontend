import { axiosInstance as axios, axiosUser } from "../helpers/axios";
import { authConstants, userConstants } from "./constants";
import { useHistory, Navigate } from "react-router-dom";

export const login = (Employee) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post("/admin/signin", {
      ...Employee,
    });
    if (res.status === 200) {
      const { token, Account } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("employee", JSON.stringify(Account));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          Account,
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

export const user_signin = (user) => {
  return async (dispatch) => {
    if (user) {
      dispatch({ type: authConstants.LOGIN_REQUEST });
      const res = await axiosUser.post("/signin", { ...user });
      if (res.status == 200) {
        const { token, user } = res.data;
        localStorage.setItem("customer_token", token);
        localStorage.setItem("customer", JSON.stringify(user));
        dispatch({
          type: userConstants.USER_SIGNIN_SUCCESS,
          payload: { token, user },
        });
      }
    }
  };
};
