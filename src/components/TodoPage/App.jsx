import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import ClearButton from './ClearButton'
import Filter from './Filter'
import clearAll from '../../actions/clearAll'
import addTodo from '../../actions/addTodo'
import crossOutTodo from '../../actions/crossOutTodo'
import removeTodo from '../../actions/removeTodo'
import { connect } from 'react-redux'

import header from '../../styles/header.module.css'

class App extends PureComponent {
  state = {
    filter: 'all'
  }

  render() {

    const todoList = this.getTodoList()

    return (
      <>
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
                crossOutTodo={ () => this.crossOutTodo( todo.id )}
                makeFast={ () => this. makeFast( todo.id )}
              />
            ) ) }
          </ul>
          <div>
            <Filter
              filterDone={ this.filterDone }
              filterFast={ this.filterFast }
              filterAll={ this.filterAll }/>
          </div>
          <ClearButton
            clearAll={ this.clearAll }/>
          <Link to="/">HOME</Link>
        </div>
      </>
    )
  }

  getTodoList = () => {
    switch (this.state.filter) {
      case 'all':
        return this.props.todoList
      case 'done':
        return this.props.todoList.filter(todoItem => todoItem.done)
      case 'fast':
        return this.props.todoList.filter(todoItem => todoItem.fast)
    }
  }

  filterAll = () => {
    this.setState({filter: 'all'})
  }

  filterDone = () => {
    this.setState({filter: 'done'})
  }

  filterFast = () => {
    this.setState({filter: 'fast'})
  }

  addTodo = ( todoText ) => {
    const newTask = {
      id: this.props.nextId,
      text: todoText,
      done: false,
      fast: false,
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
    this.props.dispatch(clearAll())
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

  makeFast = (id) => {
    const todoList = this.props.todoList.map(todoItem => (
        id === todoItem.id
          ? { ...todoItem, fast: true }
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
