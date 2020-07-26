import React from 'react'

import SidebarMenu from '../../../Containers/SidebarMenuContainer'

import Sider from 'antd/lib/layout/Sider'

export const Sidebar = () => {
  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      onBreakpoint={broken => {
        console.log(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type)
      }}
      collapsible
      style={{ height: '100%' }}
    >
      <SidebarMenu />
    </Sider>
  )
}
