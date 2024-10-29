import React from 'react'
import {TaskType} from '../types/Task.types'

interface Props {
    task: TaskType;
    index: number;
    handleCompleted: (id: number) => void;
    handleDelete: (id: number) => void;
}


const Task:React.FC<Props> = ({task, index, handleCompleted, handleDelete}) => {
    return (
    <div className="task" style={{textDecoration: task.completed ?  'line-through' : ''}}>
        {task.title}
        <div>
            <button onClick={() => handleCompleted(index)}>{task.completed ? 'Incomplete': 'Complete'}</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
    </div>)
}

export default Task