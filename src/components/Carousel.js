import React from 'react'
import amigaria from '../images/amigaria.png'
import apv from '../images/apv.png'
import tailwind from '../images/tailwind.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Carousell = () => {

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
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
      >
        <div><img src={amigaria} alt="" className='h-48 w-80 mx-5 my-2 shadow-lg rounded-md hover:scale-110 transition-all duration-500 ease-in-out' /></div>
        <div><img src={apv} alt="" className='h-48 w-80 mx-5 my-2 shadow-lg rounded-md hover:scale-110 transition-all duration-500 ease-in-out' /></div>
        <div><img src={tailwind} alt="" className='h-48 w-80 mx-5 my-2 shadow-lg rounded-md hover:scale-110 transition-all duration-500 ease-in-out' /></div>
      </Carousel>
    </>
  )
}

export default Carousell
