import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { portfolioData } from "../components/data/PortfolioData";

const PortfolioDetails = () => {
  return (
    <>
      <Header />
      Volver
      <div className="w-10/12 mx-auto flex flex-wrap gap-4 justify-center">
        {portfolioData.map((data, key) => {
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
      <Contact />
      <Footer />
    </>
  );
};

export default PortfolioDetails;
