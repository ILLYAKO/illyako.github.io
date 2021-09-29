import { FETCH_PROJECTS, NEW_PROJECT } from "./types";
import ProjectService from "../../service/projectService";

export const fetchProjects = () => async (dispatch) => {
  try {
    const response = await ProjectService.projects();
    dispatch({
      type: FETCH_PROJECTS,
      payload: response.data,
    });
  } catch (error) {}
};

export const addProject = (formDataObj) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_PROJECT,
      payload: formDataObj,
    });
  } catch (error) {
    console.log(error);
  }
};
