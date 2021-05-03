import React, { useState,useEffect } from 'react'

function AddNewTask({addTask}) {
    const[tasks,setTasks]=useState('');
    //Ennviando las nuevas tareas
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(tasks!==''){
            addTask(tasks);
            setTasks('');

        }
        else{
            alert('Campo vacio')
        }
    }    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="input"
                value={tasks}
                placeholder="Add a new task"
                onChange={e=>setTasks(e.target.value)}
            />
        </form>
    )
}

export default AddNewTask
