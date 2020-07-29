import React from 'react'
import { Typography, Divider, Row, Col } from 'antd'
import Index from '../Components/Molecular/Index/Index'
import Steps from '../Components/Atomic/Steps'

import Hero from '../Components/Molecular/Hero'

const { Title } = Typography

const heroData = {
  title: 'Proyecto Semestral',
  subtitle: 'Introducción a la Teoría Computacional',
  caption: 'Grupo 2 1SF-702',
  img: {
    url: '/media/utp.png',
    alt: 'UTP'
  }
}

const stepsData = {
  prev: null,
  next: {
    text: 'Introducción',
    link: '/contenido/intro'
  }
}

export const IndicePage = () => (
  <>
    <Hero {...heroData} />
    <Row justify='center' style={{ padding: '5vh 5vw' }}>
      <Col md={18}>
        <Title style={{ marginTop: '1em' }} level={3}>Tema:</Title>
        <Title style={{ margin: 0 }}>Excel: <small style={{ fontWeight: 'lighter' }}>Conversión y operaciones de sistema de numeración o Tabla de verdad</small></Title>
        <Divider />
        <Index />
        <Steps {...stepsData} />
      </Col>
    </Row>
  </>
)
