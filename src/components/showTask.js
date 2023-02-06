import React, { useEffect, useState } from "react";
import "../asserts/styles/showTask.css";
import { useSelector, useDispatch } from "react-redux";
import { 
  deleteTask, 
  getAllTasks, 
  setEdit 
} from "../actions/taskAction";
import { Link } from "react-router-dom";

const ShowTask = ({ setShowMessage }) => {
  const { tasks, edit } = useSelector((state) => state);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const handleDelete = (e) => {
    setShowMessage((prev) => !prev);
    if (!edit) {
      dispatch(deleteTask(e.target.id));
      setTimeout(() => {
        setShowMessage((prev) => !prev);
      }, 3000);
    }
  };

  const handleEdit = (e) => {
    dispatch(setEdit(e.target.id));
  };

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <>
      {tasks.length !== 0 && (
        <div className="showtask">
          {tasks.map((task, index) => {
            <div className="task m-3" onClick={handleClick}>
            <div className="d-flex " style={{ alignItems: "center" }} key={index}>
              <span className="ml-1" style={{ alignItems: "center" }}>
                {task.title}
              </span>
              <div className="buttondiv">
                <Link to="/tasks/add">
                  <button
                    type="button"
                    className="btn btn-success btn-sm m-2 px-3"
                    id={task.id}
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger btn-sm m-2"
                  id={task.id}
                  onClick={handleDelete}
                >
                  delete
                </button>
              </div>
            </div>
            {clicked && (
              <div className="ml-1" style={{ margineLeft: "5%" }}>
                {task.description}
              </div>
            )}
          </div>
          })}
        </div>
      )}
    </>
  );
};

export default ShowTask