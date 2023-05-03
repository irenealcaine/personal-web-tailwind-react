import React from "react";
// import github from "../images/github.png";
// import linkedin from "../images/linkedin.png";

import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import UseAnimations from "react-useanimations";

const Footer = () => {
  return (
    <>
      <p className=" pt-16 mb-4 text-center text-3xl md:text-4xl text-violet-600 font-caveat ">
        Gracias por llegar hasta aquí <span className="animate-pulse">❤️</span>
      </p>
      <p className="text-center">
        ¡No dejes de echarle un vistazo a mis redes!
      </p>
      <div className="flex justify-center items-center flex-col md:flex-row py-4 pb-8">
        <a
          href="https://www.github.com/irenealcaine"
          target={"_blank"}
          rel="noreferrer"
          className="flex items-center gap-2 hover:font-bold hover:text-violet-600 transition-all duration-200 mx-3 mb-1 border-b-2 border-violet-900"
        >
          {/* <img src={github} alt="" className="h-6 inline-block px-2" /> */}
          <UseAnimations animation={github} strokeColor="#fff" size={32} />
          github.com/irenealcaine
        </a>
        <a
          href="https://www.linkedin.com/in/irenealcaine/"
          target={"_blank"}
          rel="noreferrer"
          className="flex items-center gap-2 hover:font-bold hover:text-violet-600 transition-all duration-200 mx-3 mb-1 border-b-2 border-violet-900"
        >
          {/* <img src={linkedin} alt="" className="h-6 inline-block px-2" /> */}
          <UseAnimations animation={linkedin} strokeColor="#fff" size={32} />
          linkedin.com/in/irenealcaine/
        </a>
      </div>
    </>
  );
};

export default Footer;
