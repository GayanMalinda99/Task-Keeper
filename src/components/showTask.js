import React from "react";
import "../asserts/styles/showTask.css";

const ShowTask = () => {

    const taskListDummy = [
    { title: "task1", description: "have to complete task 1" },
    { title: "task2", description: "have to complete task 2" },
    { title: "task3", description: "have to complete task 3" },
  ];

  return (
    <div className="showtask">
      {taskListDummy.map((task) => {
        return (
          <div className="d-flex task m-3" style={{ alignItems: "center" }}>
            <span>{task.title}</span>
            <div style={{ display: "inline-block" }}>
              <button type="button" className="btn btn-success btn-sm m-2 px-3">
                Edit
              </button>
              <button type="button" className="btn btn-danger btn-sm m-2">
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTask;