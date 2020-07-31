import React from 'react'
import Hero from '../../../Components/Molecular/Hero'
import Steps from '../../../Components/Atomic/Steps'
import Image from '../../../Components/Atomic/Image'

import { Typography, Divider, Row, Col } from 'antd'

const { Title, Paragraph } = Typography

const heroData = {
  title: 'Beneficios',
  subtitle: 'Excel: Conversión y operaciones de sistema de numeración o Tabla de verdad',
  caption: 'Grupo 2 1SF-702',
  img: {
    url: '/media/excel.png',
    alt: 'Excel'
  }
}

const stepsData = {
  prev: {
    text: 'Herramienta: Ventajas y Desventajas',
    link: '/contenido/herramienta/prosandcons'
  },
  next: {
    text: 'Manual: 1. Cómo construir la tabla de la verdad',
    link: '/contenido/manual/buildtruthtable'
  }
}

export const Beneficios = () => (
  <>
    <Hero {...heroData} />
    <Row justify='center' style={{ padding: '5vh 5vw' }}>
      <Col md={18}>
        <Title style={{ textAlign: 'center' }}>Concepto</Title>
        <Divider />
        <Row>
          <Col xs={24} md={14}>
            <Paragraph style={{ textAlign: 'justify' }}>
              Excel es un programa que relaciona de manera práctica y funcional las principales funciones lógicas, esto tiene vastos beneficios para las empresas y otros
              usuarios de este programa ya que se pueden relacionar pérdidas anuales, se pueden realizar descuentos o incrementos de salarios a sus empleados dado un
              valor condicional como si gana menos de 500$ se le incrementan 100$ y otros muchos usos lógicos que se le pueden dar a estas funciones.
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              La herramienta de auto rellenado es muy útil para todas las empresas y personal laboral ya que incrementa la productividad debido a la rapidez con la que se
              pueden completar inmensas tablas u otros formularios extensos, el auto rellenado da también precisión al trabajar ya que solo se debe comprobar que la
              función a copiar esté correcta, esto es más beneficioso que hacerla una por una.
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              Los usuarios de Excel pueden dar formato a sus hojas de cálculo usando diferentes tonos de colores, negritas y cursivas, para diferenciar entre las columnas
              y traer los datos más importantes al frente. Esto es de mucha ayuda cuando se manejan grandes cantidades de datos importantes como planillas, informes de
              costos, entre otros, ya que resulta más fácil ordenar la información
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              Las funciones lógicas en Excel se utilizan en la toma de decisiones. Nos permiten evaluar el cumplimiento de una condición, y en base al resultado,
              decidiremos si se debe ejecutar una determinada acción.
            </Paragraph>
          </Col>
          <Col xs={24} md={10}>
            <Image {...{ img: { src: '/media/beneficios.png', alt: 'Beneficios' }, caption: 'Beneficios de Excel' }} />
          </Col>
        </Row>
        <Steps {...stepsData} />
      </Col>
    </Row>
  </>
)
