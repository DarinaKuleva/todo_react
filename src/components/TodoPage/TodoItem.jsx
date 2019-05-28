import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import todo from '../../styles/todoInput.module.css'
import '../../styles/crossTodo.css'
import { connect } from 'react-redux'


class TodoItem extends React.PureComponent {

  static propTypes = {
    removeTodo: PropTypes.func.isRequired,
    crossTodo: PropTypes.func.isRequired,
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
        <Link to={ 'task-item/'+id } params={{taskId: id}}>{text}</Link>
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
    todoList: state.todoList
  }
}

export default connect(mapStateToProps)(TodoItem)

