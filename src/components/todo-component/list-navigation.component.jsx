import React from 'react'

const ListNavC = ({ count, filterList, activeList }) => {
  return (
    <div className="nav flex mt-4">
        <div className={`${activeList === 'all' ? 'active' : 'inactive'}`} onClick={() => filterList('all')}>
            All
            <span className='quantity'>{count('all')}</span>
        </div>

        <div className={`${activeList === 'active' ? 'active' : 'inactive'}`} onClick={() => filterList('active')}>
            Active
            <span className='quantity'>{count('active')}</span>
        </div>

        <div className={`${activeList === 'done' ? 'active' : 'inactive'}`} onClick={() => filterList('done')}>
            Done
            <span className='quantity'>{count('done')}</span>
        </div>

        <div className={`${activeList === 'cancelled' ? 'active' : 'inactive'}`} onClick={() => filterList('cancelled')}>
            Cancelled
            <span className='quantity'>{count('cancelled')}</span>
        </div>
    </div>
  )
}

export default ListNavC