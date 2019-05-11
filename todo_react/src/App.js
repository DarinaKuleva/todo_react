import React, { PureComponent } from 'react'
import TodoInput from './components/todoInput'
import TodoItem from './components/todoItem'
import header from './styles/header.module.css'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      nextId: 1,
    }

    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice()
    todos.push({ id: this.state.nextId, text: todoText })
    this.setState({
      todos: todos,
      nextId: this.state.nextId + 1,
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id),
    })
  }
  render() {
    return (
      <div>
        <h1 className={header.title}>My ToDo List</h1>
        <div className={header.input}>
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={this.removeTodo}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
