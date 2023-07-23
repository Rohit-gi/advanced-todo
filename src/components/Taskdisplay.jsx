import React from "react";

export const Taskdisplay = ({ taskList, setTaskList }) => {
  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <table>
        <tr>
          <th>Full Name</th>
          <th>Age</th>
          <th>Employed</th>
          <th>Profession</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Remove</th>
        </tr>
        {taskList.map((task) => (
          <tr>
            <td>{task.name}</td>
            <td>{task.age}</td>
            <td>{task.isChecked ? "Yes" : "No"}</td>
            <td>{task.profession}</td>
            <td style={{ backgroundColor: task.completed ? "green" : "white" }}>
              {task.taskName}
            </td>
            <td>
              <button onClick={() => completeTask(task.id)}>Complete</button>
            </td>
            <td>
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
