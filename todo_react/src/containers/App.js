import React, { PureComponent } from 'react'
import TodoItem from '../components/TodoItem'
import TodoInput from '../components/TodoInput'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.setState = {
      todoes: [],
      nextId: 0,
    }

    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  addTodo(todoText) {
    let todos = this.setState.todoes.slice()
    todos.push({ id: this.setState.nextId, text: todoText })
    this.setState({
      todoes: todos,
      nextId: ++this.setState.nextId,
    })
  }

  removeTodo(id) {
    this.setState({
      todoes: this.setState.todoes.filter((todo, index) => todo.id !== id),
    })
  }

  render() {
    return (
      <div>
        <TodoItem todoText="" addTodo={this.addTodo} />
        <ul>
          {this.setState.todoes.map(todo => {
            return (
              <TodoInput
                todo={todo}
                key={todo.id}
                id={todo.id}
                removeTodo={this.removeTodo}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
