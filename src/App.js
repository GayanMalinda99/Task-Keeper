import './App.css';
import HomePage from "./pages/homePage";
import AddPage from "./pages/addPage";
import AddTask from "./components/addTask";
import ShowTask from "./components/showTask";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="row mt-5" style={{ alignItems: "center" }}>
      <div style={{ alignItems: "center" }}>
        <div className="d-flex justify-content-center title ">
            <p className="m-3 mt-4 mb-4">TASK KEEPER</p>
        </div>
        <div>
          <button className="btn btn-primary btn-sm m-2 btn-radious">
              Add Task
          </button>
        </div>
      </div>
        
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="tasks/home" />} />
            <Route path="/tasks" element={<Navigate to="/tasks/home" />} />
            <Route path="tasks/home" element={<HomePage />} />
            <Route path="tasks/add" element={<AddPage />} />
            <Route
                  exact
                  path="*"
                  element={<Navigate to="/tasks/home" replace />}/>
          </Routes>
        </BrowserRouter>
        
        {/* <AddTask />
        <ShowTask /> */}
    </div>
  );
}

export default App;
