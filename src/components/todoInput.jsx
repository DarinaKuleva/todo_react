import React from 'react'
import todo from '../styles/todoInput.module.css'
//TODO:
// 6. PropTypes https://reactjs.org/docs/typechecking-with-proptypes.html
// 7. Delete and Done
// 8. Done 8 of 15

class TodoInput extends React.PureComponent {
  state = {
    value: '',
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
          onKeyDown={this.handleKeyDown}
        />
        <button
          onClick={this.addPoint}
          className={todo.input}
          >
          Do It!
        </button>
      </div>
    )
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addPoint();
    }
  }

  addPoint = () => {
    const { value } = this.state

    if (value.length > 0) {
      this.props.addTodo(value)
      this.setState({ value: '' })
    }
  }
}

export default TodoInput
