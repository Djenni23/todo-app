import React, { useState } from 'react';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Do my homework', completed: false },
    { id: 2, title: 'Clean the house', completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-4 p-6">
      {tasks.map(task => (
        <div
          key={task.id}
          className={`flex items-center justify-between p-4 rounded-lg shadow-sm border ${
            task.completed ? 'bg-green-100' : 'bg-white'
          }`}
        >
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.title}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
