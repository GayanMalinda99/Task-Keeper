import { SET_ALL_TASKS,
        ADD_TASK,
        DELETE_TASK,
        SET_EDIT,
        EDIT_TASK
} from "../constants/actionTypes";

const taskReducer = (state = {tasks: [], edit: null}, action) => {
  switch (action.type) {
    case SET_ALL_TASKS:
      return { ...state, tasks: action.data };
      break;
    case ADD_TASK:
      return { ...state, tasks: [action.data, ...state.tasks] };
      break;
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => task.id != action.data),
      };
      break;
    case SET_EDIT:
      return { ...state, edit: action.data };
      break;
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id == action.data.id) {
            return action.data.data;
          } else {
            return task;
          }
        }),
      };
      break;
    default:
      return state;
    }
}

export default taskReducer;