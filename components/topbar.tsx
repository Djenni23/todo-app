import React from 'react'

function Topbar() {
  return (
    <div className=' flex justify-center gap-3 items-center pt-6'>
      
        <input className='bg-gray-100 px-2 py-2 rounded-sm text-xs w-70' type="search" placeholder='Search...' />
      <button className='bg-[#e0b1f042] border-1 rounded-md h-8 w-20 px-1 py-1 text-xs border-transparent'>
        Add Task
      </button>
      
    </div>
  )
}

export default Topbar
