import React from 'react'
import { Link } from 'react-router-dom'
import todo from '../../styles/todoInput.module.css'
import { NBSP } from '../Additions/NBSP'
// import { connect } from 'react-redux'

const Home = () => {
  return (
    <>
      <h1>Привет, Медвед!</h1>
        <div className={ todo.counter }>
          Done
          <NBSP/>
          { this.props.doneCounter }
          <NBSP/>
          of
          <NBSP/>
          { this.props.todoList.length }
        </div>
      <Link to="/todo">TODO</Link>
    </>
  )
}


export default Home
