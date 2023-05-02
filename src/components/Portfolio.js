import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { portfolioData } from "./data/PortfolioData.js";
import github from "../images/github.png";

const Portfolio = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="md:min-h-screen flex flex-col" id="portfolio">
        <h2 className="pt-20 text-center text-6xl md:text-8xl text-white font-caveat mb-8">
          <span>Proyectos</span>
        </h2>
        <div className="w-11/12 mx-auto flex flex-wrap gap-4 justify-center">
          {portfolioData.map((data, key) => {
            return (
              <div
                key={key}
                className="w-full sm:w-5/12 md:w-3/12 group relative overflow-hidden border-2 border-purple-700 rounded-xl"
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500"></div>
                <img
                  src={data.favicon}
                  alt=""
                  className="w-full group-hover:scale-125 transition-all duration-500 "
                />
                <p className="p-6 absolute -bottom-full left-1 group-hover:bottom-24 transition-all duration-500 z-50">
                  {data.title}
                </p>
                <p className="p-4 absolute -bottom-full left-1 group-hover:bottom-12 transition-all duration-500 z-50">
                  {data.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
