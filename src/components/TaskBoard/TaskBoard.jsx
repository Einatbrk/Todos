import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import './TaskBoard.css';

const TaskBoard = ({ tasks, handleClearTask }) => {
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [checkedTasksCount, setCheckedTasksCount] = useState(0);

  const handleCheckboxChange = (task) => {
    if (checkedTasks.includes(task)) {
      setCheckedTasks((prevCheckedTasks) =>
        prevCheckedTasks.filter((checkedTask) => checkedTask !== task)
      );
    } else {
      setCheckedTasks((prevCheckedTasks) => [...prevCheckedTasks, task]);
    }
  };

  const handleClearTaskButtonClick = () => {
    handleClearTask(checkedTasks);
    setCheckedTasks([]);
  };

  useEffect(() => {
    // Update the count whenever checkedTasks changes
    setCheckedTasksCount(checkedTasks.length);
  }, [checkedTasks]);

  return (
    <div className="task-board">
      <div className="task-container">
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li className="tasks-input" key={index}>
              <div>
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={checkedTasks.includes(task)}
                  onChange={() => handleCheckboxChange(task)}
                />
                <label htmlFor={`checkbox-${index}`}>{task}</label>
              </div>
            </li>
          ))}
        </ul>
        <div className="bottom-buttons-container">
          <div className="item-counting">
            <span>Marked items: {checkedTasksCount}</span>
          </div>
          <Button
            name="clearTask"
            type="submit"
            value="clearTask"
            className="clearTask"
            id="clearTask"
            onClick={handleClearTaskButtonClick}
          >
            Clear Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
