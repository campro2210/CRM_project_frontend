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
