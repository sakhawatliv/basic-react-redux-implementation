import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

const reducer = {
  CounterReducer
};

const rootReducer = combineReducers({
  ...reducer
});

export default rootReducer;
