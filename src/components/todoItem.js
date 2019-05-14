import React from 'react'
import todo from '../styles/todoInput.module.css'

class TodoItem extends React.PureComponent {
  removeTodo(id) {
    this.props.removeTodo(id)
       }

  render() {
    return (
      <div>
        <button
          className={todo.delete}
          onClick={e => this.removeTodo(this.props.todo.id)}
        >
          DONE
        </button>
        {this.props.todo.text}
      </div>
    )
  }
}

export default TodoItem
