import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Home extends PureComponent {

  render() {
    return (
      <div>
        <h1>Привет, Медвед!</h1>
        <Link to='/todo'>TODO</Link>
      </div>
    )
  }
}

export default Home
