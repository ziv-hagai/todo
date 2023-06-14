import { useTasks } from './TasksContext.js';
import { useState, useEffect } from 'react';
import Task from './Task.js';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export default function TaskList() {
  const tasks = useTasks();
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    console.log(filter);
    switch (filter) {
      case 'all': setFilteredTasks(tasks); break;
      case 'done': setFilteredTasks(tasks.filter(task => task.done)); break;
      case 'todo': setFilteredTasks(tasks.filter(task => !task.done)); break;
    }
  }, [tasks])

  return (
    <>
      <div className='status'      >
        <span> {tasks.filter(task => task.done).length} </span>
        {' of your '}
        <span> {tasks.length} </span>
        {' task'}
        {tasks.length > 1 ? 's ' : ' '}
        {tasks.filter(task => task.done).length === 1 ? ' is ' : ' are '}{' Done!'}
      </div>
      <ToggleButtonGroup
        fullWidth
        size='small'
        color="primary"
        value={filter}
        exclusive
        onChange={(e, n) => setFilter(n)}
      >
        <ToggleButton
          variant="contained"
          value='all'
          onClick={() => setFilteredTasks(tasks)}>
          All
        </ToggleButton>
        <ToggleButton
          variant="contained"
          value='done'
          onClick={() => setFilteredTasks(tasks.filter(task => task.done))}>
          Done
        </ToggleButton>
        <ToggleButton
          variant="contained"
          value='todo'
          onClick={() => setFilteredTasks(tasks.filter(task => !task.done))}>
          ToDo
        </ToggleButton>
      </ToggleButtonGroup>
      <ul>
        {filteredTasks.map((task, i) => (
          <>
            {i !== 0 &&
              <hr style={{ borderTop: 'rgb(118, 118, 118)' }} />
            }
            <li key={task.id}>
              <Task task={task} />
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
