import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "../actions/types";

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
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload, //dispatch project from the project actions to the store
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.projectIdentifier !== action.payload
        ), //ovo sluzi da ne bismo morali da refreshujemo stranicu kako bi se obrisao neki element vec on menja stanje dinamicki direktno i ne ide do baze ponovo
        //iz liste projekata nadji onaj projekat sa odredjenim idjem iz action.payload-a
      };
    default:
      return state; //ako nema gresaka vrati stanje u Store
  }
}
