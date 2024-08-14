import React, { useEffect, useState } from 'react'
import ListItemC from './list-item.component'
import ListNavC from './list-navigation.component'
import { CustomModal } from '../custom-modal/custom-modal'
import NewListItem from './new-list-item.component'

const TodoListApp = () => {
    const [ tasks, setTasks ] = useState([])
    const [ newTask, setNewtask ] = useState({})
    const [ filteredList, setFilteredList ] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [activeList, setActiveList] = useState('all')


    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleLiExpand = (title) => {
        setTasks(
            tasks.map( item => item.title === title ? { ...item, fullView: !item.fullView } : item)
        )
    }

    const handleCreateNewTask = () => {
        setTasks([ {...newTask, status: "active", fullView: false } ,...tasks ])
        handleCloseModal()
    }

    const handleCancelTask = (todo) => {
        setTasks( tasks.map( item  => item.title === todo.title ? {...item, status: 'cancelled' } : item ))
    }

    const handleCompleteTask = (todo) => {
        setTasks( tasks.map( item => {
            if(item.title === todo.title){
                if(item.status === 'done') item.status = 'active'
                else if(item.status === 'active') item.status = 'done'
            }

            return item
        }))
    }

    const count = (t) => {
        let tmp = 0
        switch (t) {
            case 'active':
                tmp = tasks.filter(item => item.status === 'active').length
                return tmp;

            case 'cancelled':
                tmp = tasks.filter(item => item.status === 'cancelled').length
                return tmp;
            
            case 'done':
                tmp = tasks.filter(item => item.status === 'done').length
                return tmp;
        
            default:
                return tasks.length
        }
    }

    const filterList = (listType) => {

        setActiveList(listType)

        if(listType === 'all'){
            setFilteredList(tasks);
            return
        }
        setFilteredList( tasks.filter( item => item.status === listType ) )
    }

    const todos = [
        {
            title: "My Todo",
            subHeader: "testing",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure harum eius dignissimos aspernatur laborum soluta, commodi, eaque molestias praesentium consectetur ratione saepe, nam dicta consequuntur! Nobis possimus fuga placeat magni!",
            time: "8:00am",
            status: "active",
            fullView: false,
        },
        {
            title: "Our Todo",
            subHeader: "testing",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure harum eius dignissimos aspernatur laborum soluta, commodi, eaque molestias praesentium consectetur ratione saepe, nam dicta consequuntur! Nobis possimus fuga placeat magni!",
            time: "8:00am",
            status: "cancelled",
            fullView: false,
        },
        {
            title: "Their Todo",
            subHeader: "testing",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure harum eius dignissimos aspernatur laborum soluta, commodi, eaque molestias praesentium consectetur ratione saepe, nam dicta consequuntur! Nobis possimus fuga placeat magni!",
            time: "8:00am",
            status: "done",
            fullView: false,
        },
    ]

    useEffect(() => {
      setTasks(todos)
      setFilteredList(todos)
    }, [])

    useEffect(() => {
        setFilteredList(tasks)
    }, [tasks])
    
    
  return (
    <div className='flex flex-col p-8 w-full h-full bg-gray-100'>
        <div className="header flex justify-between items-center">
            <div className="welcome-text">
                <h3 className='text-3xl font-bold text-blue-500'>Hello There,</h3>
                <span className='text-gray-500'>Be productive today</span>
            </div>
            <div className="icon"></div>
        </div>

        <div className="today flex justify-between items-center my-2">
            <span className="today-text font-semibold text-xl text-gray-700">Today's Tasks</span>
            <button className="new-task rounded-lg font-semibold py-2 px-4 bg-blue-100 text-blue-600">
                <span className='mr-2'>+</span>
                <span onClick={handleOpenModal}>New Task</span>
            </button>
        </div>

        <CustomModal openModal={openModal} closeModal={handleCloseModal} component={<NewListItem setNewTask={setNewtask} newTask={newTask} handleCreateNewTask={handleCreateNewTask} />} />

        <div className="todo-list h-[70%]">
            <ListNavC count={count} filterList={filterList} activeList={activeList} />

            <div className="list-body h-full overflow-scroll mt-4">
                {
                    tasks && tasks.length > 0 && filteredList ?
                    (
                        filteredList.map( item => {
                            return <ListItemC item={item} handleLiExpand={handleLiExpand} handleCancelTask={handleCancelTask} handleCompleteTask={handleCompleteTask} />
                        })
                    ) : (
                        <div className='w-full h-full flex items-center justify-center'>
                            <p>No Item Yet Today</p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default TodoListApp