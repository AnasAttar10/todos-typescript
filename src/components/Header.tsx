import React from 'react'
import Search from './Search'
import Toggleswitch from './Toggleswitch'
import AddTask from './AddTask'
import { TaskModel } from '../models/Task'

interface HeaderProps {
  addTask:(task:TaskModel) =>void  , 
  showItems :React.ChangeEventHandler<HTMLInputElement>  , 
  handleSearchInput:(value:string)=>void ,
  isTasksVisible : boolean 
}

const Header:React.FC<HeaderProps> = ({showItems , handleSearchInput ,addTask ,isTasksVisible}) => {

  return (
    <div>
        <h2 className='p-2'>To Do List </h2>
        <AddTask addTask={addTask}/>
        <Search handleSearchInput={handleSearchInput}/>
        <Toggleswitch showItems={showItems} isTasksVisible={isTasksVisible}/>

    </div>
  )
}

export default Header