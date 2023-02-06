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
  const { data } = await addTaskApi(task);
  dispatch({ type: ADD_TASK, data: data });
};

export const getAllTasks = () => async (dispatch) => {
  const { data } = await getAllTasksApi();
  dispatch({ type: SET_ALL_TASKS, data: data });
};

export const deleteTask = (id) => async (dispatch) => {
  await deleteTaskApi(id);
  dispatch({ type: DELETE_TASK, data: id });
};

export const setEdit = (id) => (dispatch) => {
  dispatch({ type: SET_EDIT, data: id });
};

export const editTask = (task, id) => async (dispatch) => {
  const { data } = await editTaskApi(id, task);
  dispatch({ type: EDIT_TASK, data: { data, id } });
};