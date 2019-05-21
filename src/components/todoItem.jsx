import React from 'react'
import PropTypes from 'prop-types';

import todo from '../styles/todoInput.module.css'
import './crossTodo.css'

class TodoItem extends React.PureComponent {

  static propTypes = {
    removeTodo: PropTypes.func.isRequired,
    crossTodo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
  }

  render() {
    const {
      todo: {
        text,
        done,
      },
      removeTodo,
      crossTodo,
    } = this.props


    return (
      <div className={done ? 'done' : ''}>
        <button
          className={todo.delete}
          onClick={crossTodo}>
          DONE
        </button>
        {text}
        <button
          className={todo.delete}
          onClick={removeTodo}>
          DELETE
        </button>
      </div>
    )
  }
}

export default TodoItem
