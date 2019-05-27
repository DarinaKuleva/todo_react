import React from 'react'
import { connect } from 'react-redux'

const TaskInformation = ({todoList}) => {
  return (
    <div>
      {todoList.length}
    </div>
  )
}


const mapToState = (state) => {
  return {todoList: state};
}

const WrappedTaskInformation = connect(mapToState)(TaskInformation)

export default WrappedTaskInformation;

