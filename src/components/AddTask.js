import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';
import { Button, TextField, } from '@mui/material';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  return (
    <div className='row'>
      <TextField
        size='small'
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
        sx={{
          width: '70%'
        }}
      />
      <Button
        sx={{
          height: '40px',
          width: '25%'
        }}
        variant="contained"
        disabled={!text}
        onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          });
        }}>Add</Button>
    </div >
  );
}

let nextId = 3;
