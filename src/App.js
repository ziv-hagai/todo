import AddTask from './components/AddTask.js';
import TaskList from './components/TaskList.js';
import { TasksProvider } from './components/TasksContext.js';
import './App.css'
export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>ToDo-Bom</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
