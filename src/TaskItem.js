import React, { useState } from 'react';

const TaskItem = ({ task, toggleComplete, removeTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(task.title); // Сбросить изменения, если пользователь отменяет редактирование
  };

  const handleSave = () => {
    updateTask(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <span onDoubleClick={handleEdit}>{task.title}</span>
      )}

      <div>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Сохранить</button>
            <button onClick={handleCancel}>Отмена</button>
          </>
        ) : (
          <>
            <button onClick={() => toggleComplete(task.id)}>Выполнено</button>
            <button onClick={() => removeTask(task.id)}>Удалить</button>
            <button onClick={() => handleEdit(task.id)}>Редактировать</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;