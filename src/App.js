import './App.css';
import AddTask from "./components/addTask";
import ShowTask from "./components/showTask";

function App() {
  return (
    <div className="row mt-5">
        <div className="d-flex justify-content-center title ">
            <p className="m-3">TASK KEEPER</p>
        </div>
        <AddTask />
        <ShowTask />
    </div>
  );
}

export default App;
