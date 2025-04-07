"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Medimarket",
    description:
      " Una plataforma web pensada para conectar proveedores y compradores de insumos médicos. Implementé funcionalidades de gestión de productos, control de stock, autenticación con roles y notificaciones por correo. Usé MongoDB para la base de datos y optimicé la experiencia del usuario con un diseño limpio y funcional.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://medic.shop",
  },
  {
    id: 2,
    title: "TheLyricsBay",
    description:
      " Un espacio digital pensado para que artistas puedan compartir sus letras, encontrar colaboradores y crear comunidad. Incluye sistema de publicaciones, perfiles personalizados y feed dinámico. Acá utilicé PostgreSQL como base relacional, y desarrollé toda la arquitectura en Node.js + Express, junto a un frontend ágil y atractivo en React + Vite.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "",
    previewUrl: "https://thelyricsbay.com",
  },
  {
    id: 3,
    title: "Energy Solutions",
    description:
      " Una página profesional para una empresa dedicada a la venta y mantenimiento de sistemas de energía ininterrumpida (UPS). Incluye catálogo de productos, sección de servicios, formulario de contacto con envío de correos y carga de imágenes de equipos. Utilicé MongoDB y enfoqué el diseño en la claridad y la experiencia del usuario.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LGKaufmann/Energy-Solutions-Front",
    previewUrl: "https://www.energy-solutions.com.ar",
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-8">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-4">
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
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
