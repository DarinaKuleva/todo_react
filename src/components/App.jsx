import React, { PureComponent } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { Link } from 'react-router-dom'
import ClearButton from './ClearButton'
import { NBSP } from './NBSP'

import header from '../styles/header.module.css'
import todo from '../styles/todoInput.module.css'

class App extends PureComponent {
  state = {
    todoList: [],
    doneCounter: 0,
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
          <div className={todo.counter}>
            Done
            <NBSP/>
            { this.state.doneCounter }
            <NBSP/>
            of
            <NBSP/>
            { this.state.todoList.length}
          </div>
          <ClearButton
            clearAll={ this.clearAll } />
        </div>
        <Link to='/'>HOME</Link>
      </div>
    )
  }

  addTodo = ( todoText ) => {
    let todoList = this.state.todoList.slice()
    todoList.push( { id: this.state.nextId, text: todoText, done: false, createdAtdate : new Date(), doneAtDate: null } )
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

  crossTodo = (id) => {
    let todoList = this.state.todoList.map(todoItem => (
      id === todoItem.id
        ? ({ ...todoItem, done: true, doneAtDate: new Date() })
        : { ...todoItem }),
    )
    this.setState({
      todoList,
      doneCounter: this.state.doneCounter+1
    })
  }

  clearAll = () => {
    this.setState( {
      todoList: [],
      doneCounter: 0
    } )
  }
}

export default App
