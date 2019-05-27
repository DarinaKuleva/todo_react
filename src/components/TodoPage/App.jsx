import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import ClearButton from './ClearButton'
import { NBSP } from '../Additions/NBSP'
import clearAll from '../../actions/clearAll'
import addTodo from '../../actions/addTodo'
import crossOutTodo from '../../actions/crossOutTodo'
import removeTodo from '../../actions/removeTodo'
import { connect } from 'react-redux'

import header from '../../styles/header.module.css'
import todo from '../../styles/todoInput.module.css'

class App extends PureComponent {
  state = {
    nextId: 1,
    doneCounter: 0
  }

  render() {
    const doneCounter = () => {this.props.todoList.map(todoItem => (
      todoItem.done === true
       ? {doneC : this.state.doneC+1}
      : this.state.doneC
      )
    )}
    // const doneCounter = f(this.props.todoList); посчитать из состояния и убрать из конекта, убрать this.state
    //диструкруризация this.props
    return (
      <div>
        <h1 className={ header.title }>
          My ToDo List
        </h1>
        <div className={ header.input }>
          <TodoInput addTodo={ this.addTodo }/>
          <ul>
            { this.props.todoList.map( todo => (
              <TodoItem
                todo={ todo }
                key={ todo.id }
                removeTodo={ () => this.removeTodo( todo.id ) }
                crossOutTodo={ () => this.crossOutTodo( todo.id ) }
              />
            ) ) }
          </ul>
          <div className={ todo.counter }>
            Done
            <NBSP/>
            { this.state.doneC }
            <NBSP/>
            of
            <NBSP/>
            { this.props.todoList.length }
          </div>
          <ClearButton
            clearAll={ this.clearAll }/>
        </div>
        <Link to="/">HOME</Link>
      </div>
    )
  }

  addTodo = ( todoText ) => {
    const newTask = {
      id: this.state.nextId,
      text: todoText,
      done: false,
      createdAtDate: new Date(),
      doneAtDate: null,
    }

    this.setState( ( state ) => {
      return {
        nextId: state.nextId + 1
      }
    } )
    this.props.dispatch(addTodo(newTask))
  }

  crossOutTodo = (id) => {
    const todoList = this.props.todoList.map(todoItem => (
        id === todoItem.id
          ? { ...todoItem, done: true, doneAtDate: new Date() }
          : todoItem
      ),
    )
    this.props.dispatch(crossOutTodo(todoList))
  }

  removeTodo = ( id ) => {
    const todoList = this.props.todoList.filter( todo => todo.id !== id )
    this.props.dispatch(removeTodo(todoList))
  }


  clearAll = () => {
    const todoList = []
    this.props.dispatch(clearAll(todoList))
  };
}

//переделать экспорт-вынести стэйт
export default connect(state => {
  return {
    todoList: state.todoList
  }
})(App)
