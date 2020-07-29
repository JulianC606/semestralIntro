import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { IndicePage } from './IndicePage'
import { About } from './About'
import { Intro } from './contenido/Intro'
import { Concepto } from './contenido/herramienta/Concepto'
import './styles.css'

export default () => {
  return (
    <div className='fondo'>
      <Switch>
        <Route path='/contenido/intro'>
          <Intro />
        </Route>
        <Route path='/contenido/herramienta/concepto'>
          <Concepto />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <IndicePage />
        </Route>
      </Switch>
    </div>
  )
}
