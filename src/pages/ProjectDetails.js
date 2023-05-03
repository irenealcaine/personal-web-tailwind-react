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
      <div>
        <h1>{project.title}</h1>
        <img src={project.img} alt={project.title} />
        <img src={project.favicon} alt={project.title} />
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
