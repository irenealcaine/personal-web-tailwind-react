import React from 'react'
import amigaria from '../images/amigaria.png'
import apv from '../images/apv.png'
import guitarla from '../images/GuitarLA.png'
import vue from '../images/vue.png'
import react from '../images/react.png'
import todolistapp from '../images/todolistapp.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Portfolio = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>



      <div className='' id='portfolio'>
        <h2 className='pt-16 text-center text-6xl text-violet-700 font-caveat'>Portfolio</h2>


        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
        >

          <div className='pb-6 mx-2 py-2'>
            <a href="https://www.amigaria.com" target={'_blank'} rel="noreferrer">
              <img src={amigaria} alt="" className=' h-48 w-80 mx-auto my-2 shadow-lg rounded-md hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-in-out' />
              <p className='text-center'>Página accesibe de integración social</p>
            </a>
          </div>

          <div className='pb-6 mx-2 py-2'>
            <a href="https://golden-melba-970593.netlify.app" target={'_blank'} rel="noreferrer">
              <img src={apv} alt="" className='h-48 w-80 mx-auto my-2 shadow-lg rounded-md hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-in-out' />
              <p className='text-center'>Página adminitracion de pacientes de veterinaria</p>
            </a>
          </div>

          <div className='pb-6 mx-2 py-2'>
            <a href="https://flourishing-lolly-cf3644.netlify.app" target={'_blank'} rel="noreferrer">
              <img src={guitarla} alt="" className='h-48 w-80 mx-auto my-2 shadow-lg rounded-md hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-in-out' />
              <p className='text-center'>Tienda de guitarras</p>
            </a>
          </div>

          <div className='pb-6 mx-2 py-2'>
            <a href="https://melodic-pony-2cdb8b.netlify.app" target={'_blank'} rel="noreferrer">
              <img src={todolistapp} alt="" className='h-48 w-80 mx-auto my-2 shadow-lg rounded-md hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-in-out' />
              <p className='text-center'>App de lista de tareas pendientes</p>
            </a>
          </div>

          <div className='pb-6 mx-2 py-2'>
            <img src={react} alt="" className='h-48 w-80 mx-auto my-2 shadow-lg rounded-md hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-in-out' />
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

        </Carousel>
      </div>

    </>
  )
}

export default Portfolio
