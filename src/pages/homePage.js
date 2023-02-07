import React, {useState} from "react";
import ShowTask from "../components/showTask";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setEdit } from "../actions/taskAction";

const HomePage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(setEdit(null));
  };

  return (
    <div className="row mt-2">
      {showMessage 
      ? <div style={{margineLeft:"50%", color:"red"}}>
        <h5>Task Deleted Successfully</h5>
      </div> : ""}
      <div style={{ alignItems: "center" }}>
        <div className="d-flex justify-content-center title ">
            <p className="m-3 mt-4 mb-4 "><b>TASK KEEPER</b></p>
        </div>
        <div className="my-4" style={{ marginLeft: "46.5%" }}>
          <Link to="/tasks/add">
            <button 
              className="btn btn-primary btn-sm m-2 justify-content-center"
              onClick={handleButtonClick}
            >
              Add Task
            </button>
          </Link>    
        </div>
      </div>
      <div className="row mt-5">
        <ShowTask setShowMessage={setShowMessage}/>
      </div>
    </div>
  );
};

export default HomePage;