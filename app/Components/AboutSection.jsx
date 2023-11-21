"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.Js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidad Tecnologica Nacional, Argentina</li>
        <li>Academia SoyHenry</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>EF SET English Certificate 46/100 (B1 Intermediate)</li>
        <li>Full Stack Developer, soyHenry</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:p">
        <Image src="/images/about.jpg" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mi</h2>
          <p className="text-base md:text-lg">
            ¡Hola! Soy Lautaro Kaufmann, un apasionado desarrollador full stack
            con una pasión por la creación de aplicaciones web y el desarrollo
            de software. Con solo 22 años, he estado inmerso en el mundo de la
            tecnología y he adquirido una amplia gama de habilidades para
            enfrentar los desafíos del desarrollo en todas sus capas. Mi viaje
            en el desarrollo comenzó con un amor por el diseño web y una
            curiosidad insaciable por aprender cómo interactúan los usuarios con
            las interfaces digitales. A medida que profundicé en el desarrollo
            front-end, descubrí la magia de HTML, CSS y JavaScript, y cómo estas
            herramientas pueden transformar ideas en experiencias interactivas y
            atractivas. A medida que mi pasión crecía, me aventuré en el
            desarrollo del lado del servidor y me sumergí en tecnologías como
            Node.js y Express. Además de mis habilidades técnicas, también
            valoro la comunicación efectiva y la capacidad de traducir ideas
            complejas en términos accesibles para todos los miembros del equipo.
            Creo en la importancia de la colaboración y el intercambio de
            conocimientos para lograr resultados excepcionales.
          </p>
          <div className="flex flex-row justify-start mt-">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Habilidades{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Educacion{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {""}
              Certificacion{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
