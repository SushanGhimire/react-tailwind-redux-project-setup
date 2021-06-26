import { combineReducers } from "redux";
import handleIncDec from "./incDecReducer";

const rootReducer = combineReducers({
  IncDec: handleIncDec,
});

export default rootReducer;
