import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

export const Navbar = ({ structure, location, updateLocation }) => {
  const handlerClick = link => updateLocation(link)

  const navbarContentStyle = {
    gridArea: '1/2/2/3',
    width: '100%',
    height: '100%',
    boxShadow: '0px 0px 31px -9px rgba(0,0,0,0.83)',
    backgroundColor: '#001529',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    padding: '0 10%'
  }

  return (
    <div style={navbarContentStyle}>
      <Menu theme='dark' mode='horizontal' selectedKeys={[location.path]}>
        {
          structure.pages.sort((a, b) => a.id > b.id ? 1 : -1).map(({ link, title }) => (
            <Menu.Item key={link} style={{ height: '100%' }}>
              <Link to={link} onClick={(e) => handlerClick(link)}>
                {title}
              </Link>
            </Menu.Item>
          ))
        }
      </Menu>
    </div>
  )
}
