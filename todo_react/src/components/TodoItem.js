import React from 'react'

export default class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = { value: 'test' }

    this.handleChange = this.handleChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo)
      this.setState({ value: '' })
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.setState.value}
          onChange={this.handleChange}
        />
        <button onClick={() => this.addTodo(this.state.value)}>тык</button>
      </div>
    )
  }
}
