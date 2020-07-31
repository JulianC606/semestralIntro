import React from 'react'
import Hero from '../../../Components/Molecular/Hero'
import Steps from '../../../Components/Atomic/Steps'
import Image from '../../../Components/Atomic/Image'

import { Typography, Divider, Row, Col, List } from 'antd'

const heroData = {
  title: 'Construir la tabla de la verdad',
  subtitle: 'Manual para Confección de Tablas de Verdad en Excel',
  caption: 'Grupo 2 1SF-702',
  img: {
    url: '/media/tablaverdad.png',
    alt: 'Excel'
  }
}

const stepsData = {
  prev: {
    text: 'Herramienta: Concepto',
    link: '/contenido/herramienta/concepto'
  },
  next: {
    text: 'Manual: 2. Cómo identificar Mintérminos con la función SI',
    link: '/contenido/manual/identifyminterms'
  }
}

const pasos = [
  'Abrir la herramienta de Excel, se debe tener una licencia de Microsoft para poder utilizarla.',
  'Escribir en las celdas las variables (A, B, C, D) con las que se quiere trabajar, estas irán en el encabezado de la tabla, agregar una variable de S que corresponde a la columna donde se arrojarán los resultados de los conectores lógicos de las variables A, B,C,D y agregar una columna donde se identificarán los mintérminos de los valores de salida.',
  'Rellenar los valores correspondientes a 0 y 1 de acuerdo con las reglas que se aplican a los conectores lógicos ya aprendidas.',
  'Procedemos a poner los valores de salida bajo la celda S, en esta columna identificamos los min términos.'
]

export const BuildTruthTable = () => (
  <>
    <Hero {...heroData} />

    <Typography.Title style={{ textAlign: 'center', padding: '5vh 5vw 0' }}>Cómo construir la tabla de la verdad</Typography.Title>
    <Divider />
    <Row justify='center' style={{ padding: '5vh 5vw 0' }}>
      <Col>
        <Image {...{ img: { src: '/media/manual1.png', alt: 'Ventaja' }, caption: 'A partir de la imagen anterior se explicará como insertar una tabla de verdad en Excel' }} />
      </Col>
    </Row>
    <Row justify='center'>
      <Col style={{ padding: '5vh 5vw' }} md={18}>

        <Typography.Title level={4}>Pasos:</Typography.Title>
        <Row>
          <Col>
            <List
              dataSource={pasos}
              renderItem={(item, idx) => (
                <List.Item>
                  <Typography.Title level={4} style={{ display: 'inline' }}>{idx + 1}</Typography.Title>  {item}
                </List.Item>
              )}
            />
          </Col>

        </Row>
        <Steps {...stepsData} />
      </Col>
    </Row>
  </>
)
