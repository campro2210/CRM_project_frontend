import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducers";
import adminReducer from "./admin.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  admin: adminReducer,
});

export default rootReducer;
