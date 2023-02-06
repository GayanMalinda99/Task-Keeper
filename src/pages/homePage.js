import React, {useState} from "react";
import ShowTask from "../components/showTask";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

const HomePage = () => {
  return (
    <div className="row mt-5">
      <div style={{ alignItems: "center" }}>
        <div className="d-flex justify-content-center title ">
            <p className="m-3 mt-4 mb-4"><b>TASK KEEPER</b></p>
        </div>
        <div className="my-4" style={{ marginLeft: "46.5%" }}>
          <Link to="/tasks/add">
            <button className="btn btn-primary btn-sm m-2 btn-radious justify-content-center">
              Add Task
            </button>
          </Link>    
        </div>
      </div>
      <ShowTask />
    </div>
  );
};

export default HomePage;