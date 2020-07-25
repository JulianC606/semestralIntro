import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import './App.less'
import { NavBar } from './Components/Molecular/NavBar'
import { Layout, Breadcrumb, Card } from 'antd'

const { Header, Content, Footer, Sider } = Layout

function App () {
  return (
    <Router>
      <Layout className='layout'>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        />
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0 }}>
            <NavBar />
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Card>
              <Switch>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </Card>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Router>
  )
}

App.prototypes = {}

App.defaultProps = {}

export default App
