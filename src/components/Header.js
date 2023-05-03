import React from "react";
import { useState } from "react";
import openMenu from "../images/menu.png";
import closeMenu from "../images/close.png";
import Button from "./Button";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import UseAnimations from "react-useanimations";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`bg-[linear-gradient(90deg,_#4c1d95_70%,_#be185d_90%)] shadow-lg py-4 px-7 md:flex md:justify-between sticky top-0 z-50 font-caveat transition-all duration-500 ease-in-out`}
      >
        <a href="/#home" className="text-3xl ">
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
            <a
              href="/#portfolio"
              className="px-2 hover:underline"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Proyectos
            </a>
            <a
              href="/#skills"
              className="px-2 hover:underline"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Habilidades
            </a>
          </div>
          <div className="md:flex md:items-center">
            <div className="flex items-center mx-1 md:mx-4 gap-1 md:mt-0 mt-2">
              <a
                href="https://www.github.com/irenealcaine"
                target={"_blank"}
                rel="noreferrer"
                className="text-3xl"
              >
                <UseAnimations
                  animation={github}
                  strokeColor="#fff"
                  size={32}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/irenealcaine/"
                target={"_blank"}
                rel="noreferrer"
              >
                <UseAnimations
                  animation={linkedin}
                  strokeColor="#fff"
                  size={32}
                />
              </a>
            </div>

            <Button
              href="#contact"
              text="Charlemos"
              className="mt-2 md:mt-0 shadow"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
