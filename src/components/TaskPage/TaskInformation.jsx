import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const TaskInformation = ({ddd}) => {
  return (
    <>
      <h2>Task Information</h2>
      <div>
        <p>{ddd}</p>
      </div>
      <Link to="/todo">Todo List</Link>
    </>
  )
}


export default connect(state => {
  return {
    todoList: state.todoList
  }
})(TaskInformation)

