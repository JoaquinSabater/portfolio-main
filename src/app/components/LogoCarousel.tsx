import React from 'react';

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

const LogoCarousel = () => {
    return (
      <div className="relative overflow-hidden mx-auto max-w-7xl">
        {/* Fondo de gradiente para desvanecer en los bordes */}
        <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-slate-50 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-slate-50 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Contenedor del carrusel */}
        <div className="flex animate-slide-infinite space-x-4">
          {technologies.concat(technologies).map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-[10%] lg:w-[14.2857%]">
              <img src={logo} alt={`Logo ${index + 1}`} className="h-6 md:h-10 lg:h-15 xl:h-20 w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LogoCarousel;