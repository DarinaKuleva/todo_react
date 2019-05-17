import React from 'react'
// import todo from '../styles/todoInput.module.css'

class TodoItem extends React.PureComponent {
  render() {
    const {
      todo: { text },
      removeTodo,
      crossTodo
    } = this.props


    return (
      <div>
        <button
          // className={todo.delete}
          onClick={ removeTodo }>
          DELETE
        </button>
        <button
          onClick={ crossTodo }>
          DONE
        </button>
        {text}
      </div>
    )
  }
}

export default TodoItem
