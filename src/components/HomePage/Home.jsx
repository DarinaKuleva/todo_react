import React from 'react'
import { Link } from 'react-router-dom'
import { NBSP } from '../Additions/NBSP'
import { connect } from 'react-redux'

import todo from '../../styles/todoInput.module.css'
import PropTypes from 'prop-types'

const Home = ({todoList}) => {

  const taskNumber = todoList.length;
  const taskDoneNumber = todoList.filter(todo => todo.done).length
  return (
      <>
        <h1>Привет, Медвед!</h1>
        <div className={ todo.counter }>
          Done
          <NBSP/>
          {taskDoneNumber}
          <NBSP/>
          of
          <NBSP/>
          { taskNumber }
        </div>
        <Link to="/todo">TODO</Link>
      </>
    )

}

Home.propTypes = {
  taskNumber: PropTypes.number.isRequired,
  taskDoneNumber: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
    nextId: state.nextId
  }
}

export default connect(mapStateToProps)(Home)
