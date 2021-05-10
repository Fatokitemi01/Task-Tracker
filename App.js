import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
const App=() =>{
  const[tasks,setTasks]= useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'feb 5th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'feb 6th at 1:30pm',
        reminder:true,
    },
    {
        
        id:3,
        text: 'Foood Shopping',
        day: 'feb 5th at 2.30pm',
        reminder:false,  
    },
])
  //Delete task
  const deleteTask =(id)=>{
    setTasks(tasks.filter((task)=> task.id!==id))
    
  }
  return (
    <div className="Container">
     <Header />
     <Tasks tasks={tasks} onDelete={deleteTask}/>
      </div>
  );
}

export default App;
