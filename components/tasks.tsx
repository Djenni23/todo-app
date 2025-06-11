"use client";
import React, { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Do my homework",
      description: "Description for task 1",
      completed: false,
    },
    {
      id: 2,
      title: "Clean the house",
      description: "Description for task 2",
      completed: false,
    },
    {
      id: 3,
      title: "Buy gloceries",
      description: "Description for task 3",
      completed: false,
    },
    {
      id: 4,
      title: "Cooking",
      description: "Description for task 4",
      completed: false,
    },
    {
      id: 5,
      title: "Walk the dog",
      description: "Description for task 5",
      completed: false,
    },
  ]);

  const handleChange = (val: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === Number(val.target.id) - 1
        ? { ...task, completed: val.target.checked }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className=" mt-10 flex items-center justify-center flex-col space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center pl-5 gap-5 bg-[#3c0a4c7c] w-150 py-2 rounded-md text-white text-lg "
        >
          <input
            type="checkbox"
            onChange={(val) => {
              handleChange(val);
            }}
            name={task.title}
            id={task.id.toString()}
          />
          <p className={task.completed ? "line-through" : ""}>{task.title}</p>
        </div>
      ))}
    </div>
  );
}
export default Tasks;
