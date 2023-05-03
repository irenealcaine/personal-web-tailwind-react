import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { portfolioData } from "../components/data/PortfolioData";

import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import vue from "../images/vue.png";
import mongo from "../images/mongo.svg";
import { useState } from "react";
import nodejs from "../images/nodejs.png";
import sass from "../images/sass.png";
import express from "../images/express.png";
import js from "../images/js.png";
import mui from "../images/mui.png";
import firebase from "../images/firebase.png";

const filterOptions = [
  { text: "Todos", value: "all" },
  { icon: js, value: js },
  { icon: react, value: react },
  { icon: vue, value: vue },
  { icon: tailwind, value: tailwind },
  { icon: mui, value: mui },
  { icon: sass, value: sass },
  { icon: firebase, value: firebase },
  { icon: mongo, value: mongo },
  { icon: nodejs, value: nodejs },
  { icon: express, value: express },
];

const PortfolioDetails = () => {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Header />

      <div className="w-11/12 mx-auto md:w-8/12 pb-8">
        <h1 className="text-center text-6xl md:text-9xl w-7/10 pb-8 px-4 md:ml-12 font-caveat text-violet-600 transition-all duration-500 ease-in-out">
          Proyectos
        </h1>
        <a
          href="/"
          className="text-center border rounded-lg font-bold p-1 hover:bg-violet-900 bg-violet-700 transition-all duration-500 ease-in-out px-4 py-2"
        >
          Atrás
        </a>
      </div>
      <div className="flex flex-wrap w-10/12 mx-auto justify-center items-center gap-2 p-8">
        {filterOptions.map((option) => {
          return option.icon ? (
            <img
              src={option.icon}
              alt="icono"
              className={`${
                filter === option.value ? "bg-violet-700/50" : ""
              } h-9 md:h-16 border border-transparent p-1 md:p-2 hover:border-violet-700 hover:bg-violet-700/40 rounded-lg transition-all duration-500 cursor-pointer`}
              onClick={() => {
                setFilter(option.value);
              }}
            />
          ) : (
            <p
              className={`${
                filter === option.value ? "bg-violet-700/50" : ""
              } md:text-xl py-2 px-4 border border-transparent p-2 hover:border-violet-700 hover:bg-violet-700/40 rounded-lg transition-all duration-500 cursor-pointer`}
              onClick={() => {
                setFilter(option.value);
              }}
            >
              {option.text}
            </p>
          );
        })}
      </div>
      <div className="w-10/12 mx-auto flex flex-wrap gap-4 justify-center">
        {portfolioData
          .filter((tech) =>
            filter === "all" ? tech : tech.icons.includes(filter)
          )
          .map((data, key) => {
            return (
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                key={key}
                className="w-full sm:w-5/12 md:w-3/12 group relative overflow-hidden border-2 border-violet-700 rounded-xl"
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500"></div>
                <img
                  src={data.favicon}
                  alt=""
                  className="w-full group-hover:scale-150 transition-all duration-500 "
                />
                <p className="leading-none font-caveat text-2xl p-6 absolute -top-full left-1 group-hover:top-0 transition-all duration-500 z-50">
                  {data.title}
                </p>
                <div className="leading-tight p-4 text-right absolute -bottom-full right-1 group-hover:bottom-0 transition-all duration-500 z-50">
                  {data.description}
                  <div className="flex justify-end gap-1 mt-1">
                    {data.icons.map((icon) => (
                      <img
                        src={icon}
                        alt="icono"
                        className="h-8 p-1 transition-all duration-500 ease-in-out border border-violet-500 rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default PortfolioDetails;
