import React from 'react'
import todo from '../styles/todoInput.module.css'
//TODO:

// 2. по энтеру добавлять

// 6. PropTypes https://reactjs.org/docs/typechecking-with-proptypes.html
// 7. Delete and Done
// 8. Done 8 of 15
// 9. Clear all

class TodoInput extends React.PureComponent {
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
          onClick={this.addTodo}
          className={todo.input}>
          Do It!
        </button>
      </div>
    )
  }

    state = {
      value: '',
    }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  addTodo = () => {
    const { value } = this.state

    if (value.length > 0) {
      this.props.addTodo(value)
      this.setState({ value: '' })
    }
  }
}

export default TodoInput
