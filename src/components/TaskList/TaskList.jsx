/**Componente que mostrara la lista de tareas,recibira como propiedades la lista
 * de tareas y funciones para gestionar eventos relacionadas con las tareas(completar,eliminar)
 * Cada tarea debe representarse mediante un componente TaskItem.
 */
import React from 'react';
import './taskList.css';
import TaskItem from '../TaskItem/TaskItem';
import { FaRegSadCry } from "react-icons/fa";

const TaskList = ( { tasks,borrarTarea,handleTareaCompleted,tareasBuscadas,taskSearch }) => {
  console.log(tasks); //Llega el array de tareas
  return (
    <div className='taskList-container'>
      {
       tasks.length === 0 && <p>No has ingresado ninguna tarea <FaRegSadCry /></p>
      }
      {
        tasks.length != 0 && taskSearch != '' && tareasBuscadas.length === 0 && <p>No hay tareas que coincidan con ese filtro</p>
      }
      {
       tareasBuscadas.map((task,index) => (
        <TaskItem task = {task} key={task.id} borrarTarea = { borrarTarea } handleTareaCompleted={ handleTareaCompleted } index={ index }/>
      ))
      }
    </div>
  )
}

export default TaskList
