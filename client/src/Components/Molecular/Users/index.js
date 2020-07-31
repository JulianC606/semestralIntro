import React from 'react'
import { List, Typography } from 'antd'
import UserCard from '../../Atomic/UserCard'
import { data } from './data'

export default () => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        xl: 3
      }}
      size='large'
      header={<Typography.Title style={{ marginBottom: 0, color: 'white' }}>Integrantes del Grupo 2 del Salon 1SF-702</Typography.Title>}
      dataSource={data}
      renderItem={(item) => {
        console.log(item)
        return (
          <List.Item style={{ marginTop: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <UserCard {...item} />
          </List.Item>
        )
      }}
    />

  )
}
