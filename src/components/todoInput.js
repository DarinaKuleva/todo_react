import React from 'react'
//TODO:
// 1. убрать конструкторы
// 2. по энтеру добавлять
// 3. разберись со стилями
// 4. Методы вниз
// 5. jsx
// 6. PropTypes https://reactjs.org/docs/typechecking-with-proptypes.html
// 7. Delete and Done
// 8. Done 8 of 15
// 9. Clear all

class TodoInput extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
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

  render() {
    return (
      <div>
        <input
          placeholder="I want to do..."
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo}>Do It!</button>
      </div>
    )
  }
}

export default TodoInput
