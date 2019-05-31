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
import makeFast from '../../actions/makeFast'

class App extends PureComponent {
  state = {
    filter: 'FILTER_MODE_ALL'
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
      case 'FILTER_MODE_ALL':
        return this.props.todoList
      case 'FILTER_MODE_DONE':
        return this.props.todoList.filter(todoItem => todoItem.done)
      case 'FILTER_MODE_FAST':
        return this.props.todoList.filter(todoItem => todoItem.fast)
    }
  }

  filterAll = () => {
    this.setState({filter: 'FILTER_MODE_ALL'})
  }

  filterDone = () => {
    this.setState({filter: 'FILTER_MODE_DONE'})
  }

  filterFast = () => {
    this.setState({filter: 'FILTER_MODE_FAST'})
  }

  addTodo = ( todoText ) => {
    this.props.dispatch(addTodo(todoText))
  }

  removeTodo = ( id ) => {
    this.props.dispatch(removeTodo(id))
  }

  clearAll = () => {
    this.props.dispatch(clearAll())
  }

  crossOutTodo = (id) => {
    this.props.dispatch(crossOutTodo(id))
  }

  makeFast = (id) => {
    this.props.dispatch(makeFast(id))
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList
  }
}

export default connect(mapStateToProps)(App)
