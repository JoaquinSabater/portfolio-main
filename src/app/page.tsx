'use client'

import React from 'react';
import LogoCarousel from './components/LogoCarousel';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ProjectCard, { Project, Tech } from './components/ProjectCard';
import SectionTitle from './components/SectionTitle';

// Porcentaje de la carrera aprobado: se usa en el texto y en la barra de progreso
const degreeProgress = 92;
const progressBlocks = 25;

const highlightCard = 'rounded-xl border-2 border-slate-200 bg-white p-4 md:p-5';
const chip = 'rounded-md bg-emerald-50 px-2.5 py-1 text-sm font-medium text-emerald-800 ring-1 ring-emerald-700/10';

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

  return (

    <main className="flex flex-col items-center min-h-screen bg-slate-50 text-gray-800">
      <Navbar />
      <Hero />

      {/* Sección Sobre mí */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='about'>
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-14">
          {/* Foto con el mismo marco retro que las cards de proyectos */}
          <div className="mx-auto w-full max-w-[16rem] md:sticky md:top-28 md:mx-0 md:max-w-xs md:self-start md:pt-2">
            <img
              src="/profile-photo.jpg"
              alt="Foto de Joaquín Sabater"
              className="aspect-square w-full rounded-2xl border-2 border-[#034618] object-cover shadow-[6px_6px_0_0_#034618]"
            />
          </div>

          <div>
            <SectionTitle>Sobre mí</SectionTitle>
            <p className="text-lg md:text-xl text-slate-700 mb-6">
              Nací y crecí en Bahía Blanca, Argentina. Desde muy joven me interesaron la programación y la computación, tanto que a los 15 años entré a la escuela técnica, donde me recibí de <strong className="text-slate-900">Técnico en Informática Personal y Profesional</strong>.
            </p>
            <p className="text-lg md:text-xl text-slate-700">
              Con ganas de seguir perfeccionándome, empecé la <strong className="text-slate-900">Licenciatura en Ciencias de la Computación</strong> en la <strong className="text-slate-900">Universidad Nacional del Sur</strong>. Hoy estoy próximo a recibirme: tengo el <strong className="text-slate-900">{degreeProgress}% de la carrera aprobada</strong>, y combino el estudio con el desarrollo de sistemas para empresas y la docencia como ayudante de cátedra.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {/* Barra de progreso pixelada de la carrera */}
              <div className={`${highlightCard} col-span-2`}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-medium text-slate-600">Lic. en Ciencias de la Computación · UNS</p>
                  <p className="text-2xl font-bold text-[#034618]">{degreeProgress}%</p>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={degreeProgress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Porcentaje de la carrera aprobado"
                  className="mt-3 flex gap-[3px]"
                >
                  {Array.from({ length: progressBlocks }, (_, i) => (
                    <span
                      key={i}
                      className={`h-3 flex-1 ${
                        i < Math.round((degreeProgress / 100) * progressBlocks)
                          ? i % 2 === 0 ? 'bg-emerald-600' : 'bg-emerald-500'
                          : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className={highlightCard}>
                <p className="text-2xl font-bold text-[#034618]">Desde 2024</p>
                <p className="mt-1 text-sm text-slate-600">desarrollando sistemas para empresas</p>
              </div>
              <div className={highlightCard}>
                <p className="text-2xl font-bold text-[#034618]">Docente</p>
                <p className="mt-1 text-sm text-slate-600">ayudante de cátedra en la UNS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='tools'>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Mis herramientas diarias</SectionTitle>
          <p className="text-lg md:text-xl text-slate-700">
            Las tecnologías que uso en mis proyectos.
          </p>
          <div className="mt-5 mb-12 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm text-slate-500">También en el día a día:</span>
            <span className={chip}>Power BI</span>
            <span className={chip}>Agentes de IA</span>
            <span className={chip}>Asistentes de código</span>
          </div>
        </div>
        <LogoCarousel />
      </section>


      {/* Sección de Proyectos Principales*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Proyectos en los que trabajo actualmente</SectionTitle>
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
          <SectionTitle>Proyectos académicos</SectionTitle>
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
          <SectionTitle>Experiencia</SectionTitle>
          <Experience />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
