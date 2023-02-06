import axios from "axios";

const BASE_URL = "http://localhost:8800";
const API = axios.create({ baseURL: BASE_URL });

export const addTaskApi = (data) => API.post("/tasks", data);
export const getAllTasksApi = () => API.get("/tasks");
export const editTaskApi = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTaskApi = (id) => API.delete(`/task/${id}`);