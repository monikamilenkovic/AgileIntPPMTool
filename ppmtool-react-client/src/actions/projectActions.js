import axios from "axios";
import { GET_ERRORS, GET_PROJECTS } from "./types";
import errorReducer from "../reducers1/errorReducer";
import projectReducer from "../reducers1/projectReducer";

//odakle stizu project i history??? - iz AddProject
//arrow function vraca dispatch funkciju
export const createProject = (project, history) => async (dispatch) => {
  //arow function , history nam dozvoljava da redirectujemo kad odemo na submit dugme, odnosno da mozemo da uradimo PUSH na dashboard nakon sto kreiramo projekat
  try {
    const res = await axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard"); //ako se kreira projekat hocemo da se useru prikaze dashboard kako bi se video novi kreirani projekat
  } catch (error) {
    dispatch({
      //ako se desi greska hocemo da ovo prosledimo do reducera, to store-a i posle da se ispise kod klijenta tip greske
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getProjects = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/project/all");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data, //podaci iz baze
  });
};
