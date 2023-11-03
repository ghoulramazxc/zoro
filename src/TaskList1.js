import React from 'react';  
import TaskItem from './TaskItem';  
 
const TaskList = ({ tasks, toggleComplete, removeTask, updateTask }) => { // Добавлен updateTask в параметры 
  return (  
    <div className="task-list">  
      {tasks.map((task) => (  
        <TaskItem  
          key={task.id}  
          task={task}  
          toggleComplete={toggleComplete}  
          removeTask={removeTask}  
          updateTask={updateTask} //с 
        />  
      ))}  
    </div>  
  );  
};  
 
export default TaskList;