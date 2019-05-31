import React from 'react'
import { Link } from 'react-router-dom'
import { NBSP } from '../Additions/NBSP'
import { connect } from 'react-redux'

import todo from '../../styles/todoInput.module.css'
import PropTypes from 'prop-types'

const Home = ({todoList}) => {

  const taskAmount = todoList.length;
  const taskDoneAmount = todoList.filter(todo => todo.done).length
  return (
      <>
        <h1>Привет, Медвед!</h1>
        <div className={ todo.counter }>
          Done
          <NBSP/>
          {taskDoneAmount}
          <NBSP/>
          of
          <NBSP/>
          { taskAmount }
        </div>
        <Link to="/todo">TODO</Link>
      </>
    )

}

Home.propTypes = {
  todoList: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
    nextId: state.nextId
  }
}

export default connect(mapStateToProps)(Home)
