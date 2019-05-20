import React, { PureComponent } from 'react'
import TodoInput from './todoInput'
import TodoItem from './todoItem'
import ClearButton from './clearButton'
import header from '../styles/header.module.css'
import todo from '../styles/todoInput.module.css'
import { Link } from 'react-router-dom'

class App extends PureComponent {
  state = {
    todoList: [],
    doneCounter: 0,
    nextId: 1,
    createdAtdate: 0
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
          <div className={todo.counter}> Done { this.state.doneCounter } of { this.state.todoList.length}</div>
          <ClearButton
            clearAll={ this.clearAll } />
        </div>
        <Link to='/'>HOME</Link>
      </div>
    )
  }

  addTodo = ( todoText ) => {
    let todoList = this.state.todoList.slice()
    todoList.push( { id: this.state.nextId, text: todoText, done: false, label: this.state.currentLabel, createdAtdate : todoText } )
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

  crossTodo = (id) => this.setState((state)=>{
    todoList: this.state.todoList.map((index) => (
      id === index.id
        ? ({ id: index.id, text: index.text, label: this.state.currentLabel, done: true, doneAtDate: index.text })
        : { id: index.id, text: index.text, label:this.state.currentLabel, done: false, createdAtdate: index.text }),
    )
    return {
      doneCounter: state.doneCounter+1,
  }
  }
 )

  clearAll = () => {
    this.setState( {
      todoList: [],
      doneCounter: 0
    } )
  }
}

export default App