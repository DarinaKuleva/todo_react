import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import App from './App'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/todo" component={App} />
    </Switch>
  </main>
)

export default Main
