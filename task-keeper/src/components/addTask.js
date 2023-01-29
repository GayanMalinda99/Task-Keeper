import React, { useState } from "react";
import "../asserts/styles/addTask.css";

const AddTask = () => {
    // const [formData, setFormData] = useState({title:"", description:""});

    const formData = [
        { title: "task1", description: "have to complete task 1" },
        { title: "task2", description: "have to complete task 2" },
        { title: "task3", description: "have to complete task 3" },
      ];

    // const handleInputChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleClear = () => {
    //     setFormData(prev => {
    //     return {...prev, title:"", description:""}
    //     }) ;
    // }

    return (
        <div className="addtask">
            <form>
                <input
                    className="mt-4"
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    style={{ width: "70%", marginLeft: "15%", border: "1px solid black" }}
                    name="title"
                    // onChange={handleInputChange}
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
                    // onChange={handleInputChange}
                ></textarea>
                <div
                className="d-flex justify-content-end"
                style={{ marginRight: "15%" }}
                >
                    {/* <button type="button" className="btn btn-secondary btn-sm m-2 px-3" onClick={handleClear}></button> */}
                    <button type="button" className="btn btn-secondary btn-sm m-2 px-3" >
                        Clear
                    </button>
                    <button type="submit" className="btn btn-primary btn-sm m-2">
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask ;
