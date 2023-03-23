import React from "react";
import { useState } from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import openMenu from "../images/menu.png";
import closeMenu from "../images/close.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-gradient-to-l from-violet-600 via-violet-900 to-violet-900 shadow-lg py-4 px-7 md:flex md:justify-between sticky top-0 z-50 font-caveat">
        <a href="#home" className="text-3xl ">
          Irene
        </a>
        <img
          className="absolute top-4 right-7 md:hidden w-8 h-8"
          src={`${open ? closeMenu : openMenu}`}
          alt=""
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div
          className={`${
            open ? "" : "hidden"
          } md:flex md:w-2/3 md:justify-end text-xl`}
        >
          <div
            className={`flex flex-col md:flex-row md:items-center pr-7 md:mt-0 mt-2`}
          >
            <a href="#portfolio" className="px-2 hover:underline">
              Proyectos
            </a>
            <a href="#skills" className="px-2 hover:underline">
              Habilidades
            </a>
          </div>
          <div className="md:flex md:items-center">
            <div className="flex items-center mx-2 md:mt-0 mt-2">
              <a
                href="https://www.github.com/irenealcaine"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src={github}
                  alt=""
                  className="h-8 w-8 hover:filter hover:invert  transition-all duration-500 ease-in-out"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/irenealcaine/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  alt=""
                  className="h-8 w-8 mx-2 hover:filter hover:invert transition-all duration-500 ease-in-out"
                />
              </a>
            </div>
            <a href="#contact">
              <button className="bg-white text-violet-900 font-bold border-2 border-violet-900 rounded py-1 px-6 mx-2 hover:bg-violet-900 hover:text-white hover:border-white md:mt-0 mt-4  transition-all duration-500 ease-in-out">
                Charlemos
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
