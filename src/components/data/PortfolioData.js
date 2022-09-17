import amigaria from '../../images/amigaria.png'
import apv from '../../images/apv.png'
import guitarla from '../../images/GuitarLA.png'
import todolistapp from '../../images/todolistapp.png'

import react from '../../images/react.png'
import tailwind from '../../images/tailwind.png'
import vue from '../../images/vue.png'
import mongo from '../../images/mongo.svg'
import nodejs from '../../images/nodejs.png'
import bootstrap from '../../images/bootstrap.png'
import sass from '../../images/sass.png'
import express from '../../images/express.png'

export const portfolioData = [

  {
    url: "https://www.amigaria.com",
    img: amigaria,
    title: "Web 100% accesible de integración social",
    icons: [
      vue,
      sass
    ]
  }, {
    url: "https://golden-melba-970593.netlify.app",
    img: apv,
    title: "Administración de pacientes de veterinaria",
    icons: [
      mongo,
      express,
      react,
      nodejs
    ]
  }, {
    url: "https://flourishing-lolly-cf3644.netlify.app",
    img: guitarla,
    title: "Ecommerce de guitarras",
    icons: [
      bootstrap
    ]
  }, {
    url: "https://melodic-pony-2cdb8b.netlify.app",
    img: todolistapp,
    title: "App de lista de tareas pendientes",
    icons: [
      vue,
      tailwind
    ]
  },
]
