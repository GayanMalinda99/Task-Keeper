import { SET_ALL_TASKS } from "../constants/actionTypes";

export const fetchAllTasks = () => {
    return {
        type: SET_ALL_TASKS,
        payload: [
            {
                title: "Task 1",
                description : "has to complete task 1"
            },
            {
                title: "Task 2",
                description : "has to complete task 2"
            },
            {
                title: "Task 3",
                description : "has to complete task 3"
            },
            {
                title: "Task 4",
                description : "has to complete task 4"
            },
            {
                title: "Task 5",
                description : "has to complete task 5"
            }
        ],
    }
};