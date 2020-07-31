import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { IndicePage } from './IndicePage'
import { About } from './About'
import { Intro } from './contenido/Intro'
import { Concepto } from './contenido/herramienta/Concepto'
import { ProsAndCons } from './contenido/herramienta/ProsAndCons'
import './styles.css'
import { Beneficios } from './contenido/herramienta/Beneficios'
import { BuildTruthTable } from './contenido/manual/BuildTruthTable'
import { IdentifyMinterms } from './contenido/manual/IdentifyMinterms'
import { ResultingMinterms } from './contenido/manual/ResultingMinterms'
import { Conclusion } from './contenido/Conclusion'

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
        <Route path='/contenido/herramienta/prosandcons'>
          <ProsAndCons />
        </Route>
        <Route path='/contenido/herramienta/beneficios'>
          <Beneficios />
        </Route>
        <Route path='/contenido/manual/buildtruthtable'>
          <BuildTruthTable />
        </Route>
        <Route path='/contenido/manual/identifyminterms'>
          <IdentifyMinterms />
        </Route>
        <Route path='/contenido/manual/resultingminterms'>
          <ResultingMinterms />
        </Route>
        <Route path='/contenido/conclusion'>
          <Conclusion />
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
