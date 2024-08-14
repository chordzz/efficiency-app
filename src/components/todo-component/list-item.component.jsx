import React from 'react'
import Checkmark from '../svg/checkmark'

const ListItemC = ({ item, handleLiExpand, handleCancelTask, handleCompleteTask }) => {
  
  return (
    <div className={`todo-list-item rounded-sm bg-white my-6 p-4 w-full ${item.status === 'cancelled' ? 'cancelled' : ''}`}>
        <div>
          <div className="todo-title flex justify-between items-center">
              <div className="text">
                  <h4 className='font-bold text-2xl cursor-pointer text-gray-700' onClick={() => handleLiExpand(item.title)}>{item.title}</h4>
                  <span className='text-sm text-gray-400'>{item.subHeader}</span>
              </div>
              <div className="icon cursor-pointer" onClick={() => handleCompleteTask(item)}><Checkmark mode={item.status} /></div>
          </div>
          <div className={`text-xs mt-4 bg-slate-100 py-4 px-2 flex justify-between ${item.fullView ? 'visible' : 'hidden'}`}>
            <div className="text w-4/5">
              {item.description}
            </div>
            <div className='self-end'>
              <button className='rounded-md bg-red-400 px-4 py-2 text-white font-bold' onClick={() => handleCancelTask(item)}>Cancel Task</button>
            </div>
          </div>
        </div>
        <div className="breakline my-2 w-full border-t-2 border-gray-200"></div>
        <div className="time font-medium text-gray-700">
            Today
            <span className='text-xs text-gray-400 ml-2'>{item.time}</span>
        </div>
    </div>
  )
}

export default ListItemC