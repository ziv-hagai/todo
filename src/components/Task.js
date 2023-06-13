import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <TextField
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <IconButton color="primary" onClick={() => setIsEditing(false)}>
          <SaveIcon />
        </IconButton>

      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <IconButton variant="contained" color="primary" onClick={() => setIsEditing(true)}>
          <EditIcon />
        </IconButton>
      </>
    );
  }
  return (
    <label>
      <Checkbox
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />

      {taskContent}

      <IconButton
        color="primary"
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id
          });
        }}>
        <DeleteIcon />
      </IconButton>
    </label>
  );
}
