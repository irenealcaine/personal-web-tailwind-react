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
        <h2 className='pt-20 text-center text-6xl text-violet-700 font-caveat'>Habilidades</h2>

        <div>
          <div className='flex flex-col items-center md:items-start md:flex-row justify-center'>
            <div className='text-center w-5/6 md:w-1/4 p-2 my-3'>
              <h3 className=' text-xl underline mb-4 decoration-violet-600 decoration-4 underline-offset-8'>Frontend y web development</h3>
              <div className='flex flex-wrap justify-center border-2 border-violet-900 rounded-xl p-1'>
                <img src={html} alt="" className='h-16 m-3' />
                <img src={css} alt="" className='h-16 m-3' />
                <img src={js} alt="" className='h-16 m-3' />
                <img src={tailwind} alt="" className='h-16 m-3' />
                <img src={vue} alt="" className='h-16 m-3' />
                <img src={react} alt="" className='h-16 m-3' />
              </div>
            </div>

            <div className='text-center w-5/6 md:w-1/4 p-2 my-3'>
              <h3 className=' text-xl underline mb-4 decoration-violet-600 decoration-4 underline-offset-8'>Otras habilidades</h3>
              <div className='flex flex-wrap justify-center border-2 border-violet-900 rounded-xl p-1'>
                <img src={vite} alt="" className='h-16 m-3' />
                <img src={git} alt="" className='h-16 m-3' />
                <img src={figma} alt="" className='h-16 m-3' />
                <img src={mongo} alt="" className='h-16 m-3' />
                <img src={npm} alt="" className='h-16 m-3' />
                <img src={nodejs} alt="" className='h-16 m-3' />

              </div>
            </div>

            <div className='text-center w-5/6 md:w-1/4 p-2 my-3'>
              <h3 className=' text-xl underline mb-4 decoration-violet-600 decoration-4 underline-offset-8'>Próximamente</h3>
              <div className='flex flex-wrap justify-center border-2 border-violet-900 rounded-xl p-1'>
                <img src={bootstrap} alt="" className='h-16 m-3' />
                <img src={flutter} alt="" className='h-16 m-3' />
                <img src={wordpress} alt="" className='h-16 m-3' />

              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center md:items-start md:flex-row justify-center'>
          <div className='w-5/6 md:w-2/5 mx-4 mt-4'>
            <h3 className='text-center text-xl underline mb-4 decoration-violet-600 decoration-4 underline-offset-8'>Formación</h3>
            <p className=' border-2 border-violet-900 p-2 rounded-lg mt-2 indent-4 text-justify'>Tengo el grado en ingeniería mecánica, pero descubrí mi pasión al hacer un bootcamp de frontend y desarrollo web.</p>
            <button
              onClick={() => { setFormOpen(!formOpen) }}
              className='border rounded-lg uppercase font-bold py-1 px-4 hover:bg-violet-900 bg-violet-700 transition-all duration-500 ease-in-out w-full mt-2 '
            >{formOpen ? '-' : '+'} Info</button>
            <div className={`${formOpen ? '' : 'hidden'} mt-2`}>
              <ul>

                <li>
                  <h4 className='font-bold text-lg'>➖ Curso de JavaScript +15 proyectos</h4>
                  <p><span className='italic text-violet-300'> Udemy, online</span> | 65 horas lectivas</p>

                  <ul className='indent-4 text-justify mt-2'>
                    <li>
                      <p>JavaScript de 0 a experto</p>
                    </li>

                  </ul>
                </li>

                <li className='mt-4'>
                  <h4 className='font-bold text-lg'>➖ Bootcamp de programación y diseño front-end</h4>
                  <p><span className='italic text-violet-300'>Escuela de organización industrial (EOI), online</span> | Mar 2022 - Jun 2022, 265 horas lectivas</p>
                  <ul className='indent-4 text-justify mt-2'>
                    <li>
                      <p>Contenido: HTML5, CSS3 avanzado, JavaScript, Git, NPM, PostCSS, Vue.js, Vuex, responsive design, frameworks CSS, SEO, optimización, entre otras cosas</p>
                    </li>
                    <li>
                      <p>Proyecto en grupo de desarrollo de una página web completa, <a href="https://www.amigaria.com" target={'_blank'} rel="noreferrer" className='underline'>www.amigaria.com</a>, una web app 100% accesible de integración social</p>
                    </li>
                  </ul>
                </li>

                <li className='mt-4'>
                  <h4 className='font-bold text-lg'>➖ Grado en ingeniería mecánica</h4>
                  <p><span className='italic text-violet-300'> Centro politécnico superior (CPS), Zaragoza</span> | Jun 2011 - Dic 2019</p>

                  <ul className='indent-4 text-justify mt-2'>
                    <li>
                      <p>Especialización en máquinas y motores.</p>
                    </li>
                    <li>
                      <p>Trabajo de fin de grado: Simulación de movimientos peristálticos mediante elementos finitos.</p>
                    </li>
                    <li>
                      <p>Erasmus en Viseu, Portugal de Sep 2015 a Feb 2016</p>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>
          <div className='w-5/6 md:w-2/5 mx-4  mt-4'>
            <h3 className='text-center text-xl underline m-4 md:mt-0 decoration-violet-600 decoration-4 underline-offset-8'>Experiencia</h3>
            <p className='border-2 border-violet-900 p-2 rounded-lg mt-2 indent-4 text-justify'>No he trabajado oficialmente como developer pero he hecho algunos proyectos y he tenido trabajos en los que he desarrollado mis soft skills.</p>

            <button
              onClick={() => { setExpOpen(!expOpen) }}
              className='border rounded-lg uppercase font-bold py-1 px-4 hover:bg-violet-900 bg-violet-700 transition-all duration-500 ease-in-out w-full mt-2 '
            >{expOpen ? '-' : '+'} Info</button>
            <div className={`${expOpen ? '' : 'hidden'} mt-2`}>

              <ul>

                <li>
                  <h4 className='font-bold text-lg'>➖ Developer en <a href="https://www.amigaria.com" target={'_blank'} rel="noreferrer" className='underline'>www.amigaria.com</a></h4>
                  <p><span className='italic text-violet-300'>Online</span> | Mar 2022 - Jun 2022</p>
                  <ul className='indent-4 text-justify mt-2'>
                    <li>
                      <p>Proyecto del Curso de Programación y Diseño Web Front-End de la EOI.</p>
                    </li>
                    <li>
                      <p>Amigaria.com es una web accesible para todo el mundo de ayuda solidaria e inclusión social.</p>
                    </li>
                    <li>
                      <p>Tecnologías utilizadas: proyecto creado con Vue 3, utilizando Firebase y desplegado en Vercel.</p>
                    </li>
                  </ul>
                </li>

                <li className='mt-4'>
                  <h4 className='font-bold text-lg'>➖ Cajera</h4>
                  <p><span className='italic text-violet-300'> Charter, Casinos, Valencia </span>| Oct 2021 - Ene 2022</p>
                </li>

                <li className='mt-4'>
                  <h4 className='font-bold text-lg'>➖ Operadora de apuestas</h4>
                  <p><span className='italic text-violet-300'> RetaBet, Zaragoza </span>| May 2018 - Ene 2021</p>
                </li>

                <li className='mt-4'>
                  <h4 className='font-bold text-lg'>➖ Dependiente en tienda</h4>
                  <p><span className='italic text-violet-300'>El Rincón, Zaragoza </span>| Nov 2016 - Jun 2017</p>
                </li>

              </ul>

            </div>

          </div>
        </div>
      </div >
    </>
  )
}

export default Skills
