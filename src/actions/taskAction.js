import {
  addTaskApi,
  getAllTasksApi,
  editTaskApi,
  deleteTaskApi,
} from "../backend-API/APIs";
import { SET_ALL_TASKS,
    ADD_TASK,
    DELETE_TASK,
    SET_EDIT,
    EDIT_TASK
} from "../constants/actionTypes";

export const addTask = (task) => async (dispatch) => {
  try {
    const { data } = await addTaskApi(task);
    dispatch({ type: ADD_TASK, data: data });
  } catch (error) {
    console.log("Error(addTask): " + error);
  }    
};

export const getAllTasks = () => async (dispatch) => {
  try {
    const { data } = await getAllTasksApi();
    dispatch({ type: SET_ALL_TASKS, data: data });
  } catch (error) {
    console.log("Error(getAllTasks): " + error);
  } 
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await deleteTaskApi(id);
    dispatch({ type: DELETE_TASK, data: id });
  } catch (error) {
    console.log("Error(deleteTask): " + error);
  } 
};

export const setEdit = (id) => (dispatch) => {
  try {
    dispatch({ type: SET_EDIT, data: id });
  } catch (error) {
    console.log("Error(setEdit): " + error);
  } 
};

export const editTask = (task, id) => async (dispatch) => {
  try {
    const { data } = await editTaskApi(id, task);
    dispatch({ type: EDIT_TASK, data: { data, id } });
  } catch (error) {
    console.log("Error(editTask): " + error);
  } 
};