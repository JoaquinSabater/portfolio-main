'use client'

import React from 'react';
import { FaEnvelope, FaCopy, FaCheck, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import LogoCarousel from './components/LogoCarousel';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import ProjectCard, { Project, Tech } from './components/ProjectCard';

const tech = {
  next: { src: '/next.svg', name: 'Next.js' },
  typescript: { src: '/typescript.svg', name: 'TypeScript' },
  tailwind: { src: '/tailwind.svg', name: 'Tailwind CSS' },
  mysql: { src: '/mysql-original-wordmark.svg', name: 'MySQL' },
  java: { src: '/java.png', name: 'Java' },
  react: { src: '/react.svg', name: 'React' },
  prolog: { src: '/prolog.png', name: 'Prolog' },
  html: { src: '/html.png', name: 'HTML' },
} satisfies Record<string, Tech>;

const currentProjects: Project[] = [
  {
    title: 'CRM comercial',
    description: 'CRM interno de CellPhoneFree para el equipo de ventas: gestión de prospectos y clientes, pedidos preliminares, dashboard con métricas de ventas, recordatorios programados, notificaciones push y un bot de Telegram para consultas.',
    image: '/crm.png',
    techs: [tech.next, tech.typescript, tech.tailwind, tech.mysql],
    repo: 'https://github.com/JoaquinSabater/CRM-CellPhoneFree-Next.js',
  },
  {
    title: 'Ecommerce',
    description: 'Ecommerce de CellPhoneFree con panel de administración: catálogo de productos, control de qué datos técnicos se muestran, conversión de prospectos a clientes, seguimiento de pedidos y cuenta corriente de clientes.',
    image: '/Ecomerce.png',
    techs: [tech.next, tech.typescript, tech.tailwind, tech.mysql],
    repo: 'https://github.com/JoaquinSabater/EcommerceCPF',
  },
];

const academicProjects: Project[] = [
  {
    title: 'Compilador de Mini Java',
    description: 'La implementación de un compilador de MiniJava (una versión acotada de Java). Este proyecto fue requerido para aprobar la materia Compiladores e Intérpretes, perteneciente al 4to año de la carrera Lic. en Ciencias de la Computación.',
    image: '/compilador.png',
    techs: [tech.java],
    repo: 'https://github.com/JoaquinSabater/Compilador-Joaquin-Sabater',
  },
  {
    title: 'Sistema de consultas y reserva de Vuelos',
    description: 'Proyecto realizado para la materia Bases de Datos. Sistema de consulta y reserva de vuelos implementado en Java utilizando una base de datos SQL.',
    image: '/avion.png',
    techs: [tech.java, tech.mysql],
    repo: 'https://github.com/drg-dcic-uns/proyectobd2022-sabater-lorenzetti',
  },
  {
    title: 'Tic-tac-toe flick',
    description: 'Proyecto realizado para la materia Lógica para las Ciencias de la Computación, donde se implementa el juego Tic-tac-toe flick usando React y la lógica en Prolog.',
    image: '/tiktac.png',
    techs: [tech.react, tech.prolog, tech.html],
    repo: 'https://github.com/JoaquinSabater/Tic-tac-toe-flick',
  },
];

const HomePage = () => {

  const email = "joaquinsabater15@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (

    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-gray-800">
      <Navbar />
      {/* Primera Sección Visual */}
      <section className="relative w-full flex flex-col items-center justify-center py-12 px-4 text-gray-800 md:pb-48">
        {/* Círculo 1 */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-50 rounded-full mix-blend-multiply blur-xl transform -translate-y-1/2 animate-move-slower md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Círculo 2 */}
        <div className="absolute top-1/2 left-2/3 w-32 h-32 bg-lime-50 rounded-full mix-blend-multiply blur-2xl transform -translate-y-1/2 animate-move md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Contenido */}
        <img
          src="/profile-photo.jpg"
          alt="Foto de Joaquín Sabater"
          className="relative z-10 w-24 h-24 rounded-full mb-4 md:w-32 md:h-32"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 relative z-10">Joaquín Sabater</h1>
        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center max-w-2xl relative z-10">
          Desarrollador Full Stack y Analista Funcional. Estudiante avanzado de la Lic. en Ciencias de la Computación (Universidad Nacional del Sur).
        </p>
        {/* Sección de Contacto */}
        <div className="flex items-center space-x-4 mt-12 relative z-10 bg-gray-200/40 p-2 rounded-lg">
          <p className="text-lg md:text-xl text-gray-700">{email}</p>
          <a href={`mailto:${email}`} className="text-slate-400 hover:text-slate-500">
            <FaEnvelope size={24} />
          </a>
          <button onClick={handleCopyEmail} className="text-slate-400 hover:text-slate-500">
            {copied ? <FaCheck size={24} /> : <FaCopy size={24} />}
          </button>
        </div>
        <div className="flex space-x-8 mt-8 relative z-10">
          <a href="https://github.com/JoaquinSabater" aria-label="GitHub de Joaquín Sabater" className="text-slate-900 hover:text-blue-500">
            <FaGithub size={52} />
          </a>
          <a href="https://www.linkedin.com/in/joaquin-sabater/" aria-label="LinkedIn de Joaquín Sabater" className="text-slate-800 hover:text-blue-500">
            <FaLinkedin size={52} />
          </a>
        </div>
      </section>

      {/* Sección Sobre mí */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='about'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Sobre mí</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-6">
            Nací y crecí en Bahía Blanca, Argentina. Desde muy joven me interesaron la programación y la computación, tanto que a los 15 años entré a la escuela técnica, donde me recibí de <strong>Técnico en Informática Personal y Profesional</strong>.
          </p>
          <p className="text-lg md:text-xl text-gray-800">
            Con ganas de seguir perfeccionándome, empecé la <strong>Licenciatura en Ciencias de la Computación</strong> en la <strong>Universidad Nacional del Sur</strong>. Hoy estoy próximo a recibirme: tengo el <strong>89% de la carrera aprobada</strong>, y combino el estudio con el desarrollo de sistemas para empresas y la docencia como ayudante de cátedra.
          </p>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='tools'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Mis herramientas diarias</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
          Las tecnologías que uso en mis proyectos. También trabajo con Power BI y con herramientas de IA (agentes y asistentes de código) en el día a día.
          </p>
        </div>
        <LogoCarousel />
      </section>


      {/* Sección de Proyectos Principales*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Proyectos en los que trabajo actualmente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Proyectos Académicos*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='other-projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Proyectos académicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Experiencia */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='experience'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Experiencia</h2>
          <Experience />
        </div>
      </section>

    </main>
  );
};

export default HomePage;
