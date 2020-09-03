import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers1"; //dolazi iz combineReducers a tu se nalaze svi Reduceri

const initialState = {}; //inicijalno stanje aplikacije
const middleware = [thunk];

let store;

//konfiguracija da radi i za druge pretrazivace
if (window.navigator.userAgent.includes("Chrome")) {
  store = createStore(
    //ako nam prepozna chrome kao pretrazivac kreiracemo store koji prima navedene parametre
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && //ekstenzija za chrome
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware)) //necemo ekstenziju jer za sve druge browsere je to NULL
  );
}
export default store;
