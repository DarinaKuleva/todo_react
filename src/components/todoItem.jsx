import React from 'react'

class TodoItem extends React.PureComponent {
  render() {
    const {
      todo: { text },
    } = this.props

    return (
      <div>
        <button onClick={this.props.removeTodo}>DONE</button>
        {text}
      </div>
    )
  }
}

export default TodoItem
