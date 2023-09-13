import { combineReducers } from "redux";

import authReducer from "./AuthReducers";
import postReducer from "./PostReducers";
// import chatReducer from "./ChatUserReducer";

export const reducers = combineReducers({authReducer,postReducer})