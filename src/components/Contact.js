import React, { useRef } from 'react';
import phone from '../images/whatsapp.png'
import mail from '../images/mail.png'
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const Result = () => {
  return (
    <p className='mt-4 text-center px-2'>Tu mensaje ha sido enviado correctamente, ¡en cuanto pueda te contesto sin falta!</p>
  )
}

const Contact = () => {

  const form = useRef();

  const [result, setResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
    setResult(true)

  };

  return (
    <>
      <div id="contact" className='md:min-h-screen flex flex-col items-center'>
        <h2 className='pt-20 text-center text-6xl md:text-8xl text-violet-700 font-caveat'>Contacto</h2>
        <div className='md:pt-20 flex md:flex-row flex-col justify-center md:w-5/6'>
          <div className='md:w-2/5'>
            <p className='text-center text-xl my-2'>¿En qué puedo ayudarte?</p>
            <div className='flex flex-col px-4 md:px-0 py-4 items-center justify-center'>
              <div className='mx-3 p-1'><img src={mail} alt="" className='h-6 inline-block ' /> irenealcainealvarez@gmail.com</div>
              <div className='mx-3 p-1'><img src={phone} alt="" className='h-6 inline-block' /> +34 629 88 21 29</div>
            </div>
          </div>

          <form
            ref={form}
            action=""
            className='flex justify-center flex-col items-center md:w-3/5'
            onSubmit={sendEmail}
          >
            <div className='flex flex-col w-full'>
              <div className='flex flex-col items-center'>
                <div className='w-full'>
                  <input
                    id="name"
                    name="from_name"
                    type="text"
                    className='bg-transparent outline-none ring-0 placeholder:text-violet-200 placeholder:opacity-50 border-0 border-b-2 border-violet-700 px-4 py-2 w-full focus:bg-violet-900 valid:bg-violet-900 valid:bg-opacity-50 focus:rounded-lg valid:rounded-lg transition-all duration-500 ease-in-out'
                    placeholder='Nombre'
                    required
                  >
                  </input>


                </div>
                <div className='w-full'>
                  <input
                    id="mail"
                    name="from_mail"
                    type="mail"
                    placeholder="Correo"
                    className='bg-transparent outline-none ring-0 placeholder:text-violet-200 placeholder:opacity-50 border-0 border-b-2 border-violet-700 px-4 py-2 w-full focus:bg-violet-900 valid:bg-violet-900  valid:bg-opacity-50 focus:rounded-lg valid:rounded-lg transition-all duration-500 ease-in-out mt-4'
                    required
                  ></input>
                </div>

              </div>
              <textarea
                id="message"
                name='message'
                placeholder="Mensaje"
                className='bg-transparent placeholder:text-violet-200 placeholder:opacity-50 border rounded-lg outline-none border-violet-700 px-4 py-2 my-4 h-40 focus:bg-violet-900 valid:bg-violet-900 valid:bg-opacity-50'
                required
              ></textarea>

              <button
                className='border rounded-lg uppercase font-bold p-1 hover:bg-violet-900 bg-violet-700 transition-all duration-500 ease-in-out px-4 py-2'
                type='submit'
              >Enviar email</button>

            </div>
            {result ? <Result /> : null}
          </form>

        </div>
      </div>
    </>
  )
}

export default Contact
