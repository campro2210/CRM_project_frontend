import { adminConstants } from "../actions/constants";

const initState = {
  department: [],
  employees: [],
  employee: {},
  users: [],
  user: {},
  loading: false,
  error: false,
  message: "",
  feedbacks: [],
  feedback: {},
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

    case adminConstants.ADMIN_GET_EMPLOYEE_TOKEN_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_GET_EMPLOYEE_TOKEN_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        employee: action.payload.employeeFind,
      });

    case adminConstants.ADMIN_GET_DEPARTMENT_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_GET_DEPARTMENT_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        department: action.payload,
      });
    case adminConstants.ADMIN_CREATE_EMPLOYEE_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_CREATE_EMPLOYEE_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        employees: [...state.employees, action.payload],
      });
    case adminConstants.ADMIN_CREATE_USER_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_CREATE_USER_SUCCESS:
      return (state = {
        ...state,
        loading: false,
      });
    case adminConstants.ADMIN_GET_USER_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_GET_USER_SUCCESS:
      return (state = {
        ...state,
        users: action.payload,
        loading: false,
      });
    case adminConstants.ADMIN_GET_USER_BY_SLUG_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_GET_USER_BY_SLUG_SUCCESS:
      return (state = {
        ...state,
        user: action.payload,
        loading: false,
      });
    case adminConstants.ADMIN_GET_EMPLOYEE_BY_SLUG_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_GET_EMPLOYEE_BY_SLUG_SUCCESS:
      return (state = {
        ...state,
        employee: action.payload,
        loading: false,
      });
    case adminConstants.ADMIN_DELETE_EMPLOYEE_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_DELETE_EMPLOYEE_SUCCESS:
      return (state = {
        ...state,
        loading: false,
      });
    case adminConstants.ADMIN_UPDATE_EMPLOYEE_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_UPDATE_EMPLOYEE_SUCCESS:
      return (state = {
        ...state,
        loading: false,
      });

    case adminConstants.ADMIN_LOAD_FEEDBACK_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_LOAD_FEEDBACK_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        feedbacks: action.payload,
      });
    case adminConstants.ADMIN_GET_DETAIL_FEEDBACK_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case adminConstants.ADMIN_GET_DETAIL_FEEDBACK_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        feedback: action.payload,
      });
    default:
      return state;
  }
};
