import React from 'react'

function Tasks() {
  return (
    <div className='mt-10 flex items-center justify-center ml-55 bg-red-800 w-150 py-2 rounded-md text-white text-lg '>
      Do my homework
    </div>
  );

}

function TasksTwo() {
  return (
    <div className='mt-3 flex items-center justify-center ml-55 bg-green-800 w-150 py-2 rounded-md text-white text-lg '>
      Clean the house
    </div>
  );
}

function TasksThree() {
  return (
    <div className='mt-3 flex items-center justify-center ml-55 bg-blue-800 w-150 py-2 rounded-md text-white text-lg '>
      Buy groceries
    </div>
  );
}

function TasksFour() {
  return (
    <div className='mt-3 flex items-center justify-center ml-55 bg-purple-800 w-150 py-2 rounded-md text-white text-lg '>
      Walk the dog
    </div>
  );
}

function TasksFive() {
  return (
    <div className='mt-3 flex items-center justify-center ml-55 bg-orange-500 w-150 py-2 rounded-md text-white text-lg '>
      Cooking dinner
    </div>
  );
}

function AllTasks() {
  return (
  <>
    <Tasks />
    <TasksTwo />
    <TasksThree />
    <TasksFour />
    <TasksFive />
  </>
  );
}
export default AllTasks;
