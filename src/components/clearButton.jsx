import React from 'react'

const ClearButton = ( { clearAll } ) => {
  return (
    <div>
      <button onClick={ clearAll }>
        CLEAR ALL
      </button>
    </div>
  )
}


export default ClearButton
