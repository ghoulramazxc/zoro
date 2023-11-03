import React, { useState } from 'react';
import TaskList from './TaskList1';
import TaskForm from './TaskForm';
import './App.css'; // Стили для вашего приложения

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Добавление новой задачи в список
  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Переключение состояния задачи (выполнено/не выполнено)
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Удаление задачи из списка
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Обновление задачи в списке
  const updateTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Список задач</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </div>
  );
};

export default App;

