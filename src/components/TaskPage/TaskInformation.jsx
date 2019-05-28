import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class TaskInformation extends PureComponent {
  render() {
    const {
      todoList
    } = this.props

    return (
      <>
        <h2>Task Information</h2>
        <div>
          {
            todoList.map( todoItem =>
            <div>
            { todoItem.text }
            </div>
            )
          }
        </div>
        <div>{
          todoList.filter( todoItem =>
            <div>
              { todoItem.id === this.props.match.params.taskId }
            </div>
          )
        }
        </div>
        <Link to="/todo">Todo List</Link>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList
  }
}

export default connect(mapStateToProps)(TaskInformation)
