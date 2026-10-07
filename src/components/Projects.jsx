
import ProjectCard from "./ProjectCard";

import encriptador from "../assets/encriptador.png";
import rickmorty from "../assets/rickandmorty.png";
import barberia from "../assets/barberia.png";

export default function Projects() {
  const projects = [
    {
      title: "EcoBite",
      description:
        "Aplicación web de delivery sustentable desarrollada con React, orientada a una experiencia de usuario moderna, responsive y accesible.",
      github:
        "https://github.com/crysty72/ecobite-frontend",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],
      status: "En desarrollo",
    },

    {
      title: "Encriptador",
      description:
        "Aplicación web para encriptar y desencriptar mensajes mediante una interfaz simple, funcional y responsive.",
      image: encriptador,
      github:
        "https://github.com/crysty72/encriptador2024",
      demo:
        "https://encriptador2024.vercel.app/",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      status: "Proyecto realizado",
    },

    {
      title: "Rick and Morty",
      description:
        "Aplicación web desarrollada con React que consume una API REST para consultar y mostrar información de personajes.",
      image: rickmorty,
      github:
        "https://github.com/crysty72/nuevo-proyecto-Rick-and-Morty",
      technologies: [
        "React",
        "JavaScript",
        "API REST",
      ],
      status: "Proyecto realizado",
    },

    {
      title: "Barbería",
      description:
        "Sitio web frontend desarrollado para una barbería, con una interfaz orientada a la presentación de servicios.",
      image: barberia,
      github:
        "https://github.com/crysty72/Barberia-2024",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      status: "Proyecto realizado",
    },
  ];

  return (
    <section id="projects">
      <h2>Proyectos</h2>

      <p className="projects-intro">
        Una selección de proyectos que reflejan mi aprendizaje y
        evolución en el desarrollo frontend y las tecnologías web.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            demo={project.demo}
            technologies={project.technologies}
            status={project.status}
          />
        ))}
      </div>
    </section>
  );
}

