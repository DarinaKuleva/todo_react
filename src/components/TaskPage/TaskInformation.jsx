import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { NBSP } from '../Additions/NBSP'
import PropTypes from 'prop-types'

class TaskInformation extends React.PureComponent {

  static propTypes = {
    todoList: PropTypes.array.isRequired,
  }

  render() {
    const {
      todoList,
      match: {
        params: {
          id,
        },
      },
    } = this.props

    const [openTask] = todoList.filter( todoItem => {
      return todoItem.id === +id
    } )

    return (
      <>
        <h2>Task Information</h2>
        <div>
          <div>
            { openTask.text }
          </div>
          <div>
            task created
            <NBSP/>
            { openTask.createdAtDate.getDate() }.{ openTask.createdAtDate.getMonth() + 1 }
            <NBSP/>
            at
            <NBSP/>
            { openTask.createdAtDate.getHours() }
            <NBSP/>
            o'clock
            <NBSP/>
            { openTask.createdAtDate.getMinutes() }
            <NBSP/>
            minutes
          </div>
          <div>
            { openTask.done
              ? `task done ${ openTask.doneAtDate.getDate() }.${ (openTask.createdAtDate.getMonth() + 1) } 
            at ${ openTask.doneAtDate.getHours() } o'clock ${ openTask.doneAtDate.getMinutes() } minutes`
              : 'task not completed' }
          </div>
        </div>
        <Link to="/todo">Todo List</Link>
      </>
    )
  }
}

function mapStateToProps( state ) {
  return {
    todoList: state.todoList,
  }
}

export default connect( mapStateToProps )( TaskInformation )
