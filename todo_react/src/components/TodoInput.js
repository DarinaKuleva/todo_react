import React from 'react'

export default class TodoInput extends React.PureComponent {
  removeTodo(id) {
    this.props.removeTodo(id)
  }

  render() {
    return (
      <div>
        <button onClick={e => this.removeTodo(this.props.id)}>del</button>
        {this.props.todo.text}
      </div>
    )
  }
}
