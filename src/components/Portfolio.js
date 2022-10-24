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
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>

      <div className='md:min-h-screen flex flex-col' id='portfolio'>
        <h2 className='pt-20 text-center text-6xl md:text-8xl text-violet-700 font-caveat mb-8'>Proyectos</h2>
        <div className='md:mt-8 mt-4 w-5/6 mx-auto'>
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

                  <div key={key} className="mx-1">
                    <a href={data.url} target={'_blank'} rel="noreferrer">
                      <img src={data.img} alt="" className='md:h-44 h-32 mx-auto my-2 shadow-lg rounded-md hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-in-out' />
                      <p className='text-center'>{data.title}</p>
                    </a>

                    <div className='flex justify-center mt-2'>
                      {data.icons.map(s => (<img src={s} alt="" className='h-6 px-1' />))}
                    </div>
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
