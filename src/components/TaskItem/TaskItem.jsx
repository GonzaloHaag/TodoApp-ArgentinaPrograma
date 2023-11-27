/**Este componente deberá representar individualmente una tarea.
Mostrará el nombre de la tarea y un botón para completarla.
Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado
cuando esté completada). */
import React from 'react';
import './taskItem.css';
import { FaRegCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const TaskItem = ( {task,borrarTarea,handleTareaCompleted,index}) => {
  return (
    <div className='taskItem-container'>
      <div className='task-item'>
      <h3 className={task.completed ? 'taskCompleted' : ''}>Tarea: {task.tarea}</h3>
      <span>Fecha de creación: {task.createdAt}</span>
      </div>
      <div className='buttons-container'>
         {/*Voy a mostrar circulo vacio si no esta
         completada, si esta completada un checked*/}
      {
        task.completed ? <FaCircleCheck size={20} onClick={() => handleTareaCompleted(index)}  />
        :

        <FaRegCircle size={20} onClick={() => handleTareaCompleted(index)} />
      }
      <MdDelete size={20} color='red' onClick={() => borrarTarea(task.id)} />
      </div>
    </div>
  )
}

export default TaskItem
