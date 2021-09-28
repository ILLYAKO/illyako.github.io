import {
  FETCH_PROJECTS,
  //  NEW_PROJECT
} from "./types";
import axios from "axios";

export const fetchProjects = () => async (dispatch) => {
  try {
    const response = await axios("./projectList.json");
    dispatch({
      type: FETCH_PROJECTS,
      payload: response.data,
    });
  } catch (error) {}
};
