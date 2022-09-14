import React from 'react'
import { useState } from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import codepen from '../images/codepen.jpg'
import openMenu from '../images/menu.png'
import closeMenu from '../images/close.png'


const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='bg-violet-900 shadow-lg py-4 px-7 md:flex md:justify-between sticky top-0 z-50 font-caveat'>
        <a href='#home' className='text-3xl '>Irene</a>
        <img
          className='absolute top-2 right-2 md:hidden p-2 w-10 h-10'
          src={`${open ? closeMenu : openMenu}`}
          alt=""
          onClick={() => { setOpen(!open) }}
        />
        <div className={`${open ? '' : 'hidden'} md:flex md:w-1/2 md:justify-end text-xl`}>
          <div className={`flex flex-col md:flex-row md:items-center pr-7`}>

            <a href="#portfolio" className='px-2'>Portfolio </a>
            <a href="#skills" className='px-2'>Skills</a>
          </div>
          <div className='md:flex md:items-center'>
            <div className='flex items-center'>
              <a href="https://www.github.com/irenealcaine" target={'_blank'} rel="noreferrer"><img src={github} alt="" className='h-8 mx-1' /></a>
              <a href="https://www.linkedin.com/in/irenealcaine/" target={'_blank'} rel="noreferrer"><img src={linkedin} alt="" className='h-8 mx-1' /></a>
              <a href="https://www.codepen.io/ialcaine" target={'_blank'} rel="noreferrer"><img src={codepen} alt="" className='h-8 mx-1' /></a>
            </div>
            <button className='bg-white text-violet-900 font-bold border-2 border-violet-900 rounded py-1 px-6 mx-2 hover:bg-violet-900 hover:text-white hover:border-white'>Contacto</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
