import { axiosInstance as axios } from "../helpers/axios";
import { adminConstants } from "./constants";

export const getEmployee = () => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_GET_EMPLOYEE_REQUEST });
    const res = await axios.get("/admin/get-all-employee");

    if (res.status === 200) {
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
      console.log(res.data)
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
  console.log(employee)
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_CREATE_EMPLOYEE_REQUEST });
    const res = await axios.post("/admin/create-employee", {
      ...employee,
    });
    if (res.status === 200) {
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
      dispatch({
        type: adminConstants.ADMIN_GET_DETAIL_EMPLOYEE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_GET_DETAIL_EMPLOYEE_FAILURE });
    }
  };
};

export const getEmployeeByToken = (token) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_GET_EMPLOYEE_TOKEN_REQUEST })
    const res = await axios.post("/admin/get-empoloyee-by-token", { token: token })
    if (res.status === 200) {
      dispatch({
        type: adminConstants.ADMIN_GET_EMPLOYEE_TOKEN_SUCCESS,
        payload: res.data
      })
    } else {
      dispatch({ type: adminConstants.ADMIN_GET_EMPLOYEE_TOKEN_FAILURE })
    }
  }
}

export const createUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_CREATE_USER_REQUEST });
    const res = await axios.post("/admin/create-user", {
      ...user,
    });
    if (res.status === 200) {
      dispatch({
        type: adminConstants.ADMIN_CREATE_USER_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_CREATE_USER_FAILURE });
    }
  };
};

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_GET_USER_REQUEST });
    const res = await axios.get("/admin/get-all-user");

    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: adminConstants.ADMIN_GET_USER_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_GET_USER_FAILURE });
    }
  };
};

export const getUserBySlug = (_id) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_GET_USER_BY_SLUG_REQUEST });
    const res = await axios.post(`/admin/get-user/${_id}`);
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: adminConstants.ADMIN_GET_USER_BY_SLUG_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_GET_USER_BY_SLUG_FAILURE });
    }
  };
};

export const getEmployeeBySlug = (_id) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_GET_EMPLOYEE_BY_SLUG_REQUEST });
    const res = await axios.get(`/admin/get-employee/${_id}`);
    if (res.status === 200) {
      dispatch({
        type: adminConstants.ADMIN_GET_EMPLOYEE_BY_SLUG_SUCCESS,
        payload: res.data.Employee,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_GET_EMPLOYEE_BY_SLUG_FAILURE });
    }
  };
};

export const deleteCustomer = (email) => {
  return async (dispatch) => {
    console.log(email);
    dispatch({ type: adminConstants.ADMIN_DELETE_USER_REQUEST });
    const res = await axios.post("/admin/delete-user", { email: email });
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: adminConstants.ADMIN_DELETE_USER_SUCCESS,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_DELETE_USER_FAILURE });
    }
  };
};

export const deleteEmployee = (email) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_DELETE_EMPLOYEE_REQUEST });
    const res = await axios.post("/admin/delete-employee", { email: email });
    if (res.status === 200) {
      dispatch({
        type: adminConstants.ADMIN_DELETE_EMPLOYEE_SUCCESS,
      });
    } else {
      dispatch({ type: adminConstants.ADMIN_DELETE_EMPLOYEE_FAILURE });
    }
  };
};

export const updateEmployee = (employee) => {
  return async (dispatch) => {

    dispatch({ type: adminConstants.ADMIN_UPDATE_EMPLOYEE_REQUEST });
    const res = await axios.post("/admin/update-employee", { ...employee });
    if (res.status === 200) {
      dispatch({
        type: adminConstants.ADMIN_UPDATE_EMPLOYEE_SUCCESS,
        // payload: res.data
      });
    } else
      dispatch({
        type: adminConstants.ADMIN_UPDATE_EMPLOYEE_FAILURE,
      });
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_UPDATE_USER_REQUEST });
    const res = await axios.post("/admin/update-user", { ...user });
    if (res.status === 200) {
      dispatch({
        type: adminConstants.ADMIN_UPDATE_USER_SUCCESS,
        // payload: res.data
      });
    } else
      dispatch({
        type: adminConstants.ADMIN_UPDATE_USER_FAILURE,
      });
  };
};

export const loadFeedback = () => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_LOAD_FEEDBACK_REQUEST })
    const res = await axios.get("/admin/find-feedback")
    if (res.status === 200) {
      console.log(res.data)
      dispatch({
        type: adminConstants.ADMIN_LOAD_FEEDBACK_SUCCESS,
        payload: res.data.feedback
      })
    } else {
      dispatch({
        type: adminConstants.ADMIN_LOAD_FEEDBACK_FAILURE,
      })
    }
  }
}