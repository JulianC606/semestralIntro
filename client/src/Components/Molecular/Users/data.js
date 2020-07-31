import React from 'react'
import { GoTelescope } from 'react-icons/go'
import { FiDisc } from 'react-icons/fi'
import { FaGuitar, FaFeatherAlt, FaHandsHelping, FaRecycle, FaGamepad, FaChalkboardTeacher } from 'react-icons/fa'
import { GiTheaterCurtains, GiBookshelf, GiFlowerPot, GiSpellBook, GiCookingPot, GiBasketballBall, GiTv } from 'react-icons/gi'
import { BsMusicNoteBeamed, BsCodeSlash } from 'react-icons/bs'
import { RiPencilRuler2Line } from 'react-icons/ri'

export const data = [
  {
    name: 'Daniela',
    lastName: 'Moscoso',
    email: 'daniela.moscoso@utp.ac.pa',
    image: '/media/daniela.jpg',
    hobbys: [
      {
        tooltip: 'Estudiar Astronomía',
        icon: <GoTelescope />
      },
      {
        tooltip: 'Coleccionar Vinilos',
        icon: <FiDisc />
      },
      {
        tooltip: 'Tocar Guitarra',
        icon: <FaGuitar />
      },
      {
        tooltip: 'Ir a conciertos locales',
        icon: <GiTheaterCurtains />
      }
    ]
  },
  {
    name: 'Nathalie',
    lastName: 'Arroyaves',
    email: 'nathalie.arroyaves@utp.ac.pa',
    image: '/media/nathalie.jpg',
    hobbys: [
      {
        tooltip: 'Escuchar Música',
        icon: <BsMusicNoteBeamed />
      },
      {
        tooltip: 'Leer',
        icon: <GiBookshelf />
      },
      {
        tooltip: 'Escribir',
        icon: <FaFeatherAlt />
      },
      {
        tooltip: 'Jardinería',
        icon: <GiFlowerPot />
      }
    ]
  },
  {
    name: 'Felipe',
    lastName: 'Adames',
    email: 'felipe.adames1@utp.ac.pa',
    image: '/media/felipe.jpg',
    hobbys: [
      {
        tooltip: 'Hacer Voluntariado',
        icon: <FaHandsHelping />
      },
      {
        tooltip: 'Reciclar',
        icon: <FaRecycle />
      },
      {
        tooltip: 'Leer',
        icon: <GiBookshelf />
      },
      {
        tooltip: 'Aprender Cosas Nuevas',
        icon: <GiSpellBook />
      },
      {
        tooltip: 'Enseñar',
        icon: <FaChalkboardTeacher />
      }
    ]
  },
  {
    name: 'Julián',
    lastName: 'Cipagauta',
    email: 'julian.cipagauta@utp.ac.pa',
    image: '/media/julian.jpg',
    hobbys: [
      {
        tooltip: 'Tocar Guitarra',
        icon: <FaGuitar />
      },
      {
        tooltip: 'Aprender Cosas Nuevas',
        icon: <GiSpellBook />
      },
      {
        tooltip: 'Jugar Videojuegos',
        icon: <FaGamepad />
      },
      {
        tooltip: 'Programar',
        icon: <BsCodeSlash />
      },
      {
        tooltip: 'Cocinar',
        icon: <GiCookingPot />
      }
    ]
  },
  {
    name: 'Ricky',
    lastName: 'Pan',
    email: 'Ricky.pan@utp.ac.pa',
    image: '/media/ricky.jpg',
    hobbys: [
      {
        tooltip: 'Jugar Videojuegos',
        icon: <FaGamepad />
      },
      {
        tooltip: 'Jugar Baloncesto',
        icon: <GiBasketballBall />
      },
      {
        tooltip: 'DibujarZ',
        icon: <RiPencilRuler2Line />
      },
      {
        tooltip: 'Cocinar',
        icon: <GiCookingPot />
      },
      {
        tooltip: 'Ver Películas y Anime',
        icon: <GiTv />
      }
    ]
  }
]
