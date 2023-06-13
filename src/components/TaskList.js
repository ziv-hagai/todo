import { useTasks } from './TasksContext.js';
import { useState, useEffect } from 'react';
import Task from './Task.js';

export default function TaskList() {
  const tasks = useTasks();
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])
  return (
    <>
      <br />
      <br />
      {tasks.filter(task => task.done).length}
      {' of '}
      {tasks.length}
      {' tasks '}
      {tasks.filter(task => task.done).length === 1 ? ' is ' : ' are '}{' Done'}
      <br />
      <br />
      <button onClick={() => setFilteredTasks(tasks)}>
        All
      </button>
      <button onClick={() => setFilteredTasks(tasks.filter(task => task.done))}>
        Done
      </button>
      <button onClick={() => setFilteredTasks(tasks.filter(task => !task.done))}>
        ToDo
      </button>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
}
