import './App.css';
import HomePage from "./pages/homePage";
import AddTaskPage from "./pages/addPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="row mt-5" style={{ alignItems: "center" }}>
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
