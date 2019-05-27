import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import todo from '../../styles/todoInput.module.css'
import { NBSP } from '../Additions/NBSP'
import { connect } from 'react-redux'


class Home extends PureComponent {
  render() {
    return (
      <>
        <h1>Привет, Медвед!</h1>
        <div className={ todo.counter }>
          Done
          <NBSP/>
          <p>тут будет done counter</p>
          <NBSP/>
          of
          <NBSP/>
          {this.props.todoList.length}
        </div>
        <Link to="/todo">TODO</Link>
      </>
    )
  }
}

export default connect(state => {
  return {
    todoList: state.todoList
  }
})(Home)
