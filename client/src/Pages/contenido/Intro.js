import React from 'react'
import Hero from '../../Components/Molecular/Hero'
import Steps from '../../Components/Atomic/Steps'
import Image from '../../Components/Atomic/Image'

import { Typography, Divider, Row, Col } from 'antd'

const { Title, Paragraph } = Typography

const heroData = {
  title: 'Introducción',
  subtitle: 'Excel: Conversión y operaciones de sistema de numeración o Tabla de verdad',
  caption: 'Grupo 2 1SF-702',
  img: {
    url: '/media/excel.png',
    alt: 'UTP'
  }
}

const stepsData = {
  prev: {
    text: 'Contenido',
    link: '/'
  },
  next: {
    text: 'Herramienta: Concepto',
    link: '/contenido/herramienta/concepto'
  }
}

export const Intro = () => (
  <>
    <Hero {...heroData} />
    <Row justify='center' style={{ padding: '5vh 5vw' }}>
      <Col md={18}>
        <Title style={{ textAlign: 'center' }}>Introducción</Title>
        <Divider />
        <Row>
          <Col xs={24} md={16}>
            <Paragraph style={{ textAlign: 'justify' }}>
            Uno de los temas más nutridos durante este curso fueron las tablas de la verdad, retomándolo, las tablas de la verdad son herramientas que a través de reglas
            que varían según sus conectores lógicos nos ayudan a descifrar los valores de verdad de una proposición compuesta, también nos sirven para saber cuáles son
            las circunstancias en las que sus valores serían falsos. Durante este curso, pudimos ver también que las tablas de la verdad son la base del funcionamiento de
            los circuitos eléctricos, las tablas de la verdad se representan en valores de V y F que simbolizan el verdadero y el falso respectivamente, en los circuitos
            eléctricos la V se representa como un valor 1 y esto haría que el dispositivo prenda y en 0, que sería equivalente al valor de F, se apagaría.
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              Sabiendo la importancia de las tablas de la verdad en el lenguaje computacional, elaboraremos este trabajo el cual consistirá en la utilización de herramientas
              disponibles a todo público como Excel para el reforzamiento y aprendizaje de las tablas de la verdad. Durante este trabajo presentaremos como primer punto una
              introducción al Excel y a las herramientas básicas que se necesitarán para la elaboración de una tabla de la verdad, presentaremos para beneficio del usuario
              ejemplos ilustrativos para entender el concepto de las tablas de la verdad y para que practique, explicaremos las ventajas y desventajas del uso de Excel como una
              herramienta en la lógica computacional. Concluiremos con un manual el cual le servirá a cualquier usuario no importa si su conocimiento en esta herramienta sea
              nulo, después de leer este manual podrá utilizar efectivamente la herramienta de Excel para la elaboración de las tablas de la verdad.
            </Paragraph>
          </Col>
          <Col xs={24} md={8}>
            <Image {...{ img: { src: '/media/tabla_de_verdad.png', alt: 'Tabla de Verdad' }, caption: 'Ejemplo de Tabla de Verdad' }} />
          </Col>
        </Row>
        <Steps {...stepsData} />
      </Col>
    </Row>
  </>
)
