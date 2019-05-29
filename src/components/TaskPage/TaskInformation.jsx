import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { NBSP } from '../Additions/NBSP'

class TaskInformation extends React.PureComponent {
  render() {
    const {
      todoList,
      match: {
        params,
      },
    } = this.props

    const openTask = todoList.filter(todoItem => {
      return todoItem.id === +params.id
    })

    const createdDate = openTask.map(date =>
      <div>
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

    const doneDate = openTask.map(date =>
      <div>
        {date.done
          ? 'task done ' + date.doneAtDate.getDate() + '.' + (date.createdAtDate.getMonth() + 1)
          + ' at ' + date.doneAtDate.getHours() + ' o\'clock '
          + date.doneAtDate.getMinutes() + ' minutes'
          : 'task not completed'}
      </div>,
    )

    return (
      <>
        <h2>Task Information</h2>
        <div key={openTask.id}>
          {
            openTask.map(todoItem =>
              <div >
                <div>
                  {todoItem.text}
                </div>
                <div>
                  task created
                  <NBSP/>
                  {createdDate}
                </div>
                <div>
                  {doneDate}
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
    todoList: state.todoList,
    nextId: state.nextId,
  }
}

export default connect(mapStateToProps)(TaskInformation)
