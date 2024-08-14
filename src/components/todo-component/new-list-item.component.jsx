import React from 'react'

const NewListItem = ({ setNewTask, newTask, handleCreateNewTask }) => {

  return (
    <div className='w-full h-full bg-white p-4 rounded-md pb-8'>
        <h3 className='text-3xl font-bold my-4 text-center text-gray-700'>Create New Task</h3>
        <form onSubmit={handleCreateNewTask} className='flex flex-col items-center justify-center gap-4'>
            <input required className='w-full border border-gray-300 py-2 px-4 rounded' type="text" placeholder='Enter task title' onChange={(e) => setNewTask({...newTask, title: e.target.value})}/>
            <input required className='w-full border border-gray-300 py-2 px-4 rounded' type="text" placeholder='What is this related to? (work, hobby, etc)' onChange={(e) => setNewTask({...newTask, subHeader: e.target.value})}/>
            <textarea required className='w-full border border-gray-300 py-2 px-4 rounded' placeholder='Enter task description' onChange={(e) => setNewTask({...newTask, description: e.target.value })}/>
            <input required className='w-full border border-gray-300 py-2 px-4 rounded' type="time" placeholder='What time today would you like to do the task?' onChange={(e) => setNewTask({...newTask, time: e.target.value })}/>
            <button className='w-full py-2 px-4 rounded bg-blue-500 text-white' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewListItem