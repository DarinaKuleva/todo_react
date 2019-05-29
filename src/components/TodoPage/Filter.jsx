import React from 'react'
import todo from '../../styles/todoInput.module.css'

const Filter = ( { filterDone, filterFast } ) => {
  return (
    <div>
      <button
        onClick={ filterDone }
        className={ todo.delete }>
        FILTER DONE
      </button>
      <button
        onClick={ filterFast }
        className={ todo.input }>
        FILTER FAST
      </button>
    </div>
  )
}


export default Filter
