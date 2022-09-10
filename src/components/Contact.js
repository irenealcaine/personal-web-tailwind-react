import React from 'react'

import phone from '../images/phone.png'
import mail from '../images/mail.png'

const Contact = () => {
  return (
    <>
      <div className=''>
        <h2 className='pt-16 text-center text-6xl text-violet-700 font-caveat'>Contacto</h2>
        <div className='flex flex-col items-center md:items-start md:flex-row justify-center'>
          <div className='mx-3 p-1'><img src={mail} alt="" className='h-6 inline-block' /> irenealcainealvarez@gmail.com</div>
          <div className='mx-3 p-1'><img src={phone} alt="" className='h-6 inline-block' /> +34 629 88 21 29</div>
        </div>
        <form action="" className='flex justify-center flex-col items-center'>
          <div className='flex flex-col w-4/6'>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='w-full md:w-1/2 px-2'>
                <input
                  class=""
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  className='bg-transparent focus:outline-none focus:ring-0 placeholder:text-violet-300 placeholder:opacity-50 border-0 border-b-2 border-violet-700 p-2 px-2 block w-full'
                ></input>
              </div>
              <div className='w-full md:w-1/2 px-2'>
                <input
                  class=""
                  id="mail"
                  name="mail"
                  type="mail"
                  placeholder="Correo"
                  className='bg-transparent focus:outline-none focus:ring-0 placeholder:text-violet-300 placeholder:opacity-50 border-0 border-b-2 border-violet-700 p-2 px-2 block w-full'
                ></input>
              </div>



            </div>
            <input class="" id="message" type="textarea" placeholder="Mensaje" className='bg-transparent placeholder:text-violet-300 placeholder:opacity-50 border rounded-lg focus:outline-none focus:ring-0 border-violet-700 px-4 py-2 my-4 h-20 '></input>


          </div>
          <button
            className='border rounded-lg uppercase font-bold p-1 hover:bg-violet-900 bg-violet-700 transition-all duration-500 ease-in-out px-4 py-2'

          >submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact
