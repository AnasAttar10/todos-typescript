import React from 'react'
interface ToggleswitchProps{
  showItems:React.ChangeEventHandler<HTMLInputElement> 
  isTasksVisible:boolean 
}

const Toggleswitch:React.FC<ToggleswitchProps> = ({showItems ,isTasksVisible})=> {
  return (
    <div className="form-check form-switch d-flex justify-content-center">
    <input className="form-check-input"
     type="checkbox" 
     name="toggleswitch"
     defaultChecked={isTasksVisible} 
     onChange={showItems}
    />
    <label className="form-check-label  ms-3" >Show All To Dos </label>
    </div>
  )
}

export default Toggleswitch