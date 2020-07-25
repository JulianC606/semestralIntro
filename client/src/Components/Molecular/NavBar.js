import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

export const NavBar = () => {
  return (
    <>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item key='1'><Link to='/'>Inicio</Link></Menu.Item>
        <Menu.Item key='2'><Link to='/about'>Nosotros</Link></Menu.Item>
        <Menu.Item key='3'><Link to='/content'>Contenido</Link></Menu.Item>
      </Menu>
    </>
  )
}
