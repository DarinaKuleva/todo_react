import React from 'react'
import PropTypes from 'prop-types';

import todo from '../styles/todoInput.module.css'


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

TodoInput.propTypes = {
  addTodo: PropTypes.func
};

export default TodoInput
