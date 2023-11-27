/**Este componente contendrá un formulario para agregar nuevas tareas.
Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a
la lista principal.
 */
import React from 'react';
import './taskForm.css';
import { FaClipboardList } from 'react-icons/fa'
const TaskForm = ( { agregarTarea }) => {

  const handleSubmitTask = (e) => {
    e.preventDefault();
    const tarea = e.target.task.value;  //Capturo lo escrito en el input con el name del mismo
    if(tarea === '') {
      alert('Debes ingresar una tarea')
    }
    else{
      const nuevaTarea = {
        id:crypto.randomUUID(),
        tarea,
        createdAt: new Date().toLocaleString(),
        completed: false,
       }
       e.target.task.value = ''; //Reseteo el input luego de agregarla
       agregarTarea(nuevaTarea); //Mando toda la tarea nueva

    }

    
  }
  return (
    <div className='taskForm-container'>
      <h2>Todo-App <FaClipboardList/></h2>
      <form onSubmit={ handleSubmitTask }>
        <div className='input-container'>
          <input type='text' placeholder='Agrega aquí la tarea' name='task' />
          <button type='submit'>Agregar</button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
