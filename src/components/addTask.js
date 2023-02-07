import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../asserts/styles/addTask.css";
import { addTask, editTask, setEdit } from "../actions/taskAction";

const AddTask = () => {
    const [formData, setFormData] = useState({ title: "", description: "" });
    const [showMessage, setShowMessage] = useState(false);
    const data = useSelector((state) => state);
    const dispatch = useDispatch();
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleClear = () => {
      setFormData((prev) => {
        return { ...prev, title: "", description: "", id: "" };
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowMessage((prev) => !prev);
      if (data.edit) {
        dispatch(editTask(formData, Number(data.edit)));
      } else {
        dispatch(addTask(formData));
      }
      handleClear();
      dispatch(setEdit(null));
      setTimeout(() => {
        setShowMessage((prev) => !prev);
      }, 1000);
    };
  
    useEffect(() => {
      if (data.edit) {
        for (let i = 0; i <= data.tasks.length; i++) {
          if (data.tasks[i].id == Number(data.edit)) {
            setFormData(data.tasks[i]);
            break;
          }
        }
      }
    }, [data.edit]);

    return (
        <div className="addtask">
            {showMessage ? (
              <div style={{ color: "green" }}>
                <h5>Task Added Successfully</h5>
              </div>
            ) : (
              ""
            )}
            <form onSubmit={handleSubmit}>
                <input
                    className="mt-4"
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    style={{ width: "70%", marginLeft: "15%", border: "1px solid black" }}
                    name="title"
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    rows={4}
                    className="mt-4"
                    style={{
                        width: "70%",
                        marginLeft: "15%",
                        display: "block",
                        border: "1px solid black",
                    }}
                    placeholder="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <div
                  className="d-flex justify-content-end"
                  style={{ marginRight: "15%" }}
                >
                    <button type="button" className="btn btn-secondary btn-sm m-2 px-3" onClick={handleClear}>
                        Clear
                    </button>
                    <button type="submit" className="btn btn-primary btn-sm m-2">
                        {data.edit ? "Edit" : "Add Task"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask
