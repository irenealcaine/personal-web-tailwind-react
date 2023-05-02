import React from "react";
import "react-multi-carousel/lib/styles.css";
import { portfolioData } from "./data/PortfolioData.js";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <div className="md:min-h-screen flex flex-col" id="portfolio">
        <h2 className="pt-20 text-center text-6xl md:text-8xl text-white font-caveat mb-8">
          <span>Proyectos</span>
        </h2>
        <div className="w-10/12 mx-auto flex flex-wrap gap-4 justify-center">
          <div className=" p-8 w-full sm:w-5/12 md:w-3/12">
            <Link
              to="/portfolio"
              className="text-center border rounded-lg font-bold p-1 hover:bg-violet-900 bg-violet-700 transition-all duration-500 ease-in-out px-4 py-2"
            >
              Ver todos
            </Link>
          </div>
          {portfolioData.slice(0, 5).map((data, key) => {
            return (
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                key={key}
                className="w-full sm:w-5/12 md:w-3/12 group relative overflow-hidden border-2 border-purple-700 rounded-xl"
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500"></div>
                <img
                  src={data.favicon}
                  alt=""
                  className="w-full group-hover:scale-150 transition-all duration-500 "
                />
                <p className="font-caveat text-2xl p-6 absolute -top-full left-1 group-hover:top-0 transition-all duration-500 z-50">
                  {data.title}
                </p>
                <div className="p-4 text-right absolute -bottom-full right-1 group-hover:bottom-0 transition-all duration-500 z-50">
                  {data.description}
                  <div className="flex justify-end gap-1">
                    {data.icons.map((icon) => (
                      <img
                        src={icon}
                        alt="icono"
                        className="h-8 md:h-12 md:p-2 p-1 transition-all duration-500 ease-in-out border border-purple-500 rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
