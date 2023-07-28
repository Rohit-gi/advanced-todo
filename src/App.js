import "./App.css";
import { useState } from "react";
import { Taskinput } from "./components/Taskinput";
import { Taskdisplay } from "./components/Taskdisplay";
import { Navbar } from "./components/Navbar";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
    <Navbar/>
    <div className="App">
      <Taskinput taskList={taskList} setTaskList={setTaskList} />
      <Taskdisplay taskList={taskList} setTaskList={setTaskList}/>
    </div>  
    </>
    
  );
}

export default App;
