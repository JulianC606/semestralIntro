import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import Logo from '../../Atomic/Logo'

export const Navbar = ({ structure, location, updateLocation }) => {
  const handlerClick = (e, link) => {
    updateLocation(link)
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '10%', width: '100%' }}>
      <Logo />
      <Menu theme='dark' mode='horizontal' selectedKeys={[location.location]}>
        {
          structure.pages.map(({ link, title }) => (
            <Menu.Item key={link}>
              <Link to={link} onClick={(e) => handlerClick(e, link)}>
                {title}
              </Link>
            </Menu.Item>
          ))
        }
      </Menu>
    </div>
  )
}
