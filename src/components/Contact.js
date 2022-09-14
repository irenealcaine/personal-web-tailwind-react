import React, { useRef } from 'react';
// import phone from '../images/phone.png'
// import mail from '../images/mail.png'
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

    emailjs.sendForm('service_2c4orgb', 'template_35mhdvd', form.current, 'eywWsECZB8iEJ2dhj')
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
      <div id="contact">
        <h2 className='pt-20 text-center text-6xl text-violet-700 font-caveat'>Contacto</h2>
        {/* <div className='flex flex-col items-center md:items-start md:flex-row justify-center'>
          <div className='mx-3 p-1'><img src={mail} alt="" className='h-6 inline-block' /> irenealcainealvarez@gmail.com</div>
          <div className='mx-3 p-1'><img src={phone} alt="" className='h-6 inline-block' /> +34 629 88 21 29</div>
        </div> */}
        <p className='text-center'>¿En qué puedo ayudarte?</p>

        <form
          ref={form}
          action=""
          className='flex justify-center flex-col items-center'
          onSubmit={sendEmail}
        >
          <div className='flex flex-col w-5/6 md:w-4/6'>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='w-full md:w-1/2 px-2'>
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  placeholder="Nombre"
                  className='bg-transparent focus:outline-none focus:ring-0 placeholder:text-violet-300 placeholder:opacity-50 border-0 border-b-2 border-violet-700 p-2 px-2 block w-full'
                  required
                ></input>
              </div>
              <div className='w-full md:w-1/2 px-2'>
                <input
                  id="mail"
                  name="from_mail"
                  type="mail"
                  placeholder="Correo"
                  className='bg-transparent focus:outline-none focus:ring-0 placeholder:text-violet-300 placeholder:opacity-50 border-0 border-b-2 border-violet-700 p-2 px-2 block w-full'
                  required
                ></input>
              </div>

            </div>
            <input
              id="message"
              name='message'
              type="textarea"
              placeholder="Mensaje"
              className='bg-transparent placeholder:text-violet-300 placeholder:opacity-50 border rounded-lg focus:outline-none focus:ring-0 border-violet-700 px-4 py-2 my-4 h-20 '
              required
            ></input>

            <button
              className='border rounded-lg uppercase font-bold p-1 hover:bg-violet-900 bg-violet-700 transition-all duration-500 ease-in-out px-4 py-2'
              type='submit'
            >Enviar email</button>

          </div>
          {result ? <Result /> : null}
        </form>
      </div>
    </>
  )
}

export default Contact
