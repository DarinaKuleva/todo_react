import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import ClearButton from './ClearButton'
import clearAll from '../../actions/clearAll'
import addTodo from '../../actions/addTodo'
import crossOutTodo from '../../actions/crossOutTodo'
import removeTodo from '../../actions/removeTodo'
import { connect } from 'react-redux'

import header from '../../styles/header.module.css'

class App extends PureComponent {
  render() {
    const {
      todoList
    } = this.props

    return (
      <div>
        <h1 className={ header.title }>
          My ToDo List
        </h1>
        <div className={ header.input }>
          <TodoInput addTodo={ this.addTodo }/>
          <ul>
            { todoList.map( todo => (
              <TodoItem
                todo={ todo }
                key={ todo.id }
                removeTodo={ () => this.removeTodo( todo.id ) }
                crossOutTodo={ () => this.crossOutTodo( todo.id ) }
              />
            ) ) }
          </ul>
          <ClearButton
            clearAll={ this.clearAll }/>
        </div>
        <Link to="/">HOME</Link>
      </div>
    )
  }

  addTodo = ( todoText ) => {
    const newTask = {
      id: this.props.nextId,
      text: todoText,
      done: false,
      createdAtDate: new Date(),
      doneAtDate: null,
    }
    this.props.dispatch(addTodo(newTask))
  }

  removeTodo = ( id ) => {
    const todoList = this.props.todoList.filter( todo => todo.id !== id )
    this.props.dispatch(removeTodo(todoList))
  }

  clearAll = () => {
    const todoList = []
    this.props.dispatch(clearAll(todoList))
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
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList,
    nextId: state.nextId
  }
}

export default connect(mapStateToProps)(App)
