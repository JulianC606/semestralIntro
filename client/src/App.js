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

import { Layout, Card, Row, Col } from 'antd'

const { Header, Content, Footer } = Layout

let App = ({ fetchStructure, updateLocation }) => {
  useEffect(() => {
    fetchStructure()
    updateLocation(window.location.pathname.match(/^\/\w*/)[0])
  }, [fetchStructure, updateLocation])

  return (
    <Router>
      <Row>
        <Col flex='auto'>
          <Header>
            <NavBar />
          </Header>
        </Col>
      </Row>
      <Row style={{ minHeight: '80vh' }}>
        <Col>
          <Sidebar />
        </Col>
        <Col flex='auto'>
          <Card style={{ margin: '25px' }}>
            <Pages />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col flex='auto'>
          <Footer theme='dark' style={{ textAlign: 'center' }}>Página web del semestral de Introducción a la Teoría Computacional - Grupo 2 - 2020</Footer>
        </Col>
      </Row>

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
