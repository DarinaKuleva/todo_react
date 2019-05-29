import React from 'react'
import { Link } from 'react-router-dom'
import { NBSP } from '../Additions/NBSP'
import { connect } from 'react-redux'

import todo from '../../styles/todoInput.module.css'

const Home = ({todoList}) => {
  const allTask = todoList.length;
  const allTaskDone = todoList.filter(todo => todo.done)
  return (
      <>
        <h1>Привет, Медвед!</h1>
        <div className={ todo.counter }>
          Done
          <NBSP/>
          {allTaskDone.length}
          <NBSP/>
          of
          <NBSP/>
          { allTask }
        </div>
        <Link to="/todo">TODO</Link>
      </>
    )

}

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
    nextId: state.nextId
  }
}

export default connect(mapStateToProps)(Home)
