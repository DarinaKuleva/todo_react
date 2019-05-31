import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { NBSP } from '../Additions/NBSP'
import PropTypes from 'prop-types'

class TaskInformation extends React.PureComponent {

  static propTypes = {
    todoList: PropTypes.array.isRequired
  };

  render() {
    const {
      todoList,
      match: {
        params: {
          id
        }
      },
    } = this.props

    const openTask = todoList.filter(todoItem => {
      return todoItem.id === +id
    })

    const createdDate = openTask.map(date =>
      <div key={date.id}>
        {date.createdAtDate.getDate()}.{date.createdAtDate.getMonth() + 1}
        <NBSP/>
        at
        <NBSP/>
        {date.createdAtDate.getHours()}
        <NBSP/>
        o'clock
        <NBSP/>
        {date.createdAtDate.getMinutes()}
        <NBSP/>
        minutes
      </div>,
    )

    const doneTime = openTask.map(date =>
      <div key={date.id}>
        {date.done
          ? `task done ${ date.doneAtDate.getDate() }.${ (date.createdAtDate.getMonth() + 1) } 
            at ${ date.doneAtDate.getHours() } o'clock ${ date.doneAtDate.getMinutes() } minutes`
          : 'task not completed'}
      </div>,
    )

    return (
      <>
        <h2>Task Information</h2>
        <div>
          {
            openTask.map(todoItem =>
              <div key={todoItem.id}>
                <div>
                  {todoItem.text}
                </div>
                <div>
                  task created
                  <NBSP/>
                  {createdDate}
                </div>
                <div>
                  {doneTime}
                </div>
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
