import React from "react";
import ShowTask from "../components/showTask";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="row mt-5">
      <div style={{ alignItems: "center" }}>
        <div className="d-flex justify-content-center title ">
            <p className="m-3 mt-4 mb-4">TASK KEEPER</p>
        </div>
        <div>
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