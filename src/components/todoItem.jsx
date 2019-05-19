import React from 'react'
import todo from '../styles/todoInput.module.css'
import done from '../styles/todoInput.module.css'

class TodoItem extends React.PureComponent {
  render() {
    const {
      todo: { text },
      removeTodo,
      crossTodo
    } = this.props


    return (
      <div className={ done ? 'div.done' : '' }>
        <button
          className={todo.delete}
          onClick={ crossTodo }>
          DONE
        </button>
        {text}
        <button
          className={todo.delete}
          onClick={ removeTodo }>
          DELETE
        </button>
      </div>
    )
  }
}

export default TodoItem
