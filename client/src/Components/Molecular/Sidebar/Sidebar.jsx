import React from 'react'

import SidebarMenu from '../../../Containers/SidebarMenuContainer'

import Sider from 'antd/lib/layout/Sider'

export const Sidebar = () => {
  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      collapsible
      style={{ height: '100%', gridArea: '1 / 1 / 3 / 2' }}
    >
      <SidebarMenu />
    </Sider>
  )
}
