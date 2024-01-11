// App.jsx
import React, { useState } from 'react';
import Top from './components/Top/Top.jsx';
import TaskBoard from './components/TaskBoard/TaskBoard.jsx';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const handleClearTask = (checkedTasks) => {
    if (checkedTasks.length > 0) {
      const remainingTasks = tasks.filter((task) => !checkedTasks.includes(task));
      setTasks(remainingTasks);
    }
  };

  return (
    <div>
      <Top onAddTask={handleAddTask} />
      <TaskBoard tasks={tasks} handleClearTask={handleClearTask}/>
    </div>
  );
};

export default App;
