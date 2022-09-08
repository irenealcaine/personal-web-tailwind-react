import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import codepen from '../images/codepen.jpg'


const Footer = () => {
  return (
    <>
      <div className=' pt-16 text-center text-4xl text-violet-600 font-caveat'>Gracias por llegar hasta aquí ❤️</div>
      <p className='text-center'>¡No dejes de echarle un vistazo a mis redes!</p>
      <div className='flex justify-center items-center flex-col md:flex-row py-4'>
        <a href="https://www.github.com/irenealcaine" target={'_blank'} rel="noreferrer" className='hover:font-bold hover:text-violet-600 transition-all duration-200 mx-3 p-1 border-b-2 border-violet-900'>
          <img src={github} alt="" className='h-6 inline-block px-2' />github.com/irenealcaine</a>
        <a href="https://www.linkedin.com/in/irenealcaine/" target={'_blank'} rel="noreferrer" className='hover:font-bold hover:text-violet-600 transition-all duration-200 mx-3 p-1 border-b-2 border-violet-900'>
          <img src={linkedin} alt="" className='h-6 inline-block px-2' />linkedin.com/in/irenealcaine/</a>
        <a href="https://www.codepen.io/ialcaine" target={'_blank'} rel="noreferrer" className='hover:font-bold hover:text-violet-600 transition-all duration-200 mx-3 p-1 border-b-2 border-violet-900'>
          <img src={codepen} alt="" className='h-6 inline-block px-2' />codepen.io/ialcaine</a>
      </div>
    </>
  )
}

export default Footer
