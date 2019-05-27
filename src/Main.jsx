import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/HomePage/Home'
import App from './components/TodoPage/App'
import TaskInformation from './components/TaskPage/TaskInformation'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/todo" component={App} />
      <Route path="/task/test" component={TaskInformation} />
    </Switch>
  </main>
)

export default Main
