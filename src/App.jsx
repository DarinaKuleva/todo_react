import React, { PureComponent } from 'react'
import TodoInput from './components/todoInput'
import TodoItem from './components/todoItem'

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>My ToDo List</h1>
        <div>
          <TodoInput addTodo={this.addTodo} />
          <ul>
            {this.state.todoList.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  removeTodo={() => this.removeTodo(todo.id)}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  state = {
    todoList: [],
    nextId: 1
  }

  addTodo = (todoText) => {
    let todoList = this.state.todoList.slice()
    todoList.push({ id: this.state.nextId, text: todoText })
    this.setState({
      todoList,
      nextId: this.state.nextId + 1,
    })
  }

  removeTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.id !== id),
    })
  }
}

export default App
