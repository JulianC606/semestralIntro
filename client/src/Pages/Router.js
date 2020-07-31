import React, { useState, useEffect } from 'react'

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
import { connect } from 'react-redux'

const backgroundStyle = (back) => {
  const lines = back !== 'white' ? 'white' : '%23000000'
  return {
    backgroundColor: back,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${lines}' fill-opacity='0.06' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`
  }
}

const mapStateToProps = state => ({
  ...state.location
})

export default connect(mapStateToProps)(({ background }) => {
  const [divStyle, setDivStyle] = useState(backgroundStyle('white'))

  useEffect(() => {
    setDivStyle(backgroundStyle(background))
  }, [background])

  return (
    <div style={{ ...divStyle }}>
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
)
