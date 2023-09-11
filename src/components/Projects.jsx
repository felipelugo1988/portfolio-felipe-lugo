// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectItem from "./ProjectItem";
import peliculas from "../assets/captura-de-pantalla-proyectos/app-peliculas.png";
import eCommerce from "../assets/captura-de-pantalla-proyectos/ecommerce.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id
        obcaecati nisi dicta animi, tempore facere nesciunt repellendus libero!
        Atque illum consequatur cum provident doloremque quaerat? Magnam minus
        amet fugit!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={peliculas} title='Peliculas App'/>
        <ProjectItem img={eCommerce} title='Ecommerce App'/>
      </div>
    </div>
  );
};

export default Projects;
