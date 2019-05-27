import React from 'react'
import { Link } from 'react-router-dom'
import { NBSP } from '../Additions/NBSP'
import { connect } from 'react-redux'

import todo from '../../styles/todoInput.module.css'


const Home = ({todoList}) => {
  console.log(todoList)
  const allTask = todoList.length;
  console.log(allTask)
  // const allTaskDone = todoList.filter(todo => todo.done)
  return (
      <>
        <h1>Привет, Медвед!</h1>
        <div className={ todo.counter }>
          Done
          <NBSP/>

          <NBSP/>
          of
          <NBSP/>
          { allTask }
        </div>
        <Link to="/todo">TODO</Link>
      </>
    )

}


const mapToState = (state) => {
  return {todoList: state};
}

const WrappedHome = connect(mapToState)(Home)

export default WrappedHome;
