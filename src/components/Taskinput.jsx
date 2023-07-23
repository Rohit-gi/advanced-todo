import React from "react";
import { useState } from "react";

export const Taskinput = ({ taskList, setTaskList }) => {
  const [newTask, setNewTask] = useState("");

  const getInitialState = () => {
    const value = "Doctor";
    return value;
  }
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isChecked, setIsChecked] = useState(false)
  const [dropValue, setDropValue] = useState(getInitialState)

  const handleIsChecked = (event) => {
    setIsChecked(event.target.checked)
  }

  const handledropValue = (event) => {
    setDropValue(event.target.value)
  }

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const addTask = {
      // created task object with id & taskname
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1, //to increase tasklist id by 1
      taskName: newTask,
      completed: false,
      name,
      age,
      isChecked, 
      profession: dropValue
    };
    newTask && setTaskList([...taskList, addTask]); //used && so that any empty value is not submitted
    console.log(taskList);
  };

  return (
    <>
      <div className="addNewTask">
        <form>
          <h3>Name:</h3>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name here"
          />
          <h3>Age:</h3>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age here"
          />
          <hr />
          <h3>
            Employed? :{" "}
            <input type="checkbox" name="myCheckbox" checked={isChecked} onChange={handleIsChecked}/>
          </h3>
          <hr/>
          <h3> Profession:{" "}
          <select value={dropValue} onChange={handledropValue}>
          <option value="Doctor">Doctor</option>
          <option value="Engineer">Engineer</option>
          <option value="Other">Other</option>
          </select>
          <p>{`Your profession is ${dropValue}`}</p>
          </h3>          
        </form>
        <h3 className="task">Tasks: </h3>
        <input onChange={handleChange} placeholder="Add new task here" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};
