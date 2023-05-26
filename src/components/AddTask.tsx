import React, { useState } from 'react'
import { TaskModel } from '../models/Task'

interface AddTaskProps {
  addTask : (task:TaskModel) =>void 
}
const AddTask:React.FC<AddTaskProps> = ({addTask})=> {

  const emptyTask ={
    id:Math.floor(Math.random()*100),
    title :"",
    completed:false
  }
  const [task,setTask] = useState<TaskModel>(emptyTask)

  const handleInput =(e:React.ChangeEvent<HTMLInputElement>)=>{

    setTask({...task,[e.target.name] :e.target.value})

  }
  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    addTask(task)
    clear()
  }
  const clear =()=>{
    setTask(emptyTask)
  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className=' d-flex justify-content-between mt-5'>
            <input type='text' name="title" value={task.title} placeholder='Enter The Task ' className='col-sm-10' required onChange={handleInput}/>
            <input className='btn btn-success col-sm-2 border-radius-0' type="submit" value="ADD"/>
        </form>

    </div>
  )
}

export default AddTask