import React from 'react'
import arrowDown from '../images/arrowdown.gif'

const Home = () => {
  return (
    <>
      <div className='h-screen relative' id='home'>

        <h1 className='text-8xl md:text-9xl w-1/2 py-8 px-4 font-caveat'>¡Hola! Soy <span className='text-violet-600'>Irene Alcaine</span></h1>
        <p className='text-2xl md:text-4xl pl-4 md:mt-10 mt-2 underline decoration-violet-600 decoration-4 underline-offset-8'>Frontend developer</p>

        <div className='absolute top-10 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-overlay fliter blur-md animate-blob'></div>
        <div className='absolute top-24 right-44 w-72 h-72 bg-sky-300 rounded-full mix-blend-overlay fliter blur-md animate-blob animation-delay-2000'></div>
        <div className='absolute top-56 right-20 w-72 h-72 bg-violet-300 rounded-full mix-blend-overlay fliter blur-md animate-blob animation-delay-4000'></div>

        <a href='#portfolio' className='absolute bottom-2 right-3'><img src={arrowDown} alt="" className='w-40' /></a>

      </div>
    </>
  )
}

export default Home
