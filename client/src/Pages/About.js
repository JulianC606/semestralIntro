import React from 'react'
import { Row, Col } from 'antd'
import UserList from '../Components/Molecular/Users'
import Hero from '../Components/Molecular/Hero'

const heroData = {
  title: 'Proyecto Semestral',
  subtitle: 'Introducción a la Teoría Computacional',
  caption: 'Grupo 2 1SF-702',
  img: {
    url: '/media/utp.png',
    alt: 'UTP'
  }
}

export const About = ({ changeBackground }) => {
  return (
    <>
      <Hero {...heroData} />

      <Row justify='center' align='middle'>
        <Col md={18}>
          <UserList />
        </Col>
      </Row>
    </>
  )
}
