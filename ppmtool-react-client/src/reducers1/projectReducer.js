import { GET_PROJECTS } from "../actions/types";

const initialState = {
  projects: [], //niz projekata
  project: {}, //jedan projekat zbog update case-a
}; //pocetno stanje reducera

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload, //ovo hocemo do store-a, a dolazi iz projectActions.js(res.data)
      };
    default:
      return state; //ako nema gresaka vrati stanje u Store
  }
}
