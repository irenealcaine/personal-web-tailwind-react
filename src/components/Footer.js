import React from "react";

import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import codepen from "react-useanimations/lib/codepen";
import UseAnimations from "react-useanimations";

const Footer = () => {
  const socialLinks = [
    {
      url: "https://www.github.com/irenealcaine",
      animation: github,
      text: "github.com/irenealcaine",
    },
    {
      url: "https://www.linkedin.com/in/irenealcaine/",
      animation: linkedin,
      text: "linkedin.com/in/irenealcaine/",
    },
    {
      url: "https://codepen.io/ialcaine",
      animation: codepen,
      text: "codepen.io/ialcaine",
    },
  ];

  return (
    <>
      <p className=" pt-16 mb-4 text-center text-3xl md:text-4xl text-violet-600 font-caveat ">
        Gracias por llegar hasta aquí <span className="animate-pulse">❤️</span>
      </p>
      <p className="text-center">
        ¡No dejes de echarle un vistazo a mis redes!
      </p>
      <div className="flex justify-center items-center flex-col md:flex-row py-4 pb-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:font-bold hover:text-violet-600 transition-all duration-200 mx-3 mb-1 border-b-2 border-violet-900"
          >
            <UseAnimations
              animation={link.animation}
              strokeColor="#fff"
              size={32}
            />
            {link.text}
          </a>
        ))}
      </div>
    </>
  );
};

export default Footer;
