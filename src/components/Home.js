import React from 'react'
import arrowDown from '../images/arrowdown.gif'

const Home = () => {
  return (
    <>
      <div className='h-screen relative' id='home'>

        <h1 className='text-8xl md:text-9xl w-1/2 py-8 px-4 font-caveat '>¡Hola! Soy <span className='text-violet-600 hover:text-violet-400 transition-all duration-500 ease-in-out'>Irene Alcaine</span></h1>
        <p className='text-2xl md:text-4xl ml-4 md:ml-12 md:mt-10 mt-0 underline decoration-violet-600 decoration-4 underline-offset-8'>Frontend developer</p>

        <a href="#contact"><button className=' font-caveat text-3xl hover:bg-white hover:text-violet-900 font-bold border-2 hover:border-violet-900 rounded py-1 px-6 bg-violet-900 text-white border-white ml-4 md:ml-12 mt-10  transition-all duration-500 ease-in-out'>Charlemos</button></a>

        <div className='absolute bottom-10 bg-violet-700 fliter blur-sm right-[50%] w-4 h-4 rounded-full animate-up'></div>
        <div className='absolute bottom-10 bg-violet-700 fliter blur-sm right-[10%] w-8 h-8 rounded-full animate-up animation-delay-2000'></div>
        <div className='absolute bottom-10 bg-violet-700 fliter blur-sm right-[30%] w-6 h-6 rounded-full animate-up animation-delay-4000'></div>
        <div className='absolute bottom-10 bg-violet-700 fliter blur-sm right-[20%] w-4 h-4 rounded-full animate-up animation-delay-2500'></div>
        <div className='absolute bottom-10 bg-violet-700 fliter blur-sm right-[25%] w-8 h-8 rounded-full animate-up animation-delay-500'></div>
        <div className='absolute bottom-10 bg-violet-700 fliter blur-sm right-[45%] w-6 h-6 rounded-full animate-up animation-delay-1500'></div>
        <div className='absolute bottom-10 bg-violet-700 fliter blur-sm right-[05%] w-8 h-8 rounded-full animate-up animation-delay-1000'></div>
        <div className='absolute bottom-10 bg-violet-700 fliter blur-sm right-[15%] w-4 h-4 rounded-full animate-up animation-delay-3000'></div>

        <a href='#portfolio' className='absolute bottom-2 right-3'><img src={arrowDown} alt="" className='w-40' /></a>

      </div>
    </>
  )
}

export default Home
