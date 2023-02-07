import './App.css';
import HomePage from "./pages/homePage";
import AddTaskPage from "./pages/addPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="row mt-5" style={{ alignItems: "center" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="tasks/home" />} />
            <Route path="/tasks" element={<Navigate to="/tasks/home" />} />
            <Route path="tasks/home" element={<HomePage />} />
            <Route path="tasks/add" element={<AddTaskPage />} />
            <Route
                  exact
                  path="*"
                  element={<Navigate to="/tasks/home" replace />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
