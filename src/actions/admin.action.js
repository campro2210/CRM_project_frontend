import axios from "../helpers/axios";
import { adminConstants, userConstants } from "./constants";

export const getEmployee = () => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_GET_EMPLOYEE_REQUEST });
    const res = await axios.get("/admin/get-all-employee");

    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: adminConstants.ADMIN_GET_EMPLOYEE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_GET_EMPLOYEE_FAILURE });
    }
  };
};

export const getDepartment = () => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_GET_DEPARTMENT_REQUEST });
    const res = await axios.get("/admin/get-department");
    if (res.status === 200) {
      dispatch({
        type: adminConstants.ADMIN_GET_DEPARTMENT_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_GET_DEPARTMENT_FAILURE });
    }
  };
};

export const createEmployee = (employee) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_CREATE_EMPLOYEE_REQUEST });
    const res = await axios.post("/admin/create-employee", {
      ...employee,
    });
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: adminConstants.ADMIN_CREATE_EMPLOYEE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_CREATE_EMPLOYEE_FAILURE });
    }
  };
};

export const getDetailEmployee = () => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_GET_DETAIL_EMPLOYEE_REQUEST });
    const res = await axios.get("/admin/get-employee/:slug");
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: adminConstants.ADMIN_GET_DETAIL_EMPLOYEE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_GET_DETAIL_EMPLOYEE_FAILURE });
    }
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_CREATE_USER_REQUEST });
    const res = await axios.post("/admin/create-user", {
      ...user,
    });
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: adminConstants.ADMIN_CREATE_USER_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_CREATE_USER_FAILURE });
    }
  };
};

export const getEmployeeBySlug = (_id) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_GET_EMPLOYEE_BY_SLUG_REQUEST });
    const res = await axios.get(`/admin/get-employee/${_id}`);
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: adminConstants.ADMIN_GET_EMPLOYEE_BY_SLUG_SUCCESS,
        payload: res.data.Employee,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_GET_EMPLOYEE_BY_SLUG_FAILURE });
    }
  };
};
