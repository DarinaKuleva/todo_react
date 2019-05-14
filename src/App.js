import React, { PureComponent } from 'react'
import TodoInput from './components/todoInput'
import TodoItem from './components/todoItem'
import header from './styles/header.module.css'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      nextId: 1
    }
  }

  addTodo = (todoText) => {
    let todoList = this.state.todoList.slice()
    todoList.push({ id: this.state.nextId, text: todoText })
    this.setState({
      todoList: todoList,
      nextId: this.state.nextId + 1,
    })
  }

  removeTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((todo, index) => todo.id !== id),
    })
  }

  render() {
    return (
      <div>
        <h1 className={header.title}>My ToDo List</h1>
        <div className={header.input}>
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {this.state.todoList.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
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
