import React from "react";
import "../asserts/styles/showTask.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchAllTasks } from "../actions/taskAction"

const ShowTask = () => {

    const taskListDummy = [
    { title: "Task1", description: "have to complete task 1" },
    { title: "Task2", description: "have to complete task 2" },
    { title: "Task3", description: "have to complete task 3" },
  ];

  return (
    <div className="showtask">
      {this.props.tasks.map((task) => {
        return (
          <div className="d-flex task m-3" style={{ alignItems: "center" }}>
            <span>{task.title}</span>
            <div style={{ display: "inline-block" }}>
              <button type="button" className="btn btn-success btn-sm m-2 px-3 btn-radious">
                Edit
              </button>
              <button type="button" className="btn btn-danger btn-sm m-2 btn-radious">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function mapStateToProps(state){
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(ShowTask)