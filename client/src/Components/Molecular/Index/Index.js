import React from 'react'
import { Typography, Tree } from 'antd'
import { Link } from 'react-router-dom'
import '../../../Pages/styles.css'

const { Title } = Typography

const content = [
  {
    title: 'Introducción',
    link: '/contenido/intro',
    key: '1'
  },
  {
    title: 'Herramienta',
    link: '/contenido/herramienta/concepto',
    key: '2',
    children: [
      {
        title: 'Concepto',
        link: '/contenido/herramienta/concepto',
        key: '2-1'
      },
      {
        title: 'Ventajas y Desventajas',
        link: '/contenido/herramienta/prosandcons',
        key: '2-2'
      },
      {
        title: 'Beneficios',
        link: '/contenido/herramienta/beneficios',
        key: '2-3'
      }
    ]
  },
  {
    title: 'Manual para Confección de Tablas de Verdad en Excel',
    link: '/contenido/manual',
    key: '3',
    children: [
      {
        title: '1: Cómo construir la tabla de la verdad',
        link: '/contenido/manual/buildtruthtable',
        key: '3-1'
      },
      {
        title: '2: Cómo identificar Mintérminos con la función SI',
        link: '/contenido/manual/identifyminterms',
        key: '3-2'
      },
      {
        title: '3: Mintérminos Resultantes con función SI y AND',
        link: '/contenido/manual/resultingminterms',
        key: '3-3'
      }
    ]
  },
  {
    title: 'Conclusión',
    link: '/contenido/conclusion',
    key: '4'
  }
]

const TreeItem = ({ node }) => {
  if (node.key !== '2') {
    return (
      <Link to={node.link}>
        <Title level={4}>
          {node.title}
        </Title>
      </Link>
    )
  } else {
    return (
      <Title level={4}>
        {node.title}
      </Title>
    )
  }
}

export default () => (
  <div>
    <Title>Contenido</Title>
    <Tree
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      treeData={content}
      titleRender={(node) => <TreeItem node={node} />}
    />
  </div>
)
