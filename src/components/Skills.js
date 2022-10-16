import CV from '../cv/CV_SEPT.pdf'
import React from 'react'

import { skillsData } from './data/SkillsData'
import { educationData } from './data/educationData'
import { experienceData } from './data/experienceData'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Skills = () => {

  return (
    <>
      <div className='md:min-h-screen flex flex-col ' id='skills'>
        <h2 className='pt-20 text-center text-6xl md:text-8xl text-violet-700 font-caveat mb-4'>Habilidades</h2>

        <div className='my-auto '>

          <div className='flex flex-col md:flex-row w-5/6 mx-auto'>

            <Tabs selectedTabClassName='bg-violet-700 font-bold' className='md:w-1/3 mr-0 md:mr-8'>
              <TabList className='flex flex-wrap justify-center flex-col md:flex-row bg-violet-900 p-2 rounded-lg  mx-auto bg-opacity-60'>
                {skillsData.map((data, key) => {
                  return (
                    <Tab className='rounded-lg py-2 px-4 mx-2 hover:bg-violet-800 hover:cursor-pointer transition-all duration-500 ease-in-out'><h3 className='md:text-xl'>{data.title}</h3></Tab>
                  )
                })}
              </TabList>

              {skillsData.map((data, key) => {
                return (
                  <TabPanel>
                    <div className='flex flex-wrap justify-center border-2 border-violet-900 rounded-xl p-1 mx-auto mt-2'>
                      {data.icons.map(s => (<img src={s} alt="" className='h-16 m-3' />))}
                    </div>
                  </TabPanel>
                )
              })}
            </Tabs>

            <Tabs selectedTabClassName='bg-violet-700 font-bold' className='md:w-2/3'>
              <TabList className='flex justify-center flex-col md:flex-row bg-violet-900 p-2 rounded-lg mt-4 md:mt-0 mx-auto bg-opacity-60'>
                <Tab className='rounded-lg py-2 px-4 mx-2 hover:bg-violet-800 hover:cursor-pointer transition-all duration-500 ease-in-out'><h3 className='md:text-xl'>Formación</h3></Tab>
                <Tab className='rounded-lg py-2 px-4 mx-2 hover:bg-violet-800 hover:cursor-pointer transition-all duration-500 ease-in-out'><h3 className='md:text-xl'>Experiencia</h3></Tab>
              </TabList>

              <TabPanel>
                <div className='border-2 border-violet-900 rounded-xl mx-auto mt-2 px-4 py-2'>
                  {educationData.map((data, key) => {
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
              </TabPanel>
              <TabPanel>
                <div className='border-2 border-violet-900 rounded-xl mx-auto mt-2 px-4 py-2'>
                  {experienceData.map((data, key) => {
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
              </TabPanel>
            </Tabs>
          </div>

          <a href={CV} download="CV_Irene_Alcaine.pdf"><p className='md:text-3xl text-xl mt-8 rounded-xl indent-4 md:w-1/2 w-5/6 mx-auto text-violet-300 text-center border-4 border-violet-900 py-2 hover:cursor-pointer hover:bg-violet-900 hover:text-white transition-all duration-500 ease-in-out'>Descargar CV</p></a>

        </div>
      </div >
    </>
  )
}

export default Skills
