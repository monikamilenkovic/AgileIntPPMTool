import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  errors: errorReducer, //ovde je reducer sa greskama
  project: projectReducer,
}); // ovde su svi reduceri koje hocemo kreiramo i da eksportujemo
