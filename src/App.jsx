import React, { PureComponent } from 'react'
import TodoInput from './components/todoInput'
import TodoItem from './components/todoItem'
import ClearButton from './components/clearButton'
import header from './styles/header.module.css'

class App extends PureComponent {
  state = {
    todoList: [],
    nextId: 1
  }

  render() {
    return (
      <div>
        <h1
          className={header.title}
        >My ToDo List</h1>
        <div
          className={header.input}
        >
          <TodoInput addTodo={ this.addTodo }/>
          <ul>
            { this.state.todoList.map( todo => {
              return (
                <TodoItem
                  todo={ todo }
                  key={ todo.id }
                  removeTodo={ () => this.removeTodo( todo.id ) }
                  crossTodo={ () => this.crossTodo( todo.id ) }
                />
              )
            } ) }
          </ul>
          <ClearButton
            clearAll={ this.clearAll } />
        </div>
      </div>
    )
  }

  addTodo = ( todoText ) => {
    let todoList = this.state.todoList.slice()
    todoList.push( { id: this.state.nextId, text: todoText, done: false } )
    this.setState( ( state ) => {
      return {
        todoList,
        nextId: state.nextId + 1,
      }
    } );
  }

  removeTodo = ( id ) => {
    this.setState( {
      todoList: this.state.todoList.filter( todo => todo.id !== id )
    } )
  }

  //crossTodo = (id) => {
    //document.getElementById(id).color = 'red';
 // }

  crossTodo = (id) => this.setState({
    todoList: this.state.todoList.map((index) => (
      id === index.id
        ? ({ id: index.id, text: index.text, done: true })
        : { id: index.id, text: index.text, done: false }),
    ),
  })

  clearAll = () => {
    this.setState( {
      todoList: []
    } )
  }
}

export default App
