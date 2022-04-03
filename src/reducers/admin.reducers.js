import { adminConstants } from "../actions/constants";

const initState = {
  employees: [],
  loading: false,
  error: false,
  message: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case adminConstants.ADMIN_GET_EMPLOYEE_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_GET_EMPLOYEE_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        employees: action.payload.Employee,
      });
    default:
      return state;
  }
};
