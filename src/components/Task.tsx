import React from 'react'
import { TaskModel } from '../models/Task'

interface TaskProps {
  task : TaskModel , 
  finishTask : (targetId: number) => void ,
  deletTask :(targetId: number) => void 
}
const Task:React.FC<TaskProps> = ({task ,finishTask ,deletTask})=> {

  return (
    <div className='d-flex justify-content-between align-items-center text-center  p-2 text-white border border-bottom-2'>
        <p className='col-sm-8 m-0'>{task.title}</p>
        <p className='col-sm-2 m-0'>
        <input className='text-center' type="checkbox" defaultChecked={task.completed} onChange={()=>finishTask(task.id)}/>
        </p>
        <button className='btn btn-danger' onClick={()=>deletTask(task.id)}>Delete</button>
    </div>
  )
}

export default Task