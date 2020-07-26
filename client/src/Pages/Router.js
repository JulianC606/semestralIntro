import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { Home } from './Home'

export default () => {
  return (
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>)
}
