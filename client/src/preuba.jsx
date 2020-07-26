import React from 'react'

import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout

const prueba = () => (
  <Layout>
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      onBreakpoint={broken => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
    >
      <div className='logo' />
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
        <Menu.Item key='1' icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key='2' icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key='3' icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key='4' icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
)

#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}



.site-layout-background {
  background: #fff;
}