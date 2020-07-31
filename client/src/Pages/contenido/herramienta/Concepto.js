import React from 'react'
import Hero from '../../../Components/Molecular/Hero'
import Steps from '../../../Components/Atomic/Steps'
import Image from '../../../Components/Atomic/Image'

import { Typography, Divider, Row, Col } from 'antd'

const { Title, Paragraph, Text } = Typography

const heroData = {
  title: 'Concepto',
  subtitle: 'Excel: Conversión y operaciones de sistema de numeración o Tabla de verdad',
  caption: 'Grupo 2 1SF-702',
  img: {
    url: '/media/excel.png',
    alt: 'Excel'
  }
}

const stepsData = {
  prev: {
    text: 'Contenido',
    link: '/'
  },
  next: {
    text: 'Herramienta: Ventajas y Desventajas',
    link: '/contenido/herramienta/prosandcons'
  }
}

export const Concepto = () => (
  <>
    <Hero {...heroData} />
    <Row justify='center' style={{ padding: '5vh 5vw' }}>
      <Col md={18}>
        <Title style={{ textAlign: 'center' }}>Concepto</Title>
        <Divider />
        <Row>
          <Col xs={24} md={16}>
            <Paragraph style={{ textAlign: 'justify' }}>
              Excel es una herramienta de Microsoft la cual consiste en una hoja de cálculo que cuenta con Cálculo, herramientas gráficas, tablas calculares y
              un lenguaje de programación macro llamado Visual Basic para aplicaciones. Esta herramienta es capaz de desarrollar diferentes funciones dentro de
              la contabilidad y otras ciencias, pero en este caso la utilizaremos para representar la naturaleza de los conectivos lógicos y las proposiciones
              compuestas dentro de una tabla de la verdad.
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              Primero deberemos identificar las herramientas con las que contamos en Excel que nos podrían servir para cualquier trabajo a realizar en la rama lógica,
              incluyendo éste. Como veremos, Excel cuenta con una biblioteca de funciones, estas se clasifican en matemáticas, lógicas, financieras, ingeniería, entre
              otras. En este caso, las que nos servirán serán las lógicas, nosotros en este caso decidimos utilizar las funciones SI, ya que al resolver una tabla de
              verdad nos fijamos en SI el valor de entrada x es 1 o 0, la salida será 1 o 0 de acuerdo con las reglas correspondientes, es decir, la base de una tabla
              de verdad es un enunciado que nos dice que insertado un valor, se probará una condición que generara una salida, esto es lo que hace a su vez la función
              SI y la función SI conjunto. Si necesitáramos comprobar cómo actúa el conectivo lógico de negación podríamos utilizar la función NO la cual cambia valores
              negativos a positivos y de positivos a negativos.
            </Paragraph>
          </Col>
          <Col xs={24} md={8}>
            <Image {...{ img: { src: '/media/excel.png', alt: 'Excel' }, caption: 'Microsoft Excel' }} />
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Text style={{ textAlign: 'justify' }}>
              Para entender cómo haremos la tabla de la verdad debemos entender los siguientes conceptos:
            </Text>
          </Col>
        </Row>
        <Title level={4}>La Función SI:</Title>
        <Row>
          <Col xs={24} md={14}>
            <Image {...{ img: { src: '/media/funcion_si.png', alt: 'Tabla de Verdad' }, caption: 'Función SI' }} />
          </Col>
          <Col xs={24} md={10}>
            <Paragraph style={{ textAlign: 'justify' }}>
              Es una fórmula que nos permite insertar más de un valor y nos permite agregarle condiciones que en Excel se llaman “pruebas lógicas”, nos permite insertar
              lo que será el valor de salida si las pruebas lógicas se cumplen en verdadero o falso.
            </Paragraph>
          </Col>
        </Row>
        <Title level={4}>Las Celdas:</Title>
        <Row>
          <Col xs={24} md={10}>
            <Paragraph style={{ textAlign: 'justify' }}>
            Las celdas son los campos dentro de la hoja de cálculo de Excel donde pondremos los valores de salida y de entrada. Específicamente introduciremos las fórmulas
            en las celdas donde van los valores de salida.
            </Paragraph>
          </Col>
          <Col xs={24} md={14}>
            <Image {...{ img: { src: '/media/celda.png', alt: 'Celda' }, caption: 'Celdas' }} />
          </Col>
        </Row>
        <Title level={4}>La Función Y:</Title>
        <Row>
          <Col xs={24} md={14}>
            <Image {...{ img: { src: '/media/funcion_y.png', alt: 'Función Y' }, caption: 'Función Y' }} />
          </Col>
          <Col xs={24} md={10}>
            <Paragraph style={{ textAlign: 'justify' }}>
              Esta representa al conectivo lógico conocido como and o disyunción, con esta función lógica podremos evaluar varias expresiones lógicas y saber si todas ellas
              son verdaderas. Será suficiente con que cualquiera de las expresiones sea falsa para que el resultado de la función también sea FALSO.
            </Paragraph>
          </Col>
        </Row>
        <Title level={4}>Las Filas:</Title>
        <Row>
          <Col xs={24} md={10}>
            <Paragraph style={{ textAlign: 'justify' }}>
              En la primera fila pondremos las variables que encabezarán sus respectivas columnas y la variable S que encabezará la columna de los valores de salida, también
              pondremos 1 y 0 respectivamente, se representa en Excel así:
            </Paragraph>
          </Col>
          <Col xs={24} md={14}>
            <Image {...{ img: { src: '/media/filas.png', alt: 'Filas' }, caption: 'Una Fila' }} />
          </Col>
        </Row>
        <Title level={4}>Las Columnas:</Title>
        <Row>
          <Col xs={24} md={14}>
            <Image {...{ img: { src: '/media/columnas.png', alt: 'Columnas' }, caption: 'Una Columna' }} />
          </Col>
          <Col xs={24} md={10}>
            <Paragraph style={{ textAlign: 'justify' }}>
            En una columna encontraremos valores de 0 y 1 pertenecientes a una variable determinada, desde la columna S (donde se proyectaran los valores de Salida) determinaremos
            los mintérminos y en esta columna hallaremos las fórmulas, se representa en Excel así:
            </Paragraph>
          </Col>
        </Row>
        <Steps {...stepsData} />
      </Col>
    </Row>
  </>
)
