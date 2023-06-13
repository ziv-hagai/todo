import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <TextField
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button variant="contained" onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        });
      }}>Add</Button>
    </>
  );
}

let nextId = 3;
