import AddTask from './components/AddTask.js';
import TaskList from './components/TaskList.js';
import { TasksProvider } from './components/TasksContext.js';
import './App.css'
import sbt from "./assets/sbt.png"
import sbtm from "./assets/sbtm.png"

export default function TaskApp() {
  return (
    <TasksProvider>
      <div className='page'>
        <div className='list'>
          <h1>ToDo Bom!</h1>
          <AddTask />
          <TaskList />
        </div>
        <img src={sbt} className='web' />
        <img src={sbtm} className='mobile' />
      </div>
    </TasksProvider>
  );
}
