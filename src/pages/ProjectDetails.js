import { useParams } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { portfolioData } from "../components/data/PortfolioData";
import Button from "../components/Button";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = portfolioData.find((project) => project.id === parseInt(id));

  return (
    <div>
      <Header />
      <Button
        href="/portfolio"
        text="Ver todos"
        design="primary"
        className="text-2xl m-4"
      />
      <div className="w-11/12 mx-auto">
        <h1 className="text-center text-7xl py-4 md:text-9xl md:ml-12 font-caveat text-violet-600 transition-all duration-500">
          {project.title}
        </h1>
        <div className="flex gap-4 items-start flex-col md:flex-row">
          <img
            src={project.img}
            alt={project.title}
            className="w-full md:w-5/12 lg:w-7/12 h-auto"
          />
          <div>
            <div className="flex gap-4 border-2 border-violet-900 rounded-xl relative overflow-hidden">
              <img
                src={project.favicon}
                alt={project.title}
                className="h-full absolute opacity-60 right-0 z-0"
              />
              <h2 className="m-4 z-10 text-2xl md:text-4xl font-caveat">
                {project.description}
              </h2>
            </div>
            <div className="flex p-4 gap-4">
              {project.icons.map((icon) => {
                return <img src={icon} alt="icon" className="h-8" />;
              })}
            </div>
            <p className="mb-4 indent-4 text-justify">
              {project.longDescription}
            </p>
            <div className="mt-12 flex gap-4 justify-start">
              <Button
                href={project.url}
                text="Ir a la web"
                design="primary"
                className="text-2xl"
                target={"_blank"}
                rel="noreferrer"
              />
              <Button
                href={project.github}
                text="Ir al repo"
                design="primary"
                className="text-2xl"
                target={"_blank"}
                rel="noreferrer"
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectDetails;
