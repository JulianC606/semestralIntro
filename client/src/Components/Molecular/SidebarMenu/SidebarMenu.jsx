import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

import {
  TeamOutlined
} from '@ant-design/icons'

import { Menu, Spin } from 'antd'

export const SidebarMenu = ({ loading, structure }) => {
  const [SelectedItem, setSelectedItem] = useState(null)

  const section = structure && structure.pages.filter((obj) => obj.link === window.location.pathname.match(/^\/\w*/)[0])[0]

  const location = useLocation()
  useEffect(() => {
    if (typeof section !== 'undefined') {
      setSelectedItem(section.pages.filter(obj => obj.link === location.pathname)[0].id.toString())
    } else {
      setSelectedItem(null)
    }
  }, [section, location])

  return (
    structure.loading
      ? <Spin />
      : <Menu theme='dark' mode='inline' selectedKeys={[SelectedItem]}>
        {
          section.pages.map(({ title, link, id }) =>

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
