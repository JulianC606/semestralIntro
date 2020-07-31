import React from 'react'
import Hero from '../../Components/Molecular/Hero'
import Steps from '../../Components/Atomic/Steps'
import Image from '../../Components/Atomic/Image'

import { Typography, Divider, Row, Col } from 'antd'

const { Title, Paragraph } = Typography

const heroData = {
  title: 'Conclusión',
  subtitle: 'Excel: Conversión y operaciones de sistema de numeración o Tabla de verdad',
  caption: 'Grupo 2 1SF-702',
  img: {
    url: '/media/utp.png',
    alt: 'UTP'
  }
}

const stepsData = {
  prev: {
    text: 'Manual: 3. Mintérminos Resultantes con función SI y AND',
    link: '/contenido/manual/resultingminterms'
  },
  next: null
}

export const Conclusion = () => (
  <>
    <Hero {...heroData} />
    <Row justify='center' style={{ padding: '5vh 5vw' }}>
      <Col md={18}>
        <Title style={{ textAlign: 'center' }}>Conclusión</Title>
        <Divider />
        <Row>
          <Col xs={24} md={16}>
            <Paragraph style={{ textAlign: 'justify' }}>
              Podemos concluir que las funciones lógicas en Excel se utilizan en la toma de decisiones. Nos permiten evaluar cuándo se cumple una condición y bajo qué
              contexto, y en base al resultado, decidiremos si se debe ejecutar una determinada acción.
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              Concluimos también que las funciones lógicas presentan tanto ventajas como desventajas, su mayor ventaja es que hacen exactamente lo que digamos, y su mayor
              desventaja es precisamente eso, ¿Qué quiere decir esto? Las funciones lógicas son muy precisas y por lo tanto debemos encargarnos de incluir absolutamente
              todas las posibilidades que se puedan dar y no dejar ninguna posibilidad sin declarar.
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              Concluimos que Excel es un programa que optimiza la representación de conectivos lógicos y es muy fácil de entender para cualquier persona, ya que usa
              básicamente la misma estructura de razonamiento lógico que se usa en una clase de tablas de la verdad habitualmente.
            </Paragraph>
          </Col>
          <Col xs={24} md={8}>
            <Image {...{ img: { src: '/media/excel.png', alt: 'Tabla de Verdad' } }} />
          </Col>
        </Row>
        <Steps {...stepsData} />
      </Col>
    </Row>
  </>
)
