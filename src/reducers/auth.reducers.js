import { authConstants, userConstants } from "../actions/constants";

const initState = {
  token: null,
  user: {},
  userAuthenticate: false,
  authenticate: false,
  authenticating: false,
  loading: false,
  error: false,
  message: "",
};
export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return (state = {
        ...state,
        authenticating: true,
      });
    case authConstants.LOGIN_SUCCESS:
      return (state = {
        ...state,
        user: action.payload.Account,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      });
    case userConstants.USER_SIGNIN_REQUEST:
      return (state = {
        ...state,
        authenticating: true,
      })
    case userConstants.USER_SIGNIN_SUCCESS:
      return(state ={
        user: action.payload.user,
        token: action.payload.token,
        userAuthenticate: true,
        authenticating: false,
      })
    case authConstants.LOGOUT_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case authConstants.LOGOUT_SUCCESS:
      return (state = {
        ...initState,
      });
    case authConstants.LOGOUT_FAILURE:
      return (state = {
        ...state,
        error: action.payload.error,
        loading: false,
      });
    default:
      return state;
  }
};
