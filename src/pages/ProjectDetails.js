import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { portfolioData } from "../components/data/PortfolioData";

const ProjectDetails = ({ id }) => {
  //   const { id } = useParams();
  //   portfolioData = portfolioData.id === id;

  //   const [project, setProject] = useState({});

  //   useEffect(() => {
  //     setProject(portfolioData.id === id);
  //   }, [id]);

  //   useEffect(() => {
  //     const selectedProject = portfolioData.find((project) => project.id === id);
  //     setProject(selectedProject);
  //   }, [id]);

  //   const project = projects.find((p) => p.id === id);

  return (
    <div>
      <Header />

      {/* <p>{project.title}</p> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectDetails;
