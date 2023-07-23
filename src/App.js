import "./App.css";
import { useState } from "react";
import { Taskinput } from "./components/Taskinput";
import { Taskdisplay } from "./components/Taskdisplay";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <Taskinput taskList={taskList} setTaskList={setTaskList} />
      <Taskdisplay taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
