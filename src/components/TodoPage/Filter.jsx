import React from 'react'
import todo from '../../styles/todoInput.module.css'

const Filter = ( { filterDone, filterFast, filterAll } ) => {
  return (
    <>
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
      <button
        onClick={ filterAll }
        className={ todo.input }>
        ALL
      </button>
    </>
  )
}

export default Filter
