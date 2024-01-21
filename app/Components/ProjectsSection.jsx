"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Portfolio NextJS",
    description:
      "Proyecto realizado con el framework nextJS , con la libreria ReactJS utilizando estilos con Tailwind",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LGKaufmann/Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "RyM Project",
    description:
      "Proyecto integrador realizado en los modulos M2, M3 Y M4 del bootcamps soyHenry aplicando las tecnologias que iba aprendiendo en el camino.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pi-rym/PI-LGKaufmann",
    previewUrl: "https://therickandmortyproject.vercel.app",
  },
  {
    id: 3,
    title: "Pokemon Project",
    description:
      "Proyecto Individual donde combine todas las tecnologias aprendidas. Frontend: JS, HTML, CSS, React-Redux, Vite. Backend: NodeJS, Express, PostgreSQL, Sequelize.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LGKaufmann/PokemonPI",
    previewUrl: "https://mypokeapi-lgk.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
