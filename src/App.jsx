import { useEffect, useState } from 'react'
import { TaskForm, TaskList } from './components/index';

const arrayTasksInicial = JSON.parse(localStorage.getItem('tareas')) || [];

function App() {
  const [tasks, setTasks] = useState(arrayTasksInicial);
  const [tareasBuscadas,setTareasBuscadas] = useState([]);
  const [taskSearch,setTaskSearch] = useState('');

  const agregarTarea = (tarea) => {
    setTasks([...tasks, tarea]); //Lo que ya tiene tasks mas la tarea que me mandan
  }

  const borrarTarea = (idTarea) => {
    /**Voy a hacer un arreglo que se quede con 
     * las tareas que no coinciden con ese id, para
     * eliminarlo
     * task.id no debe coincidir con el id de la 
     * tarea que me pasan y lo seteo al array de la tarea
     */
    setTasks(tasks.filter(task => task.id !== idTarea));
  }
  const handleTareaCompleted = (indexTarea) => {
  /**Necesito crear una copia del array para 
   * que el nuevo array se le cambie el completed a 
   * su valor contrario
   * Recibo el index para cambiarlo en esta posicion
   */
  const nuevoArray = [...tasks];

  // console.log(nuevoArray[indexTarea]); es la tarea que se clickeo
  nuevoArray[indexTarea].completed = !nuevoArray[indexTarea].completed;
  setTasks(nuevoArray); //Seteo el nuevo array a las tareas con el index de la tarea y la propiedad completed a su valor contrario
  }
  const busquedaTarea = (e) => {
    setTaskSearch(e.target.value); //Capturo lo escrito en el input y lo seteo, si no no se va a ver

  }
  useEffect(() => {
    localStorage.setItem('tareas',JSON.stringify(tasks));
    setTareasBuscadas(tasks.filter(task => task.tarea.toLowerCase().includes(taskSearch.toLowerCase())));
    console.log(tareasBuscadas);
  },[tasks,taskSearch])
  return (
    <div className='container'>
      <div className='app'>
        <TaskForm agregarTarea={agregarTarea} />
        <input className='search' type='search' value={ taskSearch } placeholder='Buscar una tarea' onChange={ busquedaTarea } />
        <TaskList tasks={tasks} borrarTarea = { borrarTarea } handleTareaCompleted = {handleTareaCompleted} tareasBuscadas = {tareasBuscadas } taskSearch = {taskSearch} />
      </div>

    </div>
  )
}

export default App
