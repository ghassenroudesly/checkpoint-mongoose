import { combineReducers } from "redux";
import contactReducer from "./Contact";

const rootReducer = combineReducers({ contactReducer });

export default rootReducer;
