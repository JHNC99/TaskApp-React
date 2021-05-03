import React from "react";
function Task({task,index,completeTask,removeTask}) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{background:"#FF6F91"}} onClick={()=>removeTask(index)}>X</button>
      <button onClick={()=>completeTask(index)}>Completed</button>
    </div>
  );
}

export default Task;
