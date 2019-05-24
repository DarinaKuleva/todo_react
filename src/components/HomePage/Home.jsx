import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Привет, Медвед!</h1>
      <Link to="/todo">TODO</Link>
    </>
  )
}

export default Home
