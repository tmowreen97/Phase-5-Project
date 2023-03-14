import loggedInReducer from "./loggedIn";
import userReducer from "./user";
import testReducer from "./test";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  loggedIn: loggedInReducer, 
  user: userReducer,
  test: testReducer
})

export default allReducers;