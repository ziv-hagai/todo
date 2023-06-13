import { useTasks } from './TasksContext.js';
import { useState, useEffect } from 'react';
import Task from './Task.js';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export default function TaskList() {
  const tasks = useTasks();
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])
  return (
    <>
      <br />
      <br />
      {tasks.filter(task => task.done).length}
      {' of your '}
      {tasks.length}
      {' tasks '}
      {tasks.filter(task => task.done).length === 1 ? ' is ' : ' are '}{' Done'}
      <br />
      <br />
      <ToggleButtonGroup
        color="primary"
        value={filter}
        exclusive
        onChange={(e, n) => setFilter(n)}
      >
        <ToggleButton
          variant="contained"
          value='All'
          onClick={() => setFilteredTasks(tasks)}>
          All
        </ToggleButton>
        <ToggleButton
          variant="contained"
          value='Done'
          onClick={() => setFilteredTasks(tasks.filter(task => task.done))}>
          Done
        </ToggleButton>
        <ToggleButton
          variant="contained"
          value='ToDo'
          onClick={() => setFilteredTasks(tasks.filter(task => !task.done))}>
          ToDo
        </ToggleButton>
      </ToggleButtonGroup>

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
