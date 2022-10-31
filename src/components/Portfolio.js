import React from 'react'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { portfolioData } from './data/PortfolioData.js'


const Portfolio = () => {

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

  return (
    <>

      <div className='md:min-h-screen flex flex-col' id='portfolio'>
        <h2 className='pt-20 text-center text-6xl md:text-8xl text-violet-700 font-caveat mb-8'>Proyectos</h2>
        <div className='md:mt-8 mt-4 w-11/12 mx-auto'>
          <Carousel
            swipeable={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2500}
            customTransition="all 1.5s"
            transitionDuration={1500}
          >

            {
              portfolioData.map((data, key) => {
                return (

                  <div key={key} className="p-4 group">
                    <a href={data.url} target={'_blank'} rel="noreferrer">
                      <p className='text-start md:text-xl group-hover:underline decoration-violet-600'>{data.title}</p>
                      <img src={data.favicon} alt='img' className='w-12 md:w-16 absolute rounded bg-violet-700/40 p-1 border-violet-700 border-2 z-50 group-hover:scale-75 transition-all duration-500 ease-in-out' />
                      <img src={data.img} alt="" className=' mx-auto my-2 shadow-lg rounded-md group-hover:scale-105 cursor-pointer transition-all duration-500 ease-in-out' />

                      <div className='flex justify-center mt-2'>
                        {data.icons.map(s => (<img src={s} alt="" className='h-6 md:h-10 md:px-2 px-1 group-hover:scale-75 transition-all duration-500 ease-in-out' />))}
                      </div>
                    </a>
                  </div>
                )
              })
            }

          </Carousel>
        </div>
      </div >

    </>
  )
}

export default Portfolio
