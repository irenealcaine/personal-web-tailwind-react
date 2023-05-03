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
        className="text-2xl mx-auto"
      />
      <div className="w-10/12 mx-auto">

        <h1 className="text-center text-7xl md:text-9xl w-7/10 pb-4 px-4 md:ml-12 font-caveat text-violet-600 transition-all duration-500 ease-in-out">{project.title}</h1>
        <img src={project.favicon} alt={project.title} className="h-10" />

        <img src={project.img} alt={project.title} />

        <p>Tech usadas:

          {project.icons.map((icon) => {
            return (
              <img src={icon} alt="icon" className="h-8" />
            )
          })}
        </p>
        <p>
          {project.description}
        </p>
        <Button
          href={project.url}
          text="Ir a la web"
          design="primary"
          className="text-2xl mx-auto"
          target={"_blank"}
          rel="noreferrer"
        />
        <Button
          href={project.github}
          text="Ir al repo"
          design="primary"
          className="text-2xl mx-auto"
          target={"_blank"}
          rel="noreferrer"
        />
      </div>
      <Contact />
      <Footer />
    </div >
  );
};

export default ProjectDetails;
