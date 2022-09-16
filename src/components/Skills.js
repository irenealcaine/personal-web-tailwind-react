import CV from '../cv/CV_SEPT.pdf'
import React from 'react'
import { useState } from 'react'

import { skillsData } from './data/SkillsData'
import { educationData } from './data/educationData'
import { experienceData } from './data/experienceData'


const Skills = () => {

  const [formOpen, setFormOpen] = useState(false)
  const [expOpen, setExpOpen] = useState(false)

  return (
    <>
      <div className='' id='skills'>
        <h2 className='pt-20 text-center text-6xl md:text-8xl text-violet-700 font-caveat'>Habilidades</h2>

        <div className='flex flex-col md:flex-row justify-center items-center md:items-start'>

          {skillsData.map((data, key) => {
            return (
              <div key={key} className='w-5/6 md:w-1/4'>
                <div className='text-center p-2 my-3'>
                  <h3 className=' text-xl underline mb-4 decoration-violet-600 decoration-4 underline-offset-8'>{data.title}</h3>
                  <div className='flex flex-wrap justify-center border-2 border-violet-900 rounded-xl p-1'>
                    {data.icons.map(s => (<img src={s} alt="" className='h-16 m-3' />))}
                  </div>
                </div>
              </div>
            )
          })}

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


              {
                educationData.map((data, key) => {
                  return (

                    <ul key={key}>
                      <li className='mb-4'>
                        <h4 className='font-bold text-lg'><span className='font-bold text-3xl text-violet-600'>-</span> {data.title}</h4>
                        <p><span className='italic text-violet-300'>{data.ubication}</span> | {data.duration}</p>

                        <ul className='indent-4 text-justify mt-2'>
                          <li>
                            {data.content.map(s => (<p>{s}</p>))}
                          </li>

                        </ul>
                      </li>
                    </ul>
                  )
                })
              }

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

              {
                experienceData.map((data, key) => {
                  return (

                    <ul key={key}>
                      <li className='mb-4'>
                        <h4 className='font-bold text-lg'><span className='font-bold text-3xl text-violet-600'>-</span> {data.title}</h4>
                        <p><span className='italic text-violet-300'>{data.ubication}</span> | {data.duration}</p>

                        <ul className='indent-4 text-justify mt-2'>
                          <li>
                            {data.content.map(s => (<p>{s}</p>))}
                          </li>

                        </ul>
                      </li>
                    </ul>
                  )
                })
              }

            </div>

          </div>
        </div>

        <a href={CV} download="CV_Irene_Alcaine.pdf"><p className='md:text-xl mt-8 rounded-xl indent-4 w-5/6 md:w-4/5 mx-auto text-violet-300 text-center border-4 border-violet-900 py-2 hover:cursor-pointer hover:bg-violet-900 hover:text-white transition-all duration-500 ease-in-out'>Descargar CV</p></a>

      </div >
    </>
  )
}

export default Skills
