import {useState, useEffect} from 'react'
import './App.css'
import Loader from './components/Loader'
import Task from './components/Task'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [error, setError] = useState<any>(null)

  interface Task {
    title: string;
    id: number;
    completed: boolean;
  }

  const handleCompleted = (index: number) => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  const handleDelete =(index: number) => {
    const newTasks = [...tasks]
    newTasks.splice(index,1)
    setTasks(newTasks)
  }

  const handleOnSubmit = (value: string) => {
    setTasks([...tasks, {title: value, id: tasks.length +1, completed: false }])
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(res => setTasks(res.slice(0,10)))
    .catch(err => setError(err))
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>
      </header>
      {error ? (
        <p>Error fetching tasks: {error.message}</p>
      ) : (
        <>
          <div className="tasks">
            {tasks.length > 0 ? tasks.map((task:Task, index: number) => <Task task={task} index={index} handleCompleted={handleCompleted} handleDelete={handleDelete}/>) : (<Loader/>)}
          </div>
          <TaskForm handleOnSubmit={handleOnSubmit} />
        </>
      )}
      
    </div>
  );
}

export default App;
