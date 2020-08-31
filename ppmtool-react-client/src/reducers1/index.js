import { combineReducers } from "redux";
import errorReducer from "./errorReducer";

export default combineReducers({
  errors: errorReducer, //ovde je reducer sa grreskama
}); // ovde su svi reduceri koje hocemo kreiramo i da eksportujemo
