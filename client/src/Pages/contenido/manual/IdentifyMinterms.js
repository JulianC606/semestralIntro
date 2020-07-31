import React from 'react'
import Hero from '../../../Components/Molecular/Hero'
import Steps from '../../../Components/Atomic/Steps'
import Image from '../../../Components/Atomic/Image'

import { Typography, Divider, Row, Col, List } from 'antd'

const { Paragraph, Title, Text } = Typography

const heroData = {
  title: 'Identificar Mintérminos con Excel',
  subtitle: 'Manual para Confección de Tablas de Verdad en Excel',
  caption: 'Grupo 2 1SF-702',
  img: {
    url: '/media/tablaverdad.png',
    alt: 'Excel'
  }
}

const stepsData = {
  prev: {
    text: 'Manual: 1. Cómo construir la tabla de la verdad',
    link: '/contenido/manual/buildtruthtable'
  },
  next: {
    text: 'Manual: 3. Mintérminos Resultantes con función SI y AND',
    link: '/contenido/manual/resultingminterms'
  }
}

const paso5 = [
  `Conociendo ya que los mintérminos los sacamos de la evaluación en
  aquellas filas donde el valor de salida es 1, procedemos a ver que 
  es en la columna subrayada en naranja donde insertaremos la función 
  si.`
]

export const IdentifyMinterms = () => (
  <>
    <Hero {...heroData} />
    <Row justify='center' style={{ padding: '5vh 5vw' }}>
      <Col md={18}>
        <Title style={{ textAlign: 'center', padding: '5vh 5vw 0' }}>Identificar Mintérminos con la función SI</Title>
        <Divider />
        <Row justify='center'>
          <Col md={10} style={{ display: 'flex', alignItems: 'center' }}>
            <List
              dataSource={paso5}
              renderItem={(item, idx) => (
                <List.Item style={{ textAlign: 'justify' }}>
                  <Title level={4} style={{ display: 'inline' }}>{idx + 5}.</Title>  {item}
                </List.Item>
              )}
            />
          </Col>
          <Col md={14}>
            <Image {...{ img: { src: '/media/manual21.png', alt: 'Ventaja' } }} />
          </Col>
        </Row>
        <Row justify='center'>
          <Col md={14}>
            <Image {...{ img: { src: '/media/manual22.png', alt: 'Ventaja' } }} />
          </Col>
          <Col md={10}>
            <Paragraph>
              <Title level={4} style={{ display: 'inline' }}>6.</Title>
              El concepto básico que manejaremos (y para explicar esto elegiremos la primera fila como ejemplo) es:
            </Paragraph>
            <Paragraph>
              <Text code>=SI(F5=1;"Mintérmino";"Nada")</Text> la función está definida en G5 por F5.
            </Paragraph>
            <Paragraph>
              <b>¿Por qué?</b> La explicación de esta fórmula es bastante básica y es que lo que tenemos en azul dentro
              de la fórmula equivale a si la condición es verdadera, entonces será un mintérmino, el punto y coma
              en rojo nos quiere ilustrar la otra condición, y es que si es negativa (cualquier cosa que no sea 1,
              como el 0), entonces será “nada” ósea, no será un mintérmino.
            </Paragraph>
            <Paragraph>
              Es ese el concepto para la fórmula que manejaremos en las celdas donde tengamos un mintérmino.
            </Paragraph>
          </Col>

        </Row>
        <Steps {...stepsData} />
      </Col>
    </Row>

  </>
)
