import React from 'react'
import Hero from '../../../Components/Molecular/Hero'
import Steps from '../../../Components/Atomic/Steps'
import Image from '../../../Components/Atomic/Image'

import { Typography, Divider, Row, Col } from 'antd'

const { Title, Paragraph, Text } = Typography

const heroData = {
  title: 'Mintérminos Resultantes',
  subtitle: 'Manual para Confección de Tablas de Verdad en Excel',
  caption: 'Grupo 2 1SF-702',
  img: {
    url: '/media/tablaverdad.png',
    alt: 'Excel'
  }
}

const stepsData = {
  prev: {
    text: 'Manual: 2. Cómo identificar Mintérminos con la función SI',
    link: '/contenido/manual/identifyminterms'
  },
  next: {
    text: 'Conclusión',
    link: '/contenido/conclusion'
  }
}

export const ResultingMinterms = () => (
  <>
    <Hero {...heroData} />
    <Row justify='center' style={{ padding: '5vh 5vw' }}>
      <Col md={18}>
        <Title style={{ textAlign: 'center' }}>Mintérminos Resultantes con función SI y AND</Title>
        <Divider />
        <Row justify='center'>
          <Col>
            <Image {...{ img: { src: '/media/manual31.png', alt: 'Excel' } }} />
          </Col>
        </Row>
        <Row style={{ margin: '25px 0' }}>
          <Col>
            <Paragraph style={{ textAlign: 'justify' }}>
              <Title level={4} style={{ display: 'inline' }}>7. </Title>
              Situándonos en la tabla subrayada en gris sabemos que no es suficiente con identificar los
              mintérminos, si no que debemos sacar las fórmulas resultantes de las filas con mintérminos.
              Para ello, lo primero que haremos será utilizar la función Y para comparar.
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              Para el 1er caso definiremos cuando A es 0 (celda B5) y el valor de salida de su fila S es
              0 (celda F5), en este caso la función Y y SI se utilizarán así:
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              <Text code>=<b>SI(Y(B5=0;F5=0);"0"</b>;SI(Y(B5=1;F5=0);"0";SI(Y(B5=0;F5=1);"A'";SI(Y(B5=1;F5=1);"A"))))</Text>
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              En el 2do caso definiremos cuando A es 1 y S es 0, en este caso la función Y y SI se utilizarán así:
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              <Text code>=SI(Y(B5=0;F5=0);"0";<b>SI(Y(B5=1;F5=0);"0"</b>;SI(Y(B5=0;F5=1);"A'";SI(Y(B5=1;F5=1);"A"))))</Text>
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              En el 3er caso definiremos cuando A es 0 y S es 1, en este caso la función Y y SI se utilizarán así:
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              <Text code>=SI(Y(B5=0;F5=0);"0";SI(Y(B5=1;F5=0);"0";<b>SI(Y(B5=0;F5=1);"A'";</b>SI(Y(B5=1;F5=1);"A"))))</Text>
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              En el 4to caso definiremos cuando A es 1 y S es 1, en este caso la función Y y SI se utilizarán así:
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              <Text code>=SI(Y(B5=0;F5=0);"0";SI(Y(B5=1;F5=0);"0";SI(Y(B5=0;F5=1);"A'";<b>SI(Y(B5=1;F5=1);"A")</b>)))</Text>
            </Paragraph>
          </Col>

        </Row>
        <Row style={{ margin: '25px 0' }} justify='center'>
          <Col>
            <Image {...{ img: { src: '/media/manual32.png', alt: 'Tabla de Verdad' } }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Paragraph style={{ textAlign: 'justify' }}>
              Como hemos visto, solo se representa la A en los valores donde el valor de salida es 1, es decir,
              donde hay un mintérmino.
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
              Haremos esto mismo con todas las variables (de acuerdo a la localización de la celda) y en todas
              las filas donde hayan mintérminos. De esta manera obtenemos las fórmulas resultantes de filas de
              mintérminos. Estas las agrupamos todas en una fórmula y ya tendríamos nuestra respuesta como se
              muestra a continuación:
            </Paragraph>
          </Col>
        </Row>
        <Row style={{ margin: '25px 0' }} justify='center'>
          <Col>
            <Image {...{ img: { src: '/media/manual33.png', alt: 'Tabla de Verdad' } }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Paragraph style={{ textAlign: 'justify' }}>
            Si se quiere, podemos simplificarla dependiendo de cuál favorezca el uso de esta.
            </Paragraph>
          </Col>
        </Row>
        <Steps {...stepsData} />
      </Col>
    </Row>
  </>
)
