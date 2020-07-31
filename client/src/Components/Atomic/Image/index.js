import React from 'react'
import { Typography } from 'antd'
const { Text } = Typography

export default ({ caption, img = null }) => (
  <div style={{ textAlign: 'center', display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
    <img alt='' {...img} style={{ width: '75%' }} />
    {img && <Text disabled>{caption}</Text>}
  </div>
)
