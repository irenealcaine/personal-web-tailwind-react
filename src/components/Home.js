import arrowDown from "../images/arrowdown.gif";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Button from "./Button";

const Home = () => {
  return (
    <>
      <div className="h-screen relative" id="home">
        <p className="text-5xl md:text-6xl w-7/10 pt-8 px-4 font-caveat ">
          ¡Hola! Me llamo{" "}
        </p>
        <h1 className="text-8xl md:text-9xl w-7/10 pb-8 px-4 md:ml-12 font-caveat text-violet-600 transition-all duration-500 ease-in-out">
          Irene Alcaine
        </h1>

        <p className="text-5xl md:text-6xl w-7/10 ml-4  font-caveat ">
          Y soy <span className="text-2xl relative -top-4">*</span>
        </p>
        <p className="absolute bottom-2 left-3 text-sm text-gray-700 font-caveat">
          (*) Quiero ser
        </p>
        <h2 className="text-5xl md:text-7xl w-7/10 font-caveat ml-4 md:ml-12 mt-0">
          <span>Frontend developer</span>
        </h2>

        <a href="#contact">
          <button className=" font-caveat text-3xl hover:bg-white hover:text-violet-900 font-bold border-2 hover:border-violet-900 rounded py-1 px-6 bg-violet-900 text-white border-white ml-4 md:ml-12 mt-10  transition-all duration-500 ease-in-out">
            Charlemos
          </button>
        </a>

        <div className="absolute -bottom-10 bg-violet-700 opacity-40 right-[50%] w-8 h-8 rounded-full animate-up"></div>
        <div className="absolute -bottom-10 bg-pink-700 opacity-20 right-[32.5%] w-12 h-12 rounded-full animate-up animation-delay-250"></div>
        <div className="absolute -bottom-10 bg-violet-700 opacity-50 right-[25%] w-6 h-6 rounded-full animate-up animation-delay-500"></div>
        <div className="absolute -bottom-10 bg-pink-700 opacity-60 right-[17.5%] w-4 h-4 rounded-full animate-up animation-delay-750"></div>
        <div className="absolute -bottom-10 bg-violet-700 opacity-20 right-[05%] w-12 h-12 rounded-full animate-up animation-delay-1000"></div>
        <div className="absolute -bottom-10 bg-pink-700 opacity-40 right-[22.5%] w-8 h-8 rounded-full animate-up animation-delay-1250"></div>
        <div className="absolute -bottom-10 bg-violet-700 opacity-50 right-[45%] w-6 h-6 rounded-full animate-up animation-delay-1500"></div>
        <div className="absolute -bottom-10 bg-pink-700 opacity-20 right-[12.5%] w-12 h-12 rounded-full animate-up animation-delay-1750"></div>
        <div className="absolute -bottom-10 bg-violet-700 opacity-60 right-[10%] w-4 h-4 rounded-full animate-up animation-delay-2000"></div>
        <div className="absolute -bottom-10 bg-pink-700 opacity-50 right-[47.5%] w-6 h-6 rounded-full animate-up animation-delay-2250"></div>
        <div className="absolute -bottom-10 bg-violet-700 opacity-40 right-[20%] w-8 h-8 rounded-full animate-up animation-delay-2500"></div>
        <div className="absolute -bottom-10 bg-pink-700 opacity-20 right-[42.5%] w-12 h-12 rounded-full animate-up animation-delay-2750"></div>
        <div className="absolute -bottom-10 bg-violet-700 opacity-30 right-[15%] w-10 h-10 rounded-full animate-up animation-delay-3000"></div>
        <div className="absolute -bottom-10 bg-pink-700 opacity-60 right-[07.5%] w-4 h-4 rounded-full animate-up animation-delay-3250"></div>
        <div className="absolute -bottom-10 bg-violet-700 opacity-30 right-[35%] w-10 h-10 rounded-full animate-up animation-delay-3500"></div>
        <div className="absolute -bottom-10 bg-pink-700 opacity-50 right-[27.5%] w-6 h-6 rounded-full animate-up animation-delay-3750"></div>
        <div className="absolute -bottom-10 bg-violet-700 opacity-30 right-[30%] w-10 h-10 rounded-full animate-up animation-delay-4000"></div>

        <a href="#portfolio" className="absolute bottom-12 right-3">
          <img src={arrowDown} alt="" className="w-40" />
        </a>
      </div>
      <div>
        <Button
          href="https://google.es"
          text="hola"
          style="primary"
          className=""
        />
        <Header />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
