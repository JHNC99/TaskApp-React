import React, { useEffect, useState } from "react";
import AddNewTask from "./AddNewTask";
import Task from "./Task";
function TodoList() {
  //useEffect->para agregar tareas completadas
  const [tasksRemaining, setRemaining] = useState(0);

  //Almacenar tareas
  const [tasks, setTask] = useState([
    { title: "Terminar TaskList", completed: true },
    { title: "Aprender mas sobre hooks", completed: false },
    { title: "Hacer tarea de vez en cuando", completed: false },
  ]);
  //Agregar nuevas tareas
  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTask(newTasks);
  };
  //agregar tareas completadas
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTask(newTasks);
  };
  //Borrar tareas
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };
  //Contar tareas completadas
  useEffect(() => {
    setRemaining(tasks.filter((task) => !task.completed).length);
  });
  //Agregar al localStorage
  return (
    <div className="todo-container">
      <div className="header">Pending task ({tasksRemaining})</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
        <div className="create-task">
          <AddNewTask addTask={addTask} />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
