import React from 'react'
import todo from '../../styles/todoInput.module.css'

const ClearButton = ( { clearAll } ) => {
  return (
    <div>
      <button
        onClick={ clearAll }
        className={ todo.input }>
        CLEAR ALL
      </button>
    </div>
  )
}


export default ClearButton
