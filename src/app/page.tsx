'use client'

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaCopy, FaCheck, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import LogoCarousel from './components/LogoCarousel';
import Navbar from './components/Navbar';
import Experience from './components/Experience';

const HomePage = () => {

  const email = "joaquinsabater15@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
  };

  const technologies = [
    'mysql-original-wordmark.svg',
    'python.svg',
    'html.png',
    'php.png',    
    'prolog.png',
    'tailwind.svg',
    'typescript.svg',
    'c.png',
    '/next.svg',
    'java.png',
];



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
          alt="Avatar"
          className="relative z-10 w-24 h-24 rounded-full mb-4 md:w-32 md:h-32"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 relative z-10">Joaquin Sabater</h1>
        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center max-w-2xl relative z-10">
          Estudiante de la Licenciatura en Ciencias de la Computacion en la Universidad Nacional del Sur.
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
          <a href="https://github.com/JoaquinSabater" className="text-slate-900 hover:text-blue-500">
            <FaGithub size={52} />
          </a>
          <a href="https://www.linkedin.com/in/joaquin-sabater/" className="text-slate-800 hover:text-blue-500">
            <FaLinkedin size={52} />
          </a>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='tools'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Mis herramientas dareas</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
          Estas son las tecnologias que eh aprendido a lo largo de mi carrera y uso en mis proyectos.
          </p>
        </div>
        <LogoCarousel />
      </section>


      {/* Sección de Proyectos Principales*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Proyectos en los que estoy trabajando actualmente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wippass */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/logo_orange_on_transparent.png" alt="Wippass Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Customer Relationship Management</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                Actualmente estoy desarrollando el CRM de la empresa.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/next.svg" alt="Kubernetes Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/tailwind.svg" alt="AWS Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/mysql-original-wordmark.svg" alt="MySQL Image" className="w-10 h-10 mr-2" />

              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/JoaquinSabater/CRM-CellPhoneFree-Next.js" className="bg-black text-white px-4 py-2 rounded">Repositorio</a>
              </div>
            </div>
    
          </div>
        </div>
      </section>

      {/* Sección de Otros Proyectos*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Otros proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Compilador */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/compilador.png" alt="Portfolio Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Compilador de Mini Java</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                La implementacion de un compilador de MiniJava (una version acotada de JAVA), este proyecto fue requerido para aprobar la materia Compiladore e Interpretes, perteneciente al 4to año de la carrera Lic. en Ciencias de la Computacion.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/java.png" alt="java Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/JoaquinSabater/Compilador-Joaquin-Sabater" className="bg-black text-white px-4 py-2 rounded">Repositorio</a>
              </div>
            </div>
            {/* Vuelos */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/avion.png" alt="Project 2 Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Sistema de consultas y reserva de Vuelos</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                Proyecto realizado para la materia Base de Datos Sistema de consulta y reserva de vuelos implementado en Java utilizando una base de datos SQL.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/java.png" alt="Docker Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/mysql-original-wordmark.svg" alt="Grafana Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/drg-dcic-uns/proyectobd2022-sabater-lorenzetti" className="bg-black text-white px-4 py-2 rounded">Repositorio</a>
              </div>
            </div>

            {/* Proyecto Tik Tac Toe */}
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/tiktac.png" alt="Project 2 Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Tik tac toe flick</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                Proyecto realizado para la materia Logica para las Ciencias de la Computacion, Donde se implementa el juego Tik tac toe flick usando react y la logica en prolog.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/react.svg" alt="Docker Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/prolog.png" alt="Grafana Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/html.png" alt="Grafana Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/JoaquinSabater/Tic-tac-toe-flick" className="bg-black text-white px-4 py-2 rounded">Repositorio</a>
              </div>
            </div>
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
