import React from 'react'
import { Link } from 'react-router-dom'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'

export default ({ prev, next }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '15px' }}>
    {
      prev &&
        <Link to={prev.link}>
          <h3 style={{ color: '#ffa62b' }}>
            <DoubleLeftOutlined /> {prev.text}
          </h3>
        </Link>
    }
    {
      next &&
        <Link to={next.link}>
          <h3 style={{ color: '#ffa62b' }}>
            {next.text} <DoubleRightOutlined />
          </h3>
        </Link>
    }
  </div>
)
