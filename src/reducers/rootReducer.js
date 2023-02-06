import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  tasksList: taskReducer,
});

export default rootReducer;