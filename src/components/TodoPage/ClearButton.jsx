import React from 'react'
import todo from '../../styles/todoInput.module.css'

const ClearButton = ( { clearAll } ) => {
  return (
      <button
        onClick={ clearAll }
        className={ todo.input }>
        CLEAR ALL
      </button>
  )
}


export default ClearButton
