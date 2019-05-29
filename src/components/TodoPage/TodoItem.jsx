import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import todo from '../../styles/todoInput.module.css'
import '../../styles/crossTodo.css'


class TodoItem extends React.PureComponent {

  static propTypes = {
    removeTodo: PropTypes.func.isRequired,
    crossTodo: PropTypes.func,
    todo: PropTypes.object.isRequired
  }

  render() {
    const {
      todo: {
        text,
        done,
        id
      },
      removeTodo,
      crossOutTodo
    } = this.props

    return (
      <div className={done ? 'done' : ''}>
        { !done &&
        <button
          className={todo.delete}
          onClick={crossOutTodo}>
          DONE
        </button>
        }
        <Link to={ 'task-item/'+id }>{text}</Link>
        <button
          className={todo.delete}
          onClick={removeTodo}>
          DELETE
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
    nextId: state.nextId
  }
}

export default connect(mapStateToProps)(TodoItem)
