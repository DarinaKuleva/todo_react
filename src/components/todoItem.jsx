import React from 'react'
// import todo from '../styles/todoInput.module.css'

class TodoItem extends React.PureComponent {
  render() {
    const {
      todo: { text },
    } = this.props

    return (
      <div>
        <button
          // className={todo.delete}
          onClick={this.props.removeTodo}>
          DELETE
        </button>
        {text}
      </div>
    )
  }
}

export default TodoItem
