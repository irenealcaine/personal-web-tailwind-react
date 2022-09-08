import React from 'react'
import { useState } from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import tailwind from '../images/tailwind.png'
import vue from '../images/vue.png'
import react from '../images/react.png'

import vite from '../images/vite.png'
import git from '../images/git.png'
import figma from '../images/figma.png'
import mongo from '../images/mongo.svg'
import npm from '../images/npm.svg'
import nodejs from '../images/nodejs.png'


import bootstrap from '../images/bootstrap.png'
import flutter from '../images/flutter.svg'
import wordpress from '../images/wordpress.png'


const Skills = () => {

  const [formOpen, setFormOpen] = useState(false)
  const [expOpen, setExpOpen] = useState(false)

  return (
    <>
      <div className='' id='skills'>
        <h2 className='pt-16 text-center text-6xl text-violet-700 font-caveat'>Skills</h2>

        <div>
          <div className='flex flex-col items-center md:items-start md:flex-row justify-center'>
            <div className='text-center w-2/3 md:w-1/4 p-2 m-3'>
              <span className=''>Frontend y web development</span>
              <div className='flex flex-wrap justify-center'>
                <img src={html} alt="" className='h-14 m-2' />
                <img src={css} alt="" className='h-14 m-2' />
                <img src={js} alt="" className='h-14 m-2' />
                <img src={tailwind} alt="" className='h-14 m-2' />
                <img src={vue} alt="" className='h-14 m-2' />
                <img src={react} alt="" className='h-14 m-2' />
              </div>
            </div>

            <div className='text-center w-2/3 md:w-1/4 p-2 m-3'>
              <span className=''>Other skills</span>
              <div className='flex flex-wrap justify-center'>
                <img src={vite} alt="" className='h-14 m-2' />
                <img src={git} alt="" className='h-14 m-2' />
                <img src={figma} alt="" className='h-14 m-2' />
                <img src={mongo} alt="" className='h-14 m-2' />
                <img src={npm} alt="" className='h-14 m-2' />
                <img src={nodejs} alt="" className='h-14 m-2' />

              </div>
            </div>

            <div className='text-center w-2/3 md:w-1/4 p-2 m-3'>
              <span className=''>Working on</span>
              <div className='flex flex-wrap justify-center'>
                <img src={bootstrap} alt="" className='h-14 m-2' />
                <img src={flutter} alt="" className='h-14 m-2' />
                <img src={wordpress} alt="" className='h-14 m-2' />

              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center md:items-start md:flex-row justify-center'>
          <div className='w-2/3 md:w-1/3 mx-4'>
            <h3 className='text-center'>Formación</h3>
            <p className=' border-2 border-violet-900 py-2 px-4 rounded-lg'>Estudié ingeniería y luego desarrollo web</p>
            <button
              onClick={() => { setFormOpen(!formOpen) }}
              className='border rounded-lg uppercase font-bold py-1 px-4 hover:bg-violet-900 bg-violet-700 transition-all duration-500 ease-in-out'
            >{formOpen ? '-' : '+'} Info</button>
            <div className={`${formOpen ? '' : 'hidden'}`}>
              <h4>Programación y diseño front-end</h4>
              <p><i><strong>Escuela de organización industrial (EOI),</strong> online</i></p>
              <p> Mar 2022 - Jun 2022, 265 horas lectivas</p>
              <ul>
                <li>Front-end (HTML5/CSS3 avanzado, Flexbox, Grid CSS, PostCSS, etc...).</li>
                <li>DevOps/Automatización (Terminal, Git, Linters, NPM, Parcel, ...).</li>
                <li>Programación (Buenas prácticas y perfeccionamiento de código).</li>
                <li>Javascript (Fundamentos de programación, ECMAScript, ES Modules...).</li>
                <li>Framework SPA (Vue.js, Componentes, Tooling, Vuex, etc...).</li>
                <li>Especialización Diseño (Responsive Design, Metodologías CSS, Frameworks CSS, WebComponents, etc...).
                </li>
                <li>Especialización Frontend (Animaciones, librerías gráficas, SVG, APIs nativas de Javascript, etc...).
                </li>
                <li>Especialización de terceros (Servicios externos, Netlify, Google Analytics, pasarelas de pago con
                  Stripe, etc...)</li>
                <li>Optimización y monitorización (Posicionamiento SEO, Optimización web, etc...)</li>
              </ul>

            </div>
          </div>
          <div className='w-2/3 md:w-1/3 mx-4'>
            <h3 className='text-center'>Experiencia</h3>
            <p className='border-2 border-violet-900 py-2 px-4 rounded-lg'>No tengo experiencia técnica pero si de soft skills</p>

            <button
              onClick={() => { setExpOpen(!expOpen) }}
              className='border rounded-lg uppercase font-bold py-1 px-4 hover:bg-violet-900 bg-violet-700 transition-all duration-500 ease-in-out'
            >{expOpen ? '-' : '+'} Info</button>
            <div className={`${expOpen ? '' : 'hidden'} `}>
              <h4>Developer en amigaria.com</h4>
              <p>Mar 2022 - Jun 2022</p>
              <ul>
                <li>Proyecto del Curso de Programación y Diseño Web Front-End de la EOI. </li>
                <li>Amigaria.com es una web accesible para todo el mundo de ayuda solidaria e inclusión social</li>
                <li>Tecnologías utilizadas: proyecto creado con Vue 3, utilizando Firebase y desplegado en Vercel.</li>
              </ul>
            </div>

          </div>
        </div>
      </div >
    </>
  )
}

export default Skills
