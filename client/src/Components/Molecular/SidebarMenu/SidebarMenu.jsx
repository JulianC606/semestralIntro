import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Logo from '../../Atomic/Logo'

import {
  TeamOutlined
} from '@ant-design/icons'

import { Menu, Spin } from 'antd'

export const SidebarMenu = ({ loading, structure }) => {
  const [SelectedItem, setSelectedItem] = useState(null)

  const section = structure && structure.pages.filter((obj) => obj.link === window.location.pathname.match(/^\/\w*/)[0])[0]

  const location = useLocation()
  useEffect(() => {
    try {
      const selected = section.pages.filter(obj => obj.link === location.pathname)[0].id.toString()
      setSelectedItem(selected)
    } catch {
      setSelectedItem(null)
    }
  }, [section, location])

  return (
    structure.loading
      ? <Spin />
      : <Menu theme='dark' mode='inline' selectedKeys={[SelectedItem]} style={{ height: '100%' }}>
        <Logo />
        {
          section.pages.sort((a, b) => a.id > b.id ? 1 : -1).map(({ title, link, id }) =>

            (
              <Menu.Item key={id} icon={<TeamOutlined />}>
                <Link to={link}>{title}</Link>
              </Menu.Item>
            )
          )
        }
        </Menu>
  )
}
