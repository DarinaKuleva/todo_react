import React from 'react'
import todo from '../styles/todoInput.module.css'

class TodoInput extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { value: this.props.todoText }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  addTodo = (todo) => {
    if (todo.length > 0) {
      this.props.addTodo(todo)
      this.setState({ value: '' })
    }
  }

  render() {
    return (
      <div>
        <input
          placeholder="I want to do..."
          className={todo.text}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className={todo.input}
          onClick={() => this.addTodo(this.state.value)}
        >
          Do It!
        </button>
      </div>
    )
  }
}

export default TodoInput
