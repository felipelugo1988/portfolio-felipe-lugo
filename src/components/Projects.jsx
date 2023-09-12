// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectItem2 from "./ProjectItem2";
import peliculas from "../assets/captura-de-pantalla-proyectos/app-peliculas.png";
import eCommerce from "../assets/captura-de-pantalla-proyectos/ecommerce.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Estos son los proyectos que he realizado recientemente, una
        aplicación de peliculas en linea, y posteriormente una aplicación de
        comercio en linea.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={peliculas} title="Peliculas App" />
        <ProjectItem2 img={eCommerce} title="Ecommerce App"  />
      </div>
    </div>
  );
};

export default Projects;
