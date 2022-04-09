import { combineReducers } from "redux";
import transactions from "./TransactionReducer";
import visibilityFilter from "./FilterReducer";

export default combineReducers({
  transactions,
  visibilityFilter,
});