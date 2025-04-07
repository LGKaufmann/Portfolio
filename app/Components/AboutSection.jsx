"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-3 gap-2 list-disc pl-2">
        <li>Typescript</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Zustand</li>
        <li>Tailwind</li>
        <li>Node.Js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Tecnico Universitario en Programacion, Universidad Tecnológica
          Nacional , Argentina.
        </li>
        <li>Desarrollador Full Stack, Academia SoyHenry.</li>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-0">
        <Image
          src="/images/about-image.png"
          className="rounded-lg"
          width={600}
          height={800}
          alt="Foto de perfil"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mi</h2>
          <p className="text-sm lg:text-lg">
            ¡Hola! Soy Lautaro Kaufmann, desarrollador full stack con enfoque en
            frontend, de Argentina. Tengo 24 años y una gran pasión por
            transformar ideas en interfaces modernas, intuitivas y funcionales.
            Mi camino en la tecnología comenzó con el diseño web y rápidamente
            evolucionó hacia el desarrollo frontend, especializándome en
            herramientas como React, TypeScript, Vite, y TailwindCSS. Me encanta
            trabajar en la experiencia del usuario, cuidando cada detalle visual
            y de interacción para lograr productos que no solo funcionen bien,
            sino que se sientan bien. Aunque mi fuerte está en el frontend,
            también tengo experiencia desarrollando del lado del servidor con
            Node.js, Express, y bases de datos como PostgreSQL y MongoDB, lo que
            me permite entender y construir aplicaciones completas de punta a
            punta. Valoro la comunicación clara, la eficiencia y la colaboración
            en equipo. Siempre estoy buscando formas de crecer, mejorar mis
            habilidades y aportar soluciones reales y bien pensadas a cada
            proyecto en el que participo.
          </p>
          <div className="flex flex-row justify-start mt-6">
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
              Educación{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {""}
              Certificación{""}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
