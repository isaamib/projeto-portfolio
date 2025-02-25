import React, { useState, useEffect } from "react";
import "../styles/Projects.css";

const projects = [
  {
    name: "Matre Nutrition",
    description:
      "Esse projeto buscou explorar o desenvolvimento de um e-commerce.",
    technologies: "Javascript, HTML, CSS",
    image: "MatrePROJECT.png",
    link: "https://isaamib.github.io/Matre-Nutrition/",
  },
  {
    name: "Projeto 2",
    description: "Descrição do projeto 2",
    technologies: "Vue, Express",
    image: "/path/to/your/image2.png",
    link: "https://www.projeto2.com",
  },
  {
    name: "Projeto 3",
    description: "Descrição do projeto 3",
    technologies: "Angular, MongoDB",
    image: "/path/to/your/image3.png",
    link: "https://www.projeto3.com",
  },
];

const Projects = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Projetos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.name}</h3>
              <strong>{project.description}</strong>
              <p>
                <strong>Tecnologias:</strong> {project.technologies}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
