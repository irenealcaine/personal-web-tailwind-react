import React from 'react'


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { portfolioData } from './data/PortfolioData.js'


const Portfolio = () => {

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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

      <div className='' id='portfolio'>
        <h2 className='pt-20 text-center text-6xl md:text-8xl text-violet-700 font-caveat mb-4'>Proyectos</h2>


        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
        >

          {
            portfolioData.map((data, key) => {
              return (

                <div key={key}>
                  <a href={data.url} target={'_blank'} rel="noreferrer">
                    <img src={data.img} alt="" className='h-48 w-80 mx-auto my-2 shadow-lg rounded-md hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-in-out' />
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
      </div >

    </>
  )
}

export default Portfolio
