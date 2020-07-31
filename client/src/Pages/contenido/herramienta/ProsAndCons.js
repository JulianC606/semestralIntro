import React from 'react'
import Hero from '../../../Components/Molecular/Hero'
import Steps from '../../../Components/Atomic/Steps'
import Image from '../../../Components/Atomic/Image'

import {
  CheckOutlined,
  CloseOutlined
} from '@ant-design/icons'

import { Typography, Divider, Row, Col, List } from 'antd'

const heroData = {
  title: 'Ventajas y Desventajas',
  subtitle: 'Excel: Conversión y operaciones de sistema de numeración o Tabla de verdad',
  caption: 'Grupo 2 1SF-702',
  img: {
    url: '/media/excel.png',
    alt: 'Excel'
  }
}

const stepsData = {
  prev: {
    text: 'Herramienta: Concepto',
    link: '/contenido/herramienta/concepto'
  },
  next: {
    text: 'Herramienta: Beneficios',
    link: '/contenido/herramienta/beneficios'
  }
}

const ventajasList = [
  'Las funciones de Excel son fáciles de manejar ya que cuando se introduce un valor se genera automáticamente lo siguiente que se debe introducir.',
  'Es una herramienta fácil de conseguir ya que la mayoría de las personas con computador tienen a su alcance una licencia de Microsoft y por lo tanto Excel.',
  'Cuenta con opción de auto rellenado, lo cual implica que copiaremos y pegaremos las fórmulas de manera rápida.',
  'Se pueden convertir las celdas en una tabla.',
  'En la hoja de cálculo se pueden insertar instrucciones para alguien que no entienda cómo se confecciona una tabla de la verdad.',
  'Hay una función SI. ERROR por si queremos que el usuario sepa que ha insertado un valor erróneo, esto permite no cometer errores en cadena.',
  'Dentro de las funciones lógicas se encuentran conectivos como el O, la negación y el exclusive OR, lo cual favorece a las tablas de verdad y a otras funciones lógicas en las que queramos utilizar Excel.'
]

const desventajasList = [
  'Es tan fácil como dar un clic incorrecto en una celda para que sus funciones se alteren, lo cual para un aprendiz puede hacer que sea algo complicado trabajar la tabla en Excel.',
  'En la función SI se necesita muchísima precisión lógica, ya que si no razonamos bien se pueden excluir algunas probabilidades o escenarios, y en vez de considerar el 100% de las probabilidades se considerarían el 75% lo cual resultaría en un error garrafal para la tabla.',
  'Es difícil llevar el hilo de lo que se está haciendo con la función SI ya que es lógica que sale en el momento, en especial, esto se dificulta si el que hizo la función fue otra persona y alguien necesita retomar su trabajo, se tendrán problemas con seguir el hilo del trabajo.'

]

export const ProsAndCons = () => (
  <>
    <Hero {...heroData} />
    <Row justify='center' style={{ padding: '5vh 5vw' }}>
      <Col md={18}>
        <Typography.Title style={{ textAlign: 'center' }}>Ventajas y Desventajas</Typography.Title>
        <Divider />
        <Typography.Title level={4}>Ventajas:</Typography.Title>
        <Row>
          <Col xs={24} md={16}>
            <List
              dataSource={ventajasList}
              renderItem={item => (
                <List.Item>
                  <CheckOutlined style={{ color: 'green' }} /> {item}
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} md={8}>
            <Image {...{ img: { src: '/media/ventaja.png', alt: 'Ventaja' }, caption: 'Ventajas' }} />
          </Col>
        </Row>
        <Typography.Title level={4}>Desventajas:</Typography.Title>
        <Row>
          <Col xs={24} md={8}>
            <Image {...{ img: { src: '/media/desventaja.png', alt: 'Desventaja' }, caption: 'Desventajas' }} />
          </Col>
          <Col xs={24} md={16}>
            <List
              dataSource={desventajasList}
              renderItem={item => (
                <List.Item>
                  <CloseOutlined style={{ color: 'red' }} /> {item}
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
