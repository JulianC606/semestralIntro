// React
import React, { useEffect } from 'react'

// Redux
import { connect } from 'react-redux'

// React Router
import { BrowserRouter as Router } from 'react-router-dom'

import Pages from './Pages/Router'
import { fetchStructure } from './Redux/Actions/structureActions'
import { updateLocation } from './Redux/Actions/locationActions'

import './App.less'
import NavBar from './Containers/NavbarContainer'
import Sidebar from './Components/Molecular/Sidebar'

import { Layout } from 'antd'

const { Footer } = Layout

let App = ({ fetchStructure, updateLocation }) => {
  useEffect(() => {
    fetchStructure()
    updateLocation(window.location.pathname.match(/^\/\w*/)[0])
  }, [fetchStructure, updateLocation])

  return (
    <Router>
      <div
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gridTemplateRows: '64px 1fr auto',
          gap: 0
        }}
      >
        <NavBar />
        <Sidebar />
        <Pages />
        <Footer theme='dark' style={{ textAlign: 'center', gridArea: '3 / 1 / 4 / 3' }}>Página web del semestral de Introducción a la Teoría Computacional - Grupo 2 - 2020</Footer>
      </div>
    </Router>
  )
}

App.prototypes = {}

App.defaultProps = {}

const mapDispatchToProps = dispatch => ({
  fetchStructure: () => dispatch(fetchStructure()),
  updateLocation: newLocation => dispatch(updateLocation(newLocation))

})

App = connect(null, mapDispatchToProps)(App)

export default App
