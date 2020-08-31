import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload; //uzmemo errors sa servera i vratimo sta treba da se desi ako se desi error
    default:
      return state; //ako nema gresaka vrati stanje u Store
  }
}
